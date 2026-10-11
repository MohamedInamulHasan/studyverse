// src/components/VideoPlayer.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loader2, Play, Pause, Volume2, VolumeX, Maximize, Minimize, X, AlertCircle, RefreshCw, ExternalLink } from 'lucide-react';

const GOOGLE_DRIVE_REGEX = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
const GOOGLE_DRIVE_DIRECT_URL = 'https://drive.google.com/uc?export=download&id=';

export function VideoPlayer({
  src,
  poster,
  title = 'Video Player',
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  className = '',
  onError,
  onLoad,
  onPlay,
  onPause,
  onEnded,
}) {
  const [videoSrc, setVideoSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);

  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const progressRef = useRef(null);

  const convertGoogleDriveUrl = useCallback((url) => {
    if (!url) return url;
    const match = url.match(GOOGLE_DRIVE_REGEX);
    if (match) {
      return GOOGLE_DRIVE_DIRECT_URL + match[1];
    }
    return url;
  }, []);

  useEffect(() => {
    if (src) {
      const convertedSrc = convertGoogleDriveUrl(src);
      setVideoSrc(convertedSrc);
      setIsLoading(true);
      setHasError(false);
      setErrorMessage('');
    }
  }, [src, convertGoogleDriveUrl]);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
      setBuffered(video.buffered.length ? video.buffered.end(video.buffered.length - 1) : 0);
    }
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback((e) => {
    const video = videoRef.current;
    let message = 'Failed to load video';
    
    if (video?.error) {
      switch (video.error.code) {
        case video.error.MEDIA_ERR_ABORTED:
          message = 'Video loading was aborted';
          break;
        case video.error.MEDIA_ERR_NETWORK:
          message = 'Network error occurred while loading video';
          break;
        case video.error.MEDIA_ERR_DECODE:
          message = 'Video format not supported or corrupted';
          break;
        case video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          message = 'Video format not supported. Try a different format (MP4 recommended)';
          break;
        default:
          message = 'An unknown error occurred';
      }
    }
    
    setHasError(true);
    setErrorMessage(message);
    setIsLoading(false);
    onError?.(message);
  }, [onError]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      setCurrentTime(video.currentTime);
    }
  }, []);

  const handleProgress = useCallback(() => {
    const video = videoRef.current;
    if (video && video.buffered.length) {
      setBuffered(video.buffered.end(video.buffered.length - 1));
    }
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    onPlay?.();
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  }, [onPlay]);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    onPause?.();
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    setShowControls(true);
  }, [onPause]);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    onEnded?.();
    setShowControls(true);
  }, [onEnded]);

  const handleVolumeChange = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      setVolume(video.volume);
      setIsMuted(video.muted);
    }
  }, []);

  const handleWaiting = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handlePlaying = useCallback(() => {
    setIsLoading(false);
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, []);

  const handleSeek = useCallback((e) => {
    const video = videoRef.current;
    if (video && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const percentage = (e.clientX - rect.left) / rect.width;
      video.currentTime = percentage * video.duration;
    }
  }, []);

  const handleVolumeSeek = useCallback((e) => {
    const video = videoRef.current;
    if (video && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percentage = (e.clientX - rect.left) / rect.width;
      video.volume = Math.max(0, Math.min(1, percentage));
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (!document.fullscreenElement) {
        video.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  const handleRetry = useCallback(() => {
    setHasError(false);
    setErrorMessage('');
    setIsLoading(true);
    const video = videoRef.current;
    if (video) {
      video.load();
    }
  }, []);

  const handleOpenInNewTab = useCallback(() => {
    if (videoSrc) {
      window.open(videoSrc, '_blank');
    }
  }, [videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = autoplay;
      video.loop = loop;
      video.muted = muted;
      if (autoplay && !muted) {
        video.muted = true;
        video.play().then(() => {
          video.muted = muted;
        }).catch(() => {
          video.muted = muted;
        });
      }
    }
  }, [autoplay, loop, muted]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [handleFullscreenChange]);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + secs.toString().padStart(2, '0');
  };

  if (!videoSrc) {
    return (
      <div className={'w-full aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden ' + className}>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='text-center p-4'>
            <Loader2 className='h-8 w-8 mx-auto text-slate-400 animate-spin dark:text-slate-500' />
            <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>Preparing video...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={'relative w-full aspect-video bg-black rounded-2xl overflow-hidden ' + className}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => { if (isPlaying) { if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current); controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000); } else setShowControls(true); }}
      onTouchStart={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        playsInline
        webkitPlaysInline
        onLoadStart={handleLoadStart}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onError={handleError}
        onTimeUpdate={handleTimeUpdate}
        onProgress={handleProgress}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onVolumeChange={handleVolumeChange}
        onWaiting={handleWaiting}
        onPlaying={handlePlaying}
        onClick={togglePlay}
        className='w-full h-full object-contain'
      />

      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center bg-black/50 z-10'>
          <div className='flex flex-col items-center gap-3 text-white'>
            <Loader2 className='h-10 w-10 animate-spin text-white/80' />
            <p className='text-sm font-medium'>Loading video...</p>
          </div>
        </div>
      )}

      {hasError && (
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 z-10 text-center text-white'>
          <AlertCircle className='h-12 w-12 text-rose-400 mb-3' />
          <h3 className='text-lg font-semibold mb-1'>Unable to play video</h3>
          <p className='text-sm text-slate-300 mb-4 max-w-xs'>{errorMessage}</p>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <button
              onClick={handleRetry}
              className='px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2'
            >
              <RefreshCw className='h-4 w-4' />
              Retry
            </button>
            <button
              onClick={handleOpenInNewTab}
              className='px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2'
            >
              <ExternalLink className='h-4 w-4' />
              Open Directly
            </button>
          </div>
        </div>
      )}

      {controls && (
        <>
          <div 
            className={'absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 z-20 ' + 
              (showControls ? 'opacity-100' : 'opacity-0 pointer-events-none')
            }
          >
            <div className='flex items-center gap-3'>
              <div 
                ref={progressRef}
                className='flex-1 h-1.5 bg-white/20 rounded-full cursor-pointer relative'
                onClick={handleSeek}
                onMouseDown={(e) => {
                  handleSeek(e);
                  const moveHandler = (moveEvent) => handleSeek(moveEvent);
                  const upHandler = () => document.removeEventListener('mousemove', moveHandler);
                  document.addEventListener('mousemove', moveHandler);
                  document.addEventListener('mouseup', upHandler, { once: true });
                }}
              >
                {buffered > 0 && duration > 0 && (
                  <div
                    className='absolute top-0 left-0 h-full bg-white/40 rounded-full'
                    style={{ width: ((buffered / duration) * 100) + '%' }}
                  />
                )}
                {duration > 0 && (
                  <div
                    className='absolute top-0 left-0 h-full bg-white rounded-full shadow-md transition-all duration-75'
                    style={{ width: ((currentTime / duration) * 100) + '%' }}
                  />
                )}
              </div>
              <span className='text-xs text-white/80 font-mono w-20 text-right'>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <div className='flex items-center justify-between gap-3 mt-2'>
              <div className='flex items-center gap-2'>
                <button
                  onClick={togglePlay}
                  className='p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors'
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className='h-5 w-5' /> : <Play className='h-5 w-5' />}
                </button>
                <button
                  onClick={toggleMute}
                  className='p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors'
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? <VolumeX className='h-5 w-5' /> : <Volume2 className='h-5 w-5' />}
                </button>
                <div className='w-20 h-1.5 bg-white/20 rounded-full cursor-pointer relative' onClick={handleVolumeSeek}>
                  <div
                    className='absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-75'
                    style={{ width: (volume * 100) + '%' }}
                  />
                </div>
              </div>
              <div className='flex items-center gap-2'>
                {title && (
                  <span className='text-xs text-white/70 truncate max-w-[150px]'>{title}</span>
                )}
                <button
                  onClick={toggleFullscreen}
                  className='p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors'
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? <Minimize className='h-5 w-5' /> : <Maximize className='h-5 w-5' />}
                </button>
              </div>
            </div>
          </div>
          <div 
            className={'absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent transition-opacity duration-300 z-20 ' + 
              (showControls ? 'opacity-100' : 'opacity-0 pointer-events-none')
            }
          >
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-medium text-white truncate'>{title}</h3>
            </div>
          </div>
        </>
      )}

      {!controls && !hasError && (
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <button
            onClick={togglePlay}
            className='p-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all active:scale-95'
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className='h-8 w-8' /> : <Play className='h-8 w-8' />}
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
