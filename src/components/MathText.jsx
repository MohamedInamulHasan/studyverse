// src/components/MathText.jsx
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * MathText Component
 * Formats mathematical text using KaTeX for authentic mathematical typography:
 * - Proper vertical fractions: a/b, 3/(2x²), \frac{a}{b}
 *   Stacked numerator, horizontal division bar, denominator
 * - Classic mathematical curved italic font for ALL lowercase mathematical variables:
 *   a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
 *   (e.g. f(x), g(x), h(x), a = bq + r, 2^{mn}, x², 2x²)
 * - Proper superscripts: 2^{mn}, 2^{n(A \times B)}, x², etc.
 * - Cartesian products: uses proper multiplication symbol × (distinct from variable x)
 */

const UNICODE_SUPERSCRIPTS = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', '⁼': '=', '⁽': '(', '⁾': ')',
  'ⁿ': 'n', 'ᵐ': 'm', 'ⁱ': 'i', 'ˣ': ' \\times ', 'ʸ': 'y', 'ᶻ': 'z',
  'ᴬ': 'A', 'ᴮ': 'B', 'ᵀ': 'T'
};

const renderKatexHtml = (latex) => {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: false
    });
  } catch (err) {
    return null;
  }
};

// Precompute KaTeX HTML for all 26 lowercase math letters
const KATEX_LOWERCASE_VARS = {};
for (let i = 97; i <= 122; i++) {
  const ch = String.fromCharCode(i);
  KATEX_LOWERCASE_VARS[ch] = renderKatexHtml(ch);
}

// Common 2-letter English words & measurement units to keep as text
const COMMON_SHORT_WORDS = new Set([
  'is', 'of', 'in', 'to', 'if', 'it', 'on', 'as', 'at', 'by', 'an', 'be', 'or', 'no', 'so', 'do',
  'we', 'he', 'my', 'up', 'us', 'me', 'cm', 'mm', 'km', 'kg', 'sec', 'min', 'hr',
  'ii', 'iv', 'vi', 'ix', 'xi'
]);

// Reserved mathematical functions and words that should NOT be split into individual variables
const MATH_FUNCTION_WORDS = new Set([
  'sin', 'cos', 'tan', 'cot', 'sec', 'cosec', 'log', 'ln', 'lim', 'deg', 'rad'
]);

const PROSE_A_REGEX = /\b(is|with|find|as|be|if|of|for|define|in|at|to|into)\s+a\s+[a-z]{2,}/i;

// Convert unicode powers and formatting to clean LaTeX for fractions
const toLatexExponent = (str) => {
  if (!str) return '';
  return str
    .replace(/(sin|cos|tan|cot|sec|cosec)([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿᵐⁱˣʸᶻᴬᴮᵀ]+)/gi, (_, fn, sups) => {
      const exp = sups
        .split('')
        .map((c) => (UNICODE_SUPERSCRIPTS[c] !== undefined ? UNICODE_SUPERSCRIPTS[c] : c))
        .join('')
        .trim();
      return `\\${fn.toLowerCase()}^{${exp}}`;
    })
    .replace(/([a-zA-Z0-9)\]])([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿᵐⁱˣʸᶻᴬᴮᵀ\s]*[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿᵐⁱˣʸᶻᴬᴮᵀ])/g, (_, base, sups) => {
      const exp = sups
        .split('')
        .map((c) => (UNICODE_SUPERSCRIPTS[c] !== undefined ? UNICODE_SUPERSCRIPTS[c] : c))
        .join('')
        .trim();
      return `${base}^{${exp}}`;
    })
    .replace(/([a-zA-Z0-9)\]])\^(?:\{([^}]+)\}|\(([^\)]+)\)|([a-zA-Z0-9]+))/g, (_, base, e1, e2, e3) => {
      const cleanExp = e1 || e2 || e3;
      return `${base}^{${cleanExp}}`;
    })
    .replace(/×/g, ' \\times ');
};

export const MathText = ({ text = '', className = '' }) => {
  if (!text || typeof text !== 'string') return <span>{text}</span>;

  // Render mathematical lowercase letters in authentic KaTeX math italic typography
  const renderMathVars = (plainStr, keyPrefix) => {
    if (!plainStr || typeof plainStr !== 'string') return plainStr;

    // 1. Check for trig / math words first (sin, cos, tan, cot, sec, cosec, log, ln, lim)
    // 2. Then match 2-letter math variable products like bq, mn, xy
    // 3. Then match isolated single lowercase letters a-z
    const varRegex = /(^|[^a-zA-Z])([a-zA-Z]{1,5})(?=[^a-zA-Z]|$)/g;
    const chunks = [];
    let lastIdx = 0;
    let match;

    while ((match = varRegex.exec(plainStr)) !== null) {
      const pre = match[1];
      const token = match[2];
      const matchStart = match.index + pre.length;
      const lower = token.toLowerCase();

      // If recognized math function (sin, cos, tan, cot, sec, cosec, log, ln, lim)
      if (MATH_FUNCTION_WORDS.has(lower)) {
        if (match.index > lastIdx) {
          chunks.push(plainStr.substring(lastIdx, match.index));
        }
        if (pre) {
          chunks.push(pre);
        }
        const fnLatex = `\\${lower}`;
        const html = renderKatexHtml(fnLatex);
        if (html) {
          chunks.push(
            <span
              key={`${keyPrefix}-fn-${matchStart}`}
              className="inline-block align-baseline mx-0.5 select-text"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } else {
          chunks.push(token);
        }
        lastIdx = matchStart + token.length;
        continue;
      }

      // If token is longer than 2 letters and not a math function, leave as prose
      if (token.length > 2) {
        continue;
      }

      // Handle 2-letter words: if in common English words, keep as plain text
      if (token.length === 2 && COMMON_SHORT_WORDS.has(lower)) {
        continue;
      }

      // If token is uppercase or mixed case, keep as plain text unless single letter
      if (token !== lower && token.length > 1) {
        continue;
      }

      // Handle single letter 'a': if in English prose ("is a function", "with a radius"), keep as plain text
      if (token === 'a') {
        const windowStr = plainStr.substring(Math.max(0, matchStart - 15), Math.min(plainStr.length, matchStart + 20));
        if (PROSE_A_REGEX.test(windowStr)) {
          continue;
        }
      }

      // Handle single letter 'i' when used as a Roman numeral:
      // e.g. "i)", "(i)", "i.", "i,", or when "ii"/"iii" appears in the string
      if (token === 'i') {
        const nextChar = plainStr[matchStart + 1];
        if (nextChar === ')' || nextChar === '.' || nextChar === ',' || nextChar === ':') {
          continue;
        }
        if (/\b(?:ii|iii|iv|v)\b/i.test(plainStr)) {
          continue;
        }
      }

      // Handle possessive 's or contraction 's (e.g. Euclid's, let's, that's, Euler's)
      if (token === 's' && (pre.endsWith("'") || pre.endsWith("’"))) {
        continue;
      }

      if (match.index > lastIdx) {
        chunks.push(plainStr.substring(lastIdx, match.index));
      }
      if (pre) {
        chunks.push(pre);
      }

      // Render math variables using KaTeX math italic
      if (token.length === 1 && token >= 'a' && token <= 'z') {
        const html = KATEX_LOWERCASE_VARS[token] || renderKatexHtml(token);
        if (html) {
          chunks.push(
            <span
              key={`${keyPrefix}-mv-${matchStart}`}
              className="inline-block align-baseline mx-0.5 select-text"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } else {
          chunks.push(token);
        }
      } else if (token.length === 2 && token >= 'aa' && token <= 'zz') {
        // Multi-letter product like bq, mn, xy
        const html = renderKatexHtml(token);
        if (html) {
          chunks.push(
            <span
              key={`${keyPrefix}-mv2-${matchStart}`}
              className="inline-block align-baseline mx-0.5 select-text"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } else {
          chunks.push(token);
        }
      } else {
        chunks.push(token);
      }

      lastIdx = matchStart + token.length;
    }

    if (lastIdx < plainStr.length) {
      chunks.push(plainStr.substring(lastIdx));
    }

    return chunks;
  };

  // Format power expressions in plain text chunks
  const formatPowers = (str, keyPrefix = 'pow') => {
    if (!str || typeof str !== 'string') return str;

    // Matches trig functions with superscripts like sin² θ, tan² θ, cos² x OR
    // base followed by caret power ^{...}, ^(...), ^token OR unicode superscripts sequence
    const powRegex = /(?:(sin|cos|tan|cot|sec|cosec)|([a-zA-Z0-9)\]]))(?:\^(?:\{([^}]+)\}|\(([^\)]+)\)|([a-zA-Z0-9]+))|([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿᵐⁱˣʸᶻᴬᴮᵀ\s]*[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿᵐⁱˣʸᶻᴬᴮᵀ]))/gi;
    const parts = [];
    let lastIdx = 0;
    let match;

    while ((match = powRegex.exec(str)) !== null) {
      if (match.index > lastIdx) {
        const textChunk = str.substring(lastIdx, match.index);
        parts.push(
          <React.Fragment key={`${keyPrefix}-txt-${lastIdx}`}>
            {renderMathVars(textChunk, `${keyPrefix}-txt-${lastIdx}`)}
          </React.Fragment>
        );
      }

      const trigFn = match[1];
      const base = match[2];
      let exp = '';
      if (match[3]) {
        exp = match[3]; // ^{...}
      } else if (match[4]) {
        exp = match[4]; // ^(...)
      } else if (match[5]) {
        exp = match[5]; // ^token
      } else if (match[6]) {
        // unicode superscripts sequence
        exp = match[6]
          .split('')
          .map((c) => (UNICODE_SUPERSCRIPTS[c] !== undefined ? UNICODE_SUPERSCRIPTS[c] : c))
          .join('')
          .trim();
      }

      // Convert any LaTeX \times to unicode multiplication symbol ×
      exp = exp.replace(/×/g, ' \\times ');

      const latex = trigFn ? `\\${trigFn.toLowerCase()}^{${exp}}` : `${base}^{${exp}}`;
      const html = renderKatexHtml(latex);

      if (html) {
        parts.push(
          <span
            key={`${keyPrefix}-p-${match.index}`}
            className="inline-block align-baseline mx-0.5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } else {
        parts.push(
          <span key={`${keyPrefix}-p-${match.index}`} className="inline-block whitespace-nowrap">
            {trigFn ? trigFn : renderMathVars(base, `${keyPrefix}-b-${match.index}`)}
            <sup className="text-[0.72em] font-bold text-inherit relative -top-[0.42em] ml-0.5 select-text tracking-tight inline-block">
              {renderMathVars(exp, `${keyPrefix}-e-${match.index}`)}
            </sup>
          </span>
        );
      }

      lastIdx = match.index + match[0].length;
    }

    if (lastIdx < str.length) {
      const textChunk = str.substring(lastIdx);
      parts.push(
        <React.Fragment key={`${keyPrefix}-txt-${lastIdx}`}>
          {renderMathVars(textChunk, `${keyPrefix}-txt-${lastIdx}`)}
        </React.Fragment>
      );
    }

    return parts;
  };

  const formatLine = (lineStr, lineIdx) => {
    if (!lineStr) return null;

    // Fraction regex: LaTeX \frac{num}{den} OR inline division:
    // e.g. 3 / (2x²), 1 / (3x), (x + 6) / 3, (LM + LN - MN) / 2, 2/x, 15/6
    const fracRegex = /\\frac\s*\{\s*([^}]+)\s*\}\s*\{\s*([^}]+)\s*\}|(?:\(([a-zA-Z0-9\s+\-×·*.,²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿᵐ]+?)\)|(\b\d+[a-zA-Z²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿᵐ]*|\b[a-zA-Z]\b))\s*\/\s*(?:\(([a-zA-Z0-9\s+\-×·*.,²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿᵐ]+?)\)|(\b\d+[a-zA-Z²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿᵐ]*|\b[a-zA-Z]\b))/g;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = fracRegex.exec(lineStr)) !== null) {
      if (match.index > lastIndex) {
        const textChunk = lineStr.substring(lastIndex, match.index);
        parts.push(
          <React.Fragment key={`txt-${lineIdx}-${lastIndex}`}>
            {formatPowers(textChunk, `txt-${lineIdx}-${lastIndex}`)}
          </React.Fragment>
        );
      }

      let num, den;
      if (match[1] !== undefined && match[2] !== undefined) {
        num = match[1];
        den = match[2];
      } else {
        num = match[3] !== undefined ? match[3] : match[4];
        den = match[5] !== undefined ? match[5] : match[6];
      }

      // Convert numerator and denominator to clean LaTeX
      const latexNum = toLatexExponent(num.trim());
      const latexDen = toLatexExponent(den.trim());
      const latexFrac = `\\frac{${latexNum}}{${latexDen}}`;
      const html = renderKatexHtml(latexFrac);

      if (html) {
        parts.push(
          <span
            key={`frac-${lineIdx}-${match.index}`}
            className="inline-block align-middle mx-1"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } else {
        parts.push(
          <span
            key={`frac-${lineIdx}-${match.index}`}
            className="inline-flex flex-col items-center justify-center align-middle mx-1.5 text-center leading-none select-text"
          >
            <span className="border-b border-current px-1.5 pb-0.5 pt-0.5 text-[0.88em] font-semibold block">
              {formatPowers(num, `frac-n-${lineIdx}-${match.index}`)}
            </span>
            <span className="px-1.5 pt-0.5 pb-0.5 text-[0.88em] font-semibold block">
              {formatPowers(den, `frac-d-${lineIdx}-${match.index}`)}
            </span>
          </span>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < lineStr.length) {
      const textChunk = lineStr.substring(lastIndex);
      parts.push(
        <React.Fragment key={`txt-${lineIdx}-${lastIndex}`}>
          {formatPowers(textChunk, `txt-${lineIdx}-${lastIndex}`)}
        </React.Fragment>
      );
    }

    return parts;
  };

  const lines = text.split('\n');
  return (
    <span className={className}>
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {formatLine(line, idx)}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};

export default MathText;
