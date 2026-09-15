/* TEK renderer: the robot dog artwork and the meme drawing, shared by the site
   (index.html) and the asset factory (brand/factory.html). Change TEK here once. */
(function (global) {
  const INK = "#2B2A26";
  const W = 520, H = 430;                                  // artwork size
  const SCREEN = { cx: 155, cy: 113, w: 150, h: 94 };      // usable glass area

  const DEFS = `<defs>
    <radialGradient id="u-glass" cx="50%" cy="42%" r="70%"><stop offset="0" stop-color="#33280F"/><stop offset="1" stop-color="#12100C"/></radialGradient>
    <pattern id="u-scan" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="3" fill="#000" fill-opacity=".28"/></pattern>
    <filter id="u-bloom" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>`;

  const BODY = `
  <ellipse cx="270" cy="402" rx="220" ry="12" fill="${INK}" fill-opacity=".2"/>
  <path d="M436 250C480 248 500 212 488 180" fill="none" stroke="${INK}" stroke-width="14" stroke-linecap="round"/>
  <path d="M436 250C480 248 500 212 488 180" fill="none" stroke="#8F8672" stroke-width="5" stroke-linecap="round"/>
  <path d="M482 152V138M494 152V138" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
  <rect x="476" y="150" width="24" height="30" rx="5" fill="#DDD5C1" stroke="${INK}" stroke-width="5"/>
  <rect x="198" y="300" width="32" height="72" fill="#8F8672" stroke="${INK}" stroke-width="5"/>
  <rect x="402" y="300" width="32" height="72" fill="#8F8672" stroke="${INK}" stroke-width="5"/>
  <rect x="190" y="364" width="50" height="20" rx="9" fill="${INK}"/>
  <rect x="394" y="364" width="50" height="20" rx="9" fill="${INK}"/>
  <rect x="150" y="218" width="300" height="118" rx="22" fill="#B8AE96" stroke="${INK}" stroke-width="6"/>
  <rect x="140" y="210" width="300" height="118" rx="22" fill="#DDD5C1" stroke="${INK}" stroke-width="6"/>
  <rect x="300" y="234" width="96" height="11" rx="4" fill="${INK}"/>
  <circle cx="416" cy="240" r="10" fill="#E4472F" stroke="${INK}" stroke-width="4"/>
  <rect x="300" y="260" width="24" height="20" rx="5" fill="#C4BAA3" stroke="${INK}" stroke-width="4"/>
  <rect x="330" y="260" width="24" height="20" rx="5" fill="#C4BAA3" stroke="${INK}" stroke-width="4"/>
  <rect x="360" y="260" width="24" height="20" rx="5" fill="#C4BAA3" stroke="${INK}" stroke-width="4"/>
  <rect x="300" y="292" width="84" height="16" rx="5" fill="${INK}"/>
  <path d="M398 272h26M398 284h26M398 296h26M398 308h26" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
  <rect x="160" y="316" width="38" height="66" fill="#B8AE96" stroke="${INK}" stroke-width="6"/>
  <rect x="364" y="316" width="38" height="66" fill="#B8AE96" stroke="${INK}" stroke-width="6"/>
  <rect x="150" y="374" width="60" height="24" rx="10" fill="${INK}"/>
  <rect x="354" y="374" width="60" height="24" rx="10" fill="${INK}"/>`;

  const EARS = `
  <path d="M46 48C16 44 2 72 4 106C6 140 18 162 38 160L52 110Z" fill="#8F8672" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M276 52C306 48 320 76 318 110C316 144 304 166 284 164L270 112Z" fill="#8F8672" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>
  <circle cx="28" cy="78" r="4.5" fill="${INK}"/>
  <circle cx="298" cy="82" r="4.5" fill="${INK}"/>`;

  const HEAD = `
  <path d="M155 32V22" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
  <circle cx="155" cy="13" r="9" fill="#43D46C" stroke="${INK}" stroke-width="4.5"/>
  <rect x="50" y="40" width="230" height="176" rx="28" fill="#B8AE96" stroke="${INK}" stroke-width="7"/>
  <rect x="40" y="32" width="230" height="176" rx="28" fill="#E6DFCD" stroke="${INK}" stroke-width="7"/>
  <rect x="58" y="50" width="194" height="126" rx="20" fill="#4A463C" stroke="${INK}" stroke-width="5"/>
  <rect x="71" y="61" width="168" height="104" rx="14" fill="url(#u-glass)"/>
  <rect x="71" y="61" width="168" height="104" rx="14" fill="url(#u-scan)"/>
  <path d="M86 82c12-8 28-12 48-12" fill="none" stroke="#FFFFFF" stroke-opacity=".13" stroke-width="6" stroke-linecap="round"/>
  %SCREEN%
  <rect x="62" y="182" width="50" height="17" rx="4" fill="#CFC6B0" stroke="${INK}" stroke-width="3"/>
  <text x="87" y="195" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="11" fill="${INK}">TEK</text>
  <circle cx="128" cy="190.5" r="5" fill="#43D46C" stroke="${INK}" stroke-width="2.5"/>
  <path d="M198 184h46M198 191h46M198 198h46" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;

  const COLLAR = `
  <rect x="94" y="208" width="124" height="16" rx="8" fill="#2F4A63" stroke="${INK}" stroke-width="4"/>
  <path d="M156 224v6" stroke="${INK}" stroke-width="4"/>
  <circle cx="156" cy="242" r="13" fill="#FFB547" stroke="${INK}" stroke-width="4"/>
  <circle cx="156" cy="234.5" r="2.5" fill="${INK}"/>`;

  const DUCK = `
  <ellipse cx="72" cy="380" rx="31" ry="19" fill="#FFD23F" stroke="${INK}" stroke-width="5"/>
  <circle cx="88" cy="352" r="15" fill="#FFD23F" stroke="${INK}" stroke-width="5"/>
  <path d="M74 350l-19 4 19 7z" fill="#FF8A2B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="84" cy="347" r="2.6" fill="${INK}"/>`;

  // screen contents
  const SCREEN_TEXT = `<text data-screen x="${SCREEN.cx}" y="${SCREEN.cy}" text-anchor="middle" dominant-baseline="central" font-family="VT323, Consolas, monospace" font-size="72" fill="#FFB547" filter="url(#u-bloom)">&gt;_</text>`;
  const SCREEN_GLYPH = `<g filter="url(#u-bloom)"><path d="M124 90l24 23-24 23" fill="none" stroke="#FFB547" stroke-width="11" stroke-linecap="square" stroke-linejoin="miter"/><rect x="156" y="127" width="36" height="10" fill="#FFB547"/></g>`;

  /**
   * SVG markup for TEK.
   * screen: "text" (live <text> element), "glyph" (drawn >_ shapes, font-free), "empty" (for canvas)
   * part:   "full" (whole dog) or "head" (ears + monitor + collar, for the logo)
   */
  function unitMarkup(screen = "text", part = "full", extraAttrs = "") {
    const s = screen === "text" ? SCREEN_TEXT : screen === "glyph" ? SCREEN_GLYPH : "";
    const inner = part === "head"
      ? EARS + HEAD.replace("%SCREEN%", s) + COLLAR
      : BODY + EARS + HEAD.replace("%SCREEN%", s) + COLLAR + DUCK;
    const title = screen === "text" ? `<title id="unit-title">TEK, a robot dog with an old computer monitor for a head and a rubber duck at its feet</title>` : "<title>TEK</title>";
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" ${extraAttrs}>${title}${DEFS}${inner}</svg>`;
  }

  let unitImage = null;
  function loadUnit() {
    if (unitImage) return Promise.resolve(unitImage);
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(unitMarkup("empty", "full", `width="${W}" height="${H}"`));
    return img.decode().then(() => (unitImage = img));
  }

  function loadFonts() {
    if (!document.fonts) return Promise.resolve();
    return Promise.all([document.fonts.load("72px VT323"), document.fonts.load("900 80px Archivo")]).catch(() => null);
  }

  /** Fit screen text into an SVG <text> element (hero). */
  function setScreenText(textEl, value) {
    const lines = value.split("\n").slice(0, 3);
    const size = lines.length === 1 ? 72 : lines.length === 2 ? 54 : 40;
    textEl.setAttribute("font-size", size);
    textEl.textContent = "";
    lines.forEach((line, i) => {
      const t = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      t.setAttribute("x", String(SCREEN.cx));
      t.setAttribute("dy", i === 0 ? `${-(lines.length - 1) * 0.4}em` : "0.8em");
      t.textContent = line || " ";
      textEl.appendChild(t);
    });
    const box = textEl.getBBox();
    if (box.width > SCREEN.w) textEl.setAttribute("font-size", Math.floor(size * SCREEN.w / box.width));
  }

  function fitLines(ctx, text, maxW, maxH, maxLines, font, startSize, minSize, lineHeight) {
    for (let size = startSize; size >= minSize; size -= 2) {
      ctx.font = font(size);
      const lines = [];
      let line = "";
      for (const word of text.split(/\s+/)) {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = word; } else line = test;
      }
      if (line) lines.push(line);
      const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
      if (lines.length <= maxLines && lines.length * size * lineHeight <= maxH && widest <= maxW) return { size, lines };
    }
    ctx.font = font(minSize);
    return { size: minSize, lines: [text] };
  }

  /**
   * Draw a TEK meme onto a square canvas. Call loadUnit() + loadFonts() first.
   * opts: { screen, top, bottom, bg: "#hex" | null (transparent), dark, watermark: string | null }
   */
  function drawMeme(canvas, opts) {
    const ctx = canvas.getContext("2d");
    const S = canvas.width;
    const k = S / 1080; // layout designed at 1080px
    const top = (opts.top || "").trim();
    const bottom = (opts.bottom || "").trim();
    const ink = opts.dark ? "#E6DFCD" : INK;

    ctx.clearRect(0, 0, S, S);
    if (opts.bg) { ctx.fillStyle = opts.bg; ctx.fillRect(0, 0, S, S); }

    const pad = opts.bg ? 1 : 0;
    const topH = (top ? 250 : 80 * pad + 6) * k;
    const botH = (bottom ? 230 : 90 * pad + 6) * k;
    const avail = S - topH - botH;
    const scale = Math.min(avail / H, (opts.bg ? 940 * k : S - 12 * k) / W);
    const w = W * scale, h = H * scale;
    const x = (S - w) / 2, y = topH + (avail - h) / 2;
    ctx.drawImage(unitImage, x, y, w, h);

    const lines = (opts.screen || ">_").split("\n").slice(0, 3);
    const glassW = SCREEN.w * scale, glassH = SCREEN.h * scale;
    let size = Math.min(76 * scale, (glassH / lines.length) * 1.14);
    ctx.font = `${size}px VT323, Consolas, monospace`;
    const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
    if (widest > glassW) { size *= glassW / widest; ctx.font = `${size}px VT323, Consolas, monospace`; }
    ctx.save();
    ctx.fillStyle = "#FFB547";
    ctx.shadowColor = "rgba(255, 181, 71, .85)";
    ctx.shadowBlur = 14 * scale;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const cx = x + SCREEN.cx * scale, cy = y + SCREEN.cy * scale;
    lines.forEach((l, i) => ctx.fillText(l, cx, cy + (i - (lines.length - 1) / 2) * size * 0.8));
    ctx.restore();

    const capFont = (px) => `900 ${px}px Archivo, "Arial Black", Arial, sans-serif`;
    ctx.fillStyle = ink;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    if (top) {
      const { size: px, lines: ls } = fitLines(ctx, top, S - 140 * k, topH - 80 * k, 3, capFont, Math.round(88 * k), Math.round(36 * k), 1.02);
      const blockH = ls.length * px * 1.02;
      ls.forEach((l, i) => ctx.fillText(l, S / 2, 50 * k + (topH - 80 * k - blockH) / 2 + i * px * 1.02));
    }
    if (bottom) {
      const { size: px, lines: ls } = fitLines(ctx, bottom, S - 140 * k, botH - 90 * k, 3, capFont, Math.round(88 * k), Math.round(36 * k), 1.02);
      const blockH = ls.length * px * 1.02;
      const start = S - botH + 20 * k + (botH - 90 * k - blockH) / 2;
      ls.forEach((l, i) => ctx.fillText(l, S / 2, start + i * px * 1.02));
    }

    if (opts.watermark) {
      ctx.globalAlpha = 0.75;
      ctx.font = `${28 * k}px VT323, Consolas, monospace`;
      ctx.textAlign = "right";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(opts.watermark, S - 34 * k, S - 30 * k);
      ctx.globalAlpha = 1;
    }
  }

  global.TEKRender = { W, H, SCREEN, unitMarkup, loadUnit, loadFonts, setScreenText, drawMeme };
})(window);
