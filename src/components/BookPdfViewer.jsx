// src/components/BookPdfViewer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  ZoomIn, 
  ZoomOut
} from 'lucide-react';

const DB_NAME = 'StudyVersePdfDB';
const STORE_NAME = 'uploaded_pdfs';

function openPdfDb() {
  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

async function getPdfFromIndexedDb(bookId) {
  try {
    const db = await openPdfDb();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(bookId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export function BookPdfViewer({ book, selectedClass, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [turningPageImg, setTurningPageImg] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasPdf, setHasPdf] = useState(false);
  const [zoom, setZoom] = useState(1.0);
  const [isPageJumpOpen, setIsPageJumpOpen] = useState(false);
  const [jumpPageInput, setJumpPageInput] = useState('');

  // Hidden arrows state - only show momentarily when touching right or left
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const arrowTimerRef = useRef(null);

  const canvasRef = useRef(null);
  const canvasSheetRef = useRef(null);
  const cardViewportRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);

  // Fixed card dimensions so the card NEVER expands or increases on zoom
  const [baseCardDimensions, setBaseCardDimensions] = useState({ width: 340, height: 480 });
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  // Panning & dragging states for mouse and touch
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartPosRef = useRef({ x: 0, y: 0 });
  const dragStartScrollRef = useRef({ left: 0, top: 0 });

  // Touch and pinch-to-zoom tracking refs
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);
  const initialPinchDistRef = useRef(null);
  const initialZoomRef = useRef(1.0);
  const isPinchingRef = useRef(false);
  const lastTapTimeRef = useRef(0);
  const lastScrollFlipTimeRef = useRef(0);

  const bookId = book?.id || 'book';
  const classNum = selectedClass?.number || 10;
  const subjectName = book?.subject || '';

  // Specific exact file names uploaded by user
  const exactUploadedFiles = {
    'tamil-10': '/pdfs/Class_10_Tamil_2025_Edition-www.tntextbooks.in.pdf',
    'english-10': '/pdfs/10th-English - www.tntextbooks.in.pdf',
    'maths-10': '/pdfs/Class_10_Mathematics_English_2025_Edition-www.tntextbooks.in.pdf',
    'science-10': '/pdfs/Class_10_Science_English_2024_Edition-www.tntextbooks.in.pdf',
    'social-10': '/pdfs/Class_10_Social_Science_English_2025_Edition-www.tntextbooks.in.pdf'
  };

  // Candidate paths where the user might upload/place the PDF
  const candidatePaths = [
    book?.pdfUrl,
    exactUploadedFiles[bookId],
    `/pdfs/${bookId}.pdf`,
    `/books/${bookId}.pdf`,
    `/pdfs/${classNum}th ${subjectName} Book.pdf`,
    `/books/${classNum}th ${subjectName} Book.pdf`,
    `/pdfs/${classNum}th ${subjectName}.pdf`,
    `/books/${classNum}th ${subjectName}.pdf`,
    `/pdfs/${subjectName}.pdf`,
    `/books/${subjectName}.pdf`,
    `/pdfs/${subjectName.toLowerCase()}.pdf`,
    `/books/${subjectName.toLowerCase()}.pdf`
  ].filter(Boolean);

  // 1. Dynamically load PDF.js from CDN
  const loadPdfJs = async () => {
    if (window.pdfjsLib) return window.pdfjsLib;
    return new Promise((resolve, reject) => {
      const existing = document.getElementById('pdfjs-cdn-script');
      if (existing) {
        existing.onload = () => resolve(window.pdfjsLib);
        return;
      }
      const script = document.createElement('script');
      script.id = 'pdfjs-cdn-script';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      script.onload = () => {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
          resolve(window.pdfjsLib);
        } else {
          reject(new Error('PDF.js not loaded'));
        }
      };
      script.onerror = () => reject(new Error('Failed to load PDF.js'));
      document.head.appendChild(script);
    });
  };

  // 2. Locate and load PDF file
  useEffect(() => {
    let isCancelled = false;

    const findAndLoadPdf = async () => {
      setIsLoading(true);
      try {
        const pdfjs = await loadPdfJs();

        // Check IndexedDB first
        const storedBuffer = await getPdfFromIndexedDb(bookId);
        if (storedBuffer && !isCancelled) {
          const loadingTask = pdfjs.getDocument({ data: storedBuffer });
          const doc = await loadingTask.promise;
          if (!isCancelled) {
            setPdfDoc(doc);
            setTotalPages(doc.numPages);
            setCurrentPage(1);
            setHasPdf(true);
            setIsLoading(false);
            return;
          }
        }

        // Check candidate file paths
        for (const path of candidatePaths) {
          try {
            const res = await fetch(path, { method: 'HEAD' });
            if (res.ok && res.status === 200) {
              const loadingTask = pdfjs.getDocument({
                url: path,
                cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
                cMapPacked: true,
              });
              const doc = await loadingTask.promise;
              if (!isCancelled) {
                setPdfDoc(doc);
                setTotalPages(doc.numPages);
                setCurrentPage(1);
                setHasPdf(true);
                setIsLoading(false);
                return;
              }
            }
          } catch {}
        }

        // If not found in any path, set hasPdf = false
        if (!isCancelled) {
          setHasPdf(false);
          setIsLoading(false);
        }
      } catch (err) {
        if (!isCancelled) {
          setHasPdf(false);
          setIsLoading(false);
        }
      }
    };

    findAndLoadPdf();

    return () => {
      isCancelled = true;
    };
  }, [bookId]);

  // 3. Render current page on canvas
  useEffect(() => {
    let renderCancelled = false;

    const renderPage = async () => {
      if (!pdfDoc || !canvasRef.current) return;

      try {
        if (renderTaskRef.current) {
          try {
            renderTaskRef.current.cancel();
          } catch {}
        }

        const page = await pdfDoc.getPage(currentPage);
        if (renderCancelled) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const unscaledViewport = page.getViewport({ scale: 1.0 });

        // Calculate available dimensions from containerRef
        const containerWidth = containerRef.current?.clientWidth || window.innerWidth || 360;
        const containerHeight = containerRef.current?.clientHeight || window.innerHeight || 600;

        // Maximize fit on mobile: slim 16px horizontal padding and ~68px allowance for toolbar + margins
        const maxCardW = Math.max(containerWidth - 16, 260);
        const maxCardH = Math.max(containerHeight - 68, 300);

        const scaleW = maxCardW / (unscaledViewport?.width || 595);
        const scaleH = maxCardH / (unscaledViewport?.height || 842);
        const baseScale = Math.min(scaleW, scaleH);

        const baseWidth = Math.round((unscaledViewport?.width || 595) * baseScale) || 340;
        const baseHeight = Math.round((unscaledViewport?.height || 842) * baseScale) || 480;

        setBaseCardDimensions({ width: baseWidth, height: baseHeight });

        // High resolution DPR rendering for crisp text
        const dpr = Math.min(window.devicePixelRatio || 1.5, 2.5);
        const computedScale = baseScale * zoom;
        const viewport = page.getViewport({ scale: computedScale * dpr });

        const displayWidth = Math.round(baseWidth * zoom);
        const displayHeight = Math.round(baseHeight * zoom);

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${displayWidth}px`;
        canvas.style.height = `${displayHeight}px`;

        // IMPORTANT: The card itself NEVER increases its size when zoomed!
        if (canvasSheetRef.current) {
          canvasSheetRef.current.style.width = `${baseWidth}px`;
          canvasSheetRef.current.style.height = `${baseHeight}px`;
        }

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        await renderTask.promise;

        if (cardViewportRef.current && isFlipping) {
          cardViewportRef.current.scrollTop = 0;
          cardViewportRef.current.scrollLeft = 0;
        }
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') {
          console.warn('Canvas render error:', err);
        }
      }
    };

    renderPage();

    return () => {
      renderCancelled = true;
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch {}
      }
    };
  }, [pdfDoc, currentPage, zoom, containerSize]);

  // Helper to snapshot current canvas for real page turn curl
  const snapshotCanvas = () => {
    if (!canvasRef.current) return null;
    try {
      return canvasRef.current.toDataURL('image/png');
    } catch {
      return null;
    }
  };

  // 4. Genuine 3D Book Page Turn Animation (Curling physical paper)
  const turnNext = () => {
    if (currentPage < totalPages && !isFlipping) {
      const img = snapshotCanvas();
      setTurningPageImg(img);
      setFlipDirection('next');
      setIsFlipping(true);

      // Instantly start rendering target page underneath
      setCurrentPage((p) => Math.min(totalPages, p + 1));
      if (containerRef.current) containerRef.current.scrollTop = 0;

      // Finish curl after 480ms
      setTimeout(() => {
        setIsFlipping(false);
        setTurningPageImg(null);
      }, 480);
    }
  };

  const turnPrev = () => {
    if (currentPage > 1 && !isFlipping) {
      const img = snapshotCanvas();
      setTurningPageImg(img);
      setFlipDirection('prev');
      setIsFlipping(true);

      // Instantly start rendering target page underneath
      setCurrentPage((p) => Math.max(1, p - 1));
      if (containerRef.current) containerRef.current.scrollTop = 0;

      // Finish curl after 480ms
      setTimeout(() => {
        setIsFlipping(false);
        setTurningPageImg(null);
      }, 480);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') triggerRightAction();
      if (e.key === 'ArrowLeft') triggerLeftAction();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, isFlipping]);

  // Flash arrow and perform action when touching right or left
  const triggerRightAction = () => {
    if (currentPage >= totalPages) return;
    setShowRightArrow(true);
    turnNext();
    if (arrowTimerRef.current) clearTimeout(arrowTimerRef.current);
    arrowTimerRef.current = setTimeout(() => {
      setShowRightArrow(false);
    }, 750);
  };

  const triggerLeftAction = () => {
    if (currentPage <= 1) return;
    setShowLeftArrow(true);
    turnPrev();
    if (arrowTimerRef.current) clearTimeout(arrowTimerRef.current);
    arrowTimerRef.current = setTimeout(() => {
      setShowLeftArrow(false);
    }, 750);
  };

  // Mouse Wheel: Scroll zoomed PDF smoothly inside card without accidental page turns
  const handleWheel = (e) => {
    if (cardViewportRef.current && zoom > 1.0) {
      cardViewportRef.current.scrollTop += e.deltaY;
      cardViewportRef.current.scrollLeft += e.deltaX;
    }
  };

  // Mouse Drag-to-Pan handlers (Google Maps / Figma style smooth click-and-drag)
  const handleMouseDown = (e) => {
    if (zoom <= 1.0) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartPosRef.current = { x: e.clientX, y: e.clientY };
    if (cardViewportRef.current) {
      dragStartScrollRef.current = {
        left: cardViewportRef.current.scrollLeft,
        top: cardViewportRef.current.scrollTop
      };
    }
  };

  useEffect(() => {
    const onWindowMouseMove = (e) => {
      if (!isDraggingRef.current || !cardViewportRef.current) return;
      const dx = e.clientX - dragStartPosRef.current.x;
      const dy = e.clientY - dragStartPosRef.current.y;
      cardViewportRef.current.scrollLeft = dragStartScrollRef.current.left - dx;
      cardViewportRef.current.scrollTop = dragStartScrollRef.current.top - dy;
    };

    const onWindowMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };

    window.addEventListener('mousemove', onWindowMouseMove);
    window.addEventListener('mouseup', onWindowMouseUp);
    return () => {
      window.removeEventListener('mousemove', onWindowMouseMove);
      window.removeEventListener('mouseup', onWindowMouseUp);
    };
  }, []);

  // Hand Touch, Drag-to-Pan, and Pinch-to-Zoom logic for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      // 2 fingers = Pinch-to-zoom by hand
      isPinchingRef.current = true;
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDistRef.current = dist;
      initialZoomRef.current = zoom;
    } else if (e.touches.length === 1) {
      isPinchingRef.current = false;
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;

      if (cardViewportRef.current && zoom > 1.0) {
        dragStartPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        dragStartScrollRef.current = {
          left: cardViewportRef.current.scrollLeft,
          top: cardViewportRef.current.scrollTop
        };
      }

      // Double tap to zoom in/reset
      const now = Date.now();
      if (now - lastTapTimeRef.current < 280) {
        setZoom((prev) => (prev > 1.2 ? 1.0 : 1.5));
      }
      lastTapTimeRef.current = now;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && initialPinchDistRef.current) {
      isPinchingRef.current = true;
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = currentDist / initialPinchDistRef.current;
      const newZoom = Math.min(2.5, Math.max(1.0, Number((initialZoomRef.current * factor).toFixed(2))));
      setZoom(newZoom);
    } else if (e.touches.length === 1 && zoom > 1.0 && cardViewportRef.current) {
      // 1-finger drag pans the zoomed layout smoothly
      const dx = e.touches[0].clientX - dragStartPosRef.current.x;
      const dy = e.touches[0].clientY - dragStartPosRef.current.y;
      cardViewportRef.current.scrollLeft = dragStartScrollRef.current.left - dx;
      cardViewportRef.current.scrollTop = dragStartScrollRef.current.top - dy;
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      initialPinchDistRef.current = null;
    }

    if (e.touches.length === 0) {
      if (isPinchingRef.current) {
        isPinchingRef.current = false;
        return;
      }

      if (touchStartXRef.current !== null && touchStartYRef.current !== null) {
        const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
        const diffY = e.changedTouches[0].clientY - touchStartYRef.current;

        const now = Date.now();
        const canFlip = now - lastScrollFlipTimeRef.current > 550 && !isFlipping;

        // ONLY horizontal swipe across screen turns page when NOT zoomed in
        if (canFlip && zoom <= 1.05) {
          if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
            if (diffX < 0 && currentPage < totalPages) {
              lastScrollFlipTimeRef.current = now;
              triggerRightAction();
            } else if (diffX > 0 && currentPage > 1) {
              lastScrollFlipTimeRef.current = now;
              triggerLeftAction();
            }
          }
        }
      }

      touchStartXRef.current = null;
      touchStartYRef.current = null;
    }
  };

  // Zoom Button Controls (Strictly 10% step)
  const handleZoomIn = () => {
    setZoom((z) => Math.min(2.5, Number((z + 0.10).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoom((z) => Math.max(1.0, Number((z - 0.10).toFixed(2))));
  };

  const handleResetZoom = () => {
    setZoom(1.0);
  };

  // Center scroll inside card viewport when zoom changes
  useEffect(() => {
    if (cardViewportRef.current && zoom > 1.0) {
      const displayW = Math.round(baseCardDimensions.width * zoom);
      const displayH = Math.round(baseCardDimensions.height * zoom);
      const scrollX = Math.max(0, (displayW - baseCardDimensions.width) / 2);
      const scrollY = Math.max(0, (displayH - baseCardDimensions.height) / 2);
      cardViewportRef.current.scrollLeft = scrollX;
      cardViewportRef.current.scrollTop = scrollY;
    } else if (cardViewportRef.current && zoom <= 1.0) {
      cardViewportRef.current.scrollLeft = 0;
      cardViewportRef.current.scrollTop = 0;
    }
  }, [zoom]);

  // Window resize observer to adapt book card immediately
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerSize({
          w: containerRef.current.clientWidth,
          h: containerRef.current.clientHeight
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock background body scroll while textbook viewer is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 sm:absolute sm:inset-0 z-50 flex flex-col h-[100dvh] sm:h-full max-h-screen sm:max-h-full bg-[#F8FAFC] text-slate-800 select-none overflow-hidden animate-fade-in font-sans">
      
      {/* Device Notch at top (Matches other pages in App.jsx exactly) */}
      <div className="hidden sm:flex justify-center pt-2.5 pb-1 bg-white shrink-0">
        <div className="h-4 w-28 bg-black rounded-full" />
      </div>

      {/* ======================================================== */}
      {/* 1. APP HEADER: Same exact size, padding & styling as other pages */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-5 pt-4 pb-3 flex items-center justify-between border-b border-slate-200/80 shrink-0">
        {/* Left: Clean Back Button */}
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-xs text-slate-800 hover:bg-slate-50 transition active:scale-95 shrink-0 cursor-pointer"
          title="Back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Center: Clean Bold Title */}
        <h1 className="text-base font-black text-slate-900 tracking-tight text-center truncate max-w-[200px] px-2 flex-1">
          {book?.subject} Textbook
        </h1>

        {/* Spacer to keep title centered */}
        <div className="w-9 h-9 shrink-0" />
      </header>



      {/* ======================================================== */}
      {/* 3. MAIN PDF CANVAS READING AREA (Centered in view)      */}
      {/* ======================================================== */}
      <main 
        ref={containerRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex-1 w-full overflow-y-auto overscroll-contain relative flex flex-col items-center justify-start sm:justify-center bg-[#F1F5F9] px-2 py-2 select-none"
      >
        {isLoading ? (
          /* Loading Indicator */
          <div className="my-auto flex flex-col items-center justify-center gap-2.5 p-6 text-center">
            <div className="h-8 w-8 rounded-full border-2 border-slate-800 border-t-transparent animate-spin" />
            <p className="text-xs font-bold text-slate-500">Opening textbook...</p>
          </div>
        ) : hasPdf ? (
          /* REAL BIG PDF CANVAS WITH GENUINE PAGE TURN EFFECT (CENTERED, NO LARGE BOTTOM PADDING) */
          <div className="relative w-full flex flex-col items-center justify-center">

            {/* Left Floating Arrow Button */}
            <button
              onClick={(e) => { e.stopPropagation(); triggerLeftAction(); }}
              disabled={currentPage <= 1 || isFlipping}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 border border-slate-200/90 shadow-2xl text-slate-800 transition-all duration-300 ${
                showLeftArrow && currentPage > 1
                  ? 'opacity-95 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-75 pointer-events-none'
              }`}
              title="Previous Page"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
            </button>

            {/* Right Floating Arrow Button */}
            <button
              onClick={(e) => { e.stopPropagation(); triggerRightAction(); }}
              disabled={currentPage >= totalPages || isFlipping}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 border border-slate-200/90 shadow-2xl text-slate-800 transition-all duration-300 ${
                showRightArrow && currentPage < totalPages
                  ? 'opacity-95 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-75 pointer-events-none'
              }`}
              title="Next Page"
            >
              <ChevronRight className="h-6 w-6 stroke-[2.5]" />
            </button>

            {/* ======================================================== */}
            {/* 2. DEDICATED TOOLBAR (Positioned directly ABOVE, near the PDF) */}
            {/* ======================================================== */}
            <div className="w-full max-w-[365px] mb-1.5 shrink-0 flex justify-center z-30 px-1">
              <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200/90 py-1.5 px-3 flex items-center justify-between gap-2.5">
                
                {/* Left Section: Modern Zoom Controls (10% step) */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 1.0}
                    className="h-7 w-7 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 flex items-center justify-center transition active:scale-90 cursor-pointer shadow-2xs"
                    title="Zoom Out (-10%)"
                  >
                    <ZoomOut className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={handleResetZoom}
                    className="px-2 py-0.5 rounded-lg text-xs font-black text-black bg-slate-50 border border-slate-200/80 hover:bg-slate-100 active:scale-95 transition cursor-pointer shadow-2xs"
                    title="Reset Zoom to 100%"
                  >
                    {Math.round(zoom * 100)}%
                  </button>

                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 2.5}
                    className="h-7 w-7 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 flex items-center justify-center transition active:scale-90 cursor-pointer shadow-2xs"
                    title="Zoom In (+10%)"
                  >
                    <ZoomIn className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Vertical Elegant Divider */}
                <div className="h-5 w-[1.5px] bg-slate-200 rounded-full" />

                {/* Right Section: Modern Page Turn & Direct Jump */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={triggerLeftAction}
                    disabled={currentPage <= 1 || isFlipping}
                    className="h-7 w-7 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 disabled:opacity-30 flex items-center justify-center transition active:scale-90 cursor-pointer shadow-2xs"
                    title="Previous Page"
                  >
                    <ChevronLeft className="h-4 w-4 stroke-[2.2]" />
                  </button>

                  {isPageJumpOpen ? (
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        const p = parseInt(jumpPageInput, 10);
                        if (p >= 1 && p <= totalPages) {
                          setCurrentPage(p);
                          setIsPageJumpOpen(false);
                          setJumpPageInput('');
                          if (cardViewportRef.current) {
                            cardViewportRef.current.scrollTop = 0;
                            cardViewportRef.current.scrollLeft = 0;
                          }
                        }
                      }}
                      className="flex items-center gap-1"
                    >
                      <input
                        type="number"
                        autoFocus
                        min={1}
                        max={totalPages}
                        value={jumpPageInput}
                        onChange={(e) => setJumpPageInput(e.target.value)}
                        placeholder={String(currentPage)}
                        className="w-12 px-1.5 py-0.5 text-center text-xs font-bold text-slate-900 bg-white border border-slate-800 rounded-lg outline-none focus:border-black"
                      />
                      <button
                        type="submit"
                        className="px-2 py-0.5 text-[11px] font-black bg-black text-white rounded-lg active:scale-95 cursor-pointer hover:bg-slate-800 shadow-2xs"
                      >
                        Go
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => {
                        setJumpPageInput(String(currentPage));
                        setIsPageJumpOpen(true);
                      }}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-black text-slate-900 bg-slate-50 border border-slate-200/80 hover:bg-slate-100 active:scale-95 transition font-mono tracking-wide cursor-pointer shadow-2xs"
                      title="Click to jump to page"
                    >
                      {currentPage} <span className="text-slate-400 font-medium">/</span> {totalPages}
                    </button>
                  )}

                  <button
                    onClick={triggerRightAction}
                    disabled={currentPage >= totalPages || isFlipping}
                    className="h-7 w-7 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 disabled:opacity-30 flex items-center justify-center transition active:scale-90 cursor-pointer shadow-2xs"
                    title="Next Page"
                  >
                    <ChevronRight className="h-4 w-4 stroke-[2.2]" />
                  </button>
                </div>

              </div>
            </div>

            {/* Physical Book Page Sheet Container (STAYS CONSTANT SIZE - NEVER INCREASES ON ZOOM) */}
            <div 
              ref={canvasSheetRef}
              className="relative rounded-2xl overflow-hidden bg-white border border-slate-300 shadow-xl flex items-center justify-center shrink-0"
              style={{
                width: `${baseCardDimensions.width}px`,
                height: `${baseCardDimensions.height}px`,
                boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.14), 0 4px 8px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Invisible touch zones when at normal 100% zoom */}
              {zoom <= 1.05 && (
                <>
                  <div 
                    onClick={triggerLeftAction}
                    className="absolute left-0 top-0 bottom-0 w-1/4 z-10 cursor-pointer"
                    title="Touch left to turn page back"
                  />
                  <div 
                    onClick={triggerRightAction}
                    className="absolute right-0 top-0 bottom-0 w-1/4 z-10 cursor-pointer"
                    title="Touch right to turn page forward"
                  />
                </>
              )}

              {/* Inner Scrollable / Pannable Viewport for Zoomed PDF Content */}
              <div 
                ref={cardViewportRef}
                onMouseDown={handleMouseDown}
                className={`w-full h-full overflow-auto relative touch-pan-x touch-pan-y ${
                  zoom > 1.0 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
                }`}
                style={{ 
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: zoom > 1.0 ? 'thin' : 'none',
                  scrollbarColor: '#94a3b8 transparent'
                }}
              >
                <div 
                  className="flex items-center justify-center min-w-full min-h-full"
                  style={{
                    width: zoom > 1.0 ? `${Math.round(baseCardDimensions.width * zoom)}px` : '100%',
                    height: zoom > 1.0 ? `${Math.round(baseCardDimensions.height * zoom)}px` : '100%',
                  }}
                >
                  {/* Base Document Layer: Target Page Canvas */}
                  <canvas 
                    ref={canvasRef} 
                    className="block bg-white shrink-0" 
                    style={{ maxWidth: 'none', maxHeight: 'none' }}
                  />
                </div>
              </div>

              {/* Genuine Curled Page Peeling Layer (Page Turn, NOT Box Flip) */}
              {isFlipping && turningPageImg && (
                <div 
                  className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-20 ${
                    flipDirection === 'next' ? 'anim-real-page-turn-next' : 'anim-real-page-turn-prev'
                  }`}
                >
                  <img 
                    src={turningPageImg} 
                    alt="" 
                    className="w-full h-full object-contain block bg-white" 
                  />
                  {/* Dynamic Paper Curl Ridge Shadow & Highlight */}
                  <div 
                    className={`absolute inset-0 ${
                      flipDirection === 'next' ? 'anim-curl-shadow-next' : 'anim-curl-shadow-prev'
                    }`} 
                  />
                </div>
              )}
            </div>

          </div>
        ) : (
          /* "NO TEXTBOOK AVAILABLE" - CLEAN EMPTY STATE */
          <div className="my-auto flex flex-col items-center justify-center p-6 text-center space-y-3 animate-fade-in">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-xs text-slate-400">
              <BookOpen className="h-8 w-8 stroke-[1.8]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-black text-slate-900">
                No textbook available
              </h3>
              <p className="text-xs font-semibold text-slate-400 max-w-[220px]">
                {selectedClass?.title} {book?.subject} textbook PDF has not been uploaded yet.
              </p>
            </div>
          </div>
        )}
      </main>

    </div>
  );
}
