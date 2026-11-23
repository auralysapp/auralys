/**
 * Playground scene engine (vanilla, imperative).
 * Draws the 2D world (sky, stars, clouds, floating islands, ground) in an SVG,
 * builds the predefined balloon path, positions the milestone cards and moves
 * the balloon according to the community ads counter.
 */
import { MILESTONES, FINAL_ADS, COMMUNITY_ADS, fmt } from './milestones';

/* ---------- Drawing helpers ---------- */
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smoothPath(p) {
  let d = `M${p[0].x} ${p[0].y}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
    d += ` C${p1.x + (p2.x - p0.x) / 6} ${p1.y + (p2.y - p0.y) / 6} ${p2.x - (p3.x - p1.x) / 6} ${p2.y - (p3.y - p1.y) / 6} ${p2.x} ${p2.y}`;
  }
  return d;
}

function hills(H, W, base, amp, minW, maxW, r) {
  let x = -r() * minW;
  let d = `M${x} ${H} L${x} ${base}`;
  while (x < W) {
    const w = minW + r() * (maxW - minW), h = amp * (0.5 + r() * 0.5);
    d += ` Q${x + w / 2} ${base - h * 2} ${x + w} ${base}`;
    x += w;
  }
  return d + ` L${x} ${H} Z`;
}

function cloud(x, y, s, op) {
  return `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}" fill="#fff">
    <ellipse cx="0" cy="0" rx="62" ry="20"/><circle cx="-24" cy="-10" r="22"/><circle cx="8" cy="-22" r="30"/><circle cx="38" cy="-8" r="19"/></g>`;
}

function island(cx, ty, w, sil) {
  const h = w * 0.62, x0 = cx - w / 2, x1 = cx + w / 2;
  const dirt = sil || '#7B4FB8', dirt2 = sil || '#5B3396', grass = sil || '#5ECB8B';
  let s = '';
  s += `<path d="M${cx - w * 0.18} ${ty + h + 16} l9 -4 l6 7 l-8 6 z" fill="${dirt}"/>`;
  s += `<path d="M${cx + w * 0.16} ${ty + h + 4} l6 -3 l4 5 l-6 4 z" fill="${dirt}"/>`;
  s += `<path d="M${x0 + 4} ${ty + 6} C${x0 + w * 0.06} ${ty + h * 0.45} ${cx - w * 0.22} ${ty + h * 0.72} ${cx - w * 0.03} ${ty + h} C${cx + w * 0.07} ${ty + h * 0.8} ${cx + w * 0.27} ${ty + h * 0.58} ${x1 - 4} ${ty + 6} Z" fill="${dirt}"/>`;
  if (!sil) {
    s += `<path d="M${cx + w * 0.02} ${ty + 8} C${cx + w * 0.14} ${ty + h * 0.3} ${cx + w * 0.06} ${ty + h * 0.7} ${cx - w * 0.03} ${ty + h} C${cx + w * 0.07} ${ty + h * 0.8} ${cx + w * 0.27} ${ty + h * 0.58} ${x1 - 4} ${ty + 6} Z" fill="${dirt2}" opacity=".85"/>`;
    s += `<path d="M${x0 + w * 0.22} ${ty + h * 0.32} h${w * 0.12} M${cx + w * 0.12} ${ty + h * 0.5} h${w * 0.08} M${cx - w * 0.14} ${ty + h * 0.62} h${w * 0.07}" stroke="#4A2780" stroke-width="3" stroke-linecap="round" opacity=".5"/>`;
    [[0.28, 26], [0.62, 38], [0.78, 18]].forEach(([f, len]) => {
      const vx = x0 + w * f;
      s += `<path d="M${vx} ${ty + 12} q4 ${len / 2} -2 ${len}" stroke="#3FA872" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="${vx - 2}" cy="${ty + 12 + len}" r="3" fill="#5ECB8B"/>`;
    });
  }
  const n = Math.max(5, Math.round(w / 26)), step = w / n;
  let d = `M${x1} ${ty + 10} C${x1 + 5} ${ty - 2} ${x1 - 4} ${ty - 9} ${x1 - 14} ${ty - 9} Q${cx} ${ty - 18} ${x0 + 14} ${ty - 9} C${x0 + 4} ${ty - 9} ${x0 - 5} ${ty - 2} ${x0} ${ty + 10}`;
  for (let i = 1; i <= n; i++) d += ` A${step / 2} ${step * 0.38} 0 0 0 ${x0 + step * i} ${ty + 10}`;
  s += `<path d="${d}Z" fill="${grass}"/>`;
  if (!sil) s += `<path d="M${x0 + 16} ${ty - 5} Q${cx} ${ty - 13} ${x1 - 16} ${ty - 5}" stroke="#B4F1C8" stroke-width="3" fill="none" stroke-linecap="round" opacity=".9"/>`;
  return s;
}

function tree(x, y, s, color) {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <rect x="-3" y="-26" width="6" height="26" rx="2" fill="#6B3F99"/>
    <circle cx="0" cy="-34" r="16" fill="${color}"/><circle cx="-10" cy="-26" r="10" fill="${color}"/><circle cx="10" cy="-27" r="11" fill="${color}"/>
    <circle cx="-5" cy="-40" r="5" fill="#fff" opacity=".35"/></g>`;
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Engine ---------- */
export function createPlaygroundEngine({ world, scene, balloon, pill, cards, hud, hudText }) {
  let L = null;
  let current = COMMUNITY_ADS;
  let parallaxEls = [];
  let running = false;
  let cancelled = false;
  let destroyed = false;

  function build() {
    const W = world.clientWidth;
    const mobile = W < 1024;
    // Mobile cards stack in one column and are taller, so milestones need more spacing.
    const H = mobile ? 620 + 640 + 580 * (MILESTONES.length - 1) : 2900;
    world.style.height = `${H}px`;
    scene.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const r = rng(7);

    world.style.background = `linear-gradient(180deg, rgba(103,56,170,0) 0px, #5A33A0 300px, #6738AA 700px, #7E55C9 ${H * 0.45}px, #A08AF0 ${H * 0.7}px, #E3A9E3 ${H - 330}px, #F6C1DF ${H - 200}px, #F6C1DF ${H}px)`;

    const bw = mobile ? 76 : 110, bh = bw * 1.44;
    const S = H - 190;
    const padX = W * 0.5;
    const restY = S - 6 - bh / 2;
    const yTop = mobile ? 620 : 560, yBottom = H - 640;
    const gap = (yBottom - yTop) / (MILESTONES.length - 1);

    const ms = MILESTONES.map((m, i) => {
      const y = yBottom - gap * i, left = i % 2 === 0;
      let px, ix, cw;
      if (mobile) {
        px = W * (left ? 0.13 : 0.21);
        const colL = W * 0.21 + bw / 2 + 14, colR = W - 14;
        cw = Math.min(340, colR - colL);
        ix = colL + (colR - colL) / 2;
      } else {
        px = W * (left ? 0.38 : 0.62);
        ix = px + (left ? -215 : 215);
        cw = 300;
      }
      return { ads: m.ads, x: px, y, ix, cw, dir: ix > px ? 1 : -1 };
    });

    const last = ms[ms.length - 1];
    const d = smoothPath([
      { x: padX, y: restY },
      { x: padX, y: restY - 150 },
      ...ms.map((m) => ({ x: m.x, y: m.y })),
      { x: mobile ? W * 0.2 : W * 0.5, y: last.y - 190 },
    ]);

    let s = '';
    // Stars
    s += '<g>';
    for (let i = 0; i < 80; i++) {
      const y = 80 + r() * 1000, op = Math.max(0.15, 1 - y / 1100);
      s += `<circle class="pg-twinkle" style="--d:${2 + r() * 3}s;animation-delay:-${r() * 4}s" cx="${r() * W}" cy="${y}" r="${0.6 + r() * 1.4}" fill="#fff" opacity="${op}"/>`;
    }
    s += '</g>';

    // Far floating islands (silhouettes)
    s += '<g data-depth="0.06">';
    for (let i = 0; i < (mobile ? 6 : 9); i++) {
      const x = r() * W, y = 500 + r() * (H - 1200), w = 50 + r() * 90;
      s += `<g class="pg-bob" style="--d:${5 + r() * 4}s;--a:${4 + r() * 6}px;animation-delay:-${r() * 6}s" opacity="${0.22 + r() * 0.2}">${island(x, y, w, '#E4D9FB')}</g>`;
    }
    s += '</g>';

    // Back clouds
    s += '<g data-depth="0.1">';
    for (let i = 0; i < (mobile ? 10 : 16); i++) {
      const x = r() * W, y = 350 + r() * (H - 700);
      s += `<g class="pg-drift" style="--d:${30 + r() * 30}s;--a:${30 + r() * 50}px;animation-delay:-${r() * 30}s">${cloud(x, y, 0.5 + r() * 0.7, 0.25 + r() * 0.3)}</g>`;
    }
    s += '</g>';

    // Path: dotted route + solid trail of the travelled part
    s += `<path d="${d}" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="3" stroke-dasharray="1 12" stroke-linecap="round"/>`;
    s += `<path data-trail class="pg-trail" d="${d}" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`;

    // Milestone islands
    ms.forEach((m, i) => {
      const w = mobile ? 132 : 200, ty = m.y + 26;
      const fx = m.ix - m.dir * w * 0.32, fd = m.dir;
      let g = `<g class="pg-island" data-island="${i}"><g class="pg-bob" style="--d:${5 + i * 0.7}s;--a:5px;animation-delay:-${i}s">`;
      g += island(m.ix, ty, w);
      g += tree(m.ix + m.dir * w * 0.18, ty - 6, mobile ? 0.75 : 1, i % 2 ? '#FFB0DA' : '#8BE3A8');
      if (!mobile) g += tree(m.ix + m.dir * w * 0.36, ty - 4, 0.7, i % 2 ? '#F59BD0' : '#6FD69C');
      g += `<line x1="${fx}" y1="${ty - 6}" x2="${fx}" y2="${ty - 70}" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
      g += `<g class="pg-flag"><path class="pg-flag-cloth" d="M${fx} ${ty - 70} L${fx + fd * 40} ${ty - 61} L${fx} ${ty - 50} Z" fill="#fff"/></g>`;
      g += `<text x="${fx + fd * 13}" y="${ty - 56}" text-anchor="middle" font-family="Inter" font-weight="800" font-size="11" fill="#7c3aed">${i + 1}</text>`;
      g += '</g></g>';
      s += g;
    });

    // Milestone nodes on the path
    ms.forEach((m, i) => {
      s += `<g class="pg-node" data-node="${i}"><circle cx="${m.x}" cy="${m.y}" r="13" fill="rgba(255,255,255,.18)" stroke="#fff" stroke-width="2"/><text x="${m.x}" y="${m.y + 4}" text-anchor="middle">${i + 1}</text></g>`;
    });

    // Front clouds
    s += '<g data-depth="-0.04">';
    for (let i = 0; i < (mobile ? 4 : 7); i++) {
      const x = r() * W, y = 700 + r() * (H - 1300);
      // never hide a milestone island or card behind a foreground cloud
      if (ms.some((m) => Math.abs(x - m.ix) < 190 && y > m.y - 330 && y < m.y + 200)) continue;
      s += `<g class="pg-drift" style="--d:${25 + r() * 20}s;--a:${40 + r() * 40}px;animation-delay:-${r() * 20}s">${cloud(x, y, 0.9 + r() * 0.6, 0.55 + r() * 0.25)}</g>`;
    }
    s += '</g>';

    // ---------- Ground ----------
    s += `<path d="${hills(H, W, S - 70, 70, 260, 460, r)}" fill="#D3BDF4" opacity=".75"/>`;
    s += `<path d="${hills(H, W, S - 18, 45, 180, 340, r)}" fill="#A8E6C2"/>`;
    for (let i = 0; i < W / 90; i++) s += `<ellipse cx="${r() * W}" cy="${S - 20 - r() * 30}" rx="3" ry="6" fill="#86D6A8"/>`;
    let tufts = `M0 ${S}`;
    for (let x = 0; x < W + 12; x += 12) tufts += ` L${x + 4} ${S - 5 - r() * 5} L${x + 12} ${S}`;
    s += `<path d="${tufts} L${W} ${H} L0 ${H} Z" fill="#5ECB8B"/>`;
    s += `<rect x="0" y="${S + 26}" width="${W}" height="${H - S}" fill="#6A3FA6"/>`;
    for (let x = 0; x < W + 22; x += 22) s += `<ellipse cx="${x}" cy="${S + 26}" rx="12" ry="8" fill="#5ECB8B"/>`;
    s += `<path d="M0 ${S + 4} H${W}" stroke="#8BE3A8" stroke-width="3" opacity=".7"/>`;
    for (let i = 0; i < W / 40; i++) s += `<ellipse cx="${r() * W}" cy="${S + 50 + r() * (H - S - 60)}" rx="${4 + r() * 7}" ry="${3 + r() * 4}" fill="#55308F"/>`;
    for (let i = 0; i < W / 220; i++) {
      const x = r() * W;
      if (Math.abs(x - padX) < bw * 1.6) continue;
      s += `<g fill="#46B97A"><circle cx="${x - 14}" cy="${S - 4}" r="12"/><circle cx="${x + 2}" cy="${S - 10}" r="16"/><circle cx="${x + 18}" cy="${S - 3}" r="11"/></g><circle cx="${x - 2}" cy="${S - 18}" r="4" fill="#fff" opacity=".3"/>`;
    }
    const fcols = ['#FF9BD2', '#FFFFFF', '#FFD66B', '#C9A7FF'];
    for (let i = 0; i < W / 26; i++) {
      const x = r() * W;
      if (Math.abs(x - padX) < bw * 0.9) continue;
      const c = fcols[Math.floor(r() * fcols.length)], hgt = 8 + r() * 10;
      s += `<line x1="${x}" y1="${S + 2}" x2="${x}" y2="${S - hgt}" stroke="#3FA872" stroke-width="1.6"/><circle cx="${x}" cy="${S - hgt}" r="4" fill="${c}"/><circle cx="${x}" cy="${S - hgt}" r="1.6" fill="#F7B733"/>`;
    }
    const sx = mobile ? Math.max(56, padX - bw - 80) : padX + 200;
    s += `<rect x="${sx - 3}" y="${S - 66}" width="6" height="68" rx="2" fill="#5B3396"/>
      <rect x="${sx - 50}" y="${S - 84}" width="100" height="40" rx="8" fill="#8A5BC4" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
      <text x="${sx}" y="${S - 67}" text-anchor="middle" font-family="Inter" font-weight="800" font-size="11" fill="#fff" letter-spacing="1">AIRFIELD</text>
      <text x="${sx}" y="${S - 53}" text-anchor="middle" font-family="Inter" font-weight="600" font-size="9.5" fill="#fff" opacity=".8">ALT. 0 m</text>`;
    s += `<ellipse class="pg-ground-shadow" cx="${padX}" cy="${S + 8}" rx="${bw * 0.8}" ry="10" fill="#3B1F6E" opacity=".35"/>`;
    s += `<rect x="${padX - bw * 0.5}" y="${S - 8}" width="${bw}" height="12" rx="5" fill="#8A5BC4"/><rect x="${padX - bw * 0.5}" y="${S - 8}" width="${bw}" height="4" rx="2" fill="#B08AE6"/>`;
    const ropeY = restY + bh * 0.3;
    s += `<g class="pg-tethers" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" fill="none">
      <path d="M${padX - bw * 0.27} ${ropeY} Q${padX - bw * 0.6} ${ropeY + 20} ${padX - bw * 0.95} ${S + 2}"/>
      <path d="M${padX + bw * 0.27} ${ropeY} Q${padX + bw * 0.6} ${ropeY + 20} ${padX + bw * 0.95} ${S + 2}"/>
      <rect x="${padX - bw * 0.95 - 3}" y="${S - 4}" width="6" height="10" rx="1.5" fill="#5B3396" stroke="none"/>
      <rect x="${padX + bw * 0.95 - 3}" y="${S - 4}" width="6" height="10" rx="1.5" fill="#5B3396" stroke="none"/>
    </g>`;

    scene.innerHTML = s;
    parallaxEls = [...scene.querySelectorAll('[data-depth]')];

    // Cards placement (content is rendered by React)
    ms.forEach((m, i) => {
      const el = cards[i];
      if (!el) return;
      const left = Math.min(Math.max(m.ix - m.cw / 2, 14), W - 14 - m.cw);
      el.style.left = `${left}px`;
      el.style.top = `${m.y + 26 - 86}px`;
      el.style.width = `${m.cw}px`;
    });

    balloon.style.width = `${bw}px`;
    balloon.style.height = `${bh}px`;
    pill.style.left = `${padX}px`;
    pill.style.top = `${restY - bh / 2 - 14}px`;

    // Path measurements
    const path = scene.querySelector('[data-trail]');
    const total = path.getTotalLength();
    path.style.strokeDasharray = total;
    const samples = [];
    for (let l = 0; l <= total; l += 3) samples.push([l, path.getPointAtLength(l)]);
    const mLens = ms.map((m) => {
      let best = 0, bd = Infinity;
      for (const [l, p] of samples) {
        const dd = (p.x - m.x) ** 2 + (p.y - m.y) ** 2;
        if (dd < bd) { bd = dd; best = l; }
      }
      return best;
    });

    L = {
      H, bw, bh, path, total, mLens, unlocked: -1,
      nodes: [...scene.querySelectorAll('[data-node]')],
      islands: [...scene.querySelectorAll('[data-island]')],
    };
    render(current, true);
    onScroll();
  }

  function adsToLen(ads) {
    const xs = [0, ...MILESTONES.map((m) => m.ads), FINAL_ADS];
    const ls = [0, ...L.mLens, L.total];
    ads = Math.max(0, Math.min(FINAL_ADS, ads));
    for (let i = 0; i < xs.length - 1; i++) {
      if (ads <= xs[i + 1]) return ls[i] + (ls[i + 1] - ls[i]) * ((ads - xs[i]) / (xs[i + 1] - xs[i]));
    }
    return L.total;
  }

  function render(ads, silent = false) {
    const len = adsToLen(ads);
    const p = L.path.getPointAtLength(len);
    const q = L.path.getPointAtLength(Math.min(L.total, len + 6));
    const tilt = len > 2 ? Math.max(-10, Math.min(10, (q.x - p.x) * 1.6)) : 0;
    balloon.style.transform = `translate(${p.x - L.bw / 2}px, ${p.y - L.bh / 2}px) rotate(${tilt}deg)`;
    L.path.style.strokeDashoffset = L.total - len;
    world.classList.toggle('pg-flying', ads > 0);

    let reached = -1;
    MILESTONES.forEach((m, i) => {
      const on = ads >= m.ads;
      if (on) reached = i;
      cards[i]?.classList.toggle('pg-on', on);
      L.nodes[i]?.classList.toggle('pg-on', on);
      L.islands[i]?.classList.toggle('pg-on', on);
    });
    if (!silent && reached > L.unlocked && cards[reached]) burst(cards[reached]);
    L.unlocked = reached;
    return p;
  }

  function burst(card) {
    if (reducedMotion()) return;
    const cols = ['#fff', '#fde68a', '#f9a8d4', '#a7f3d0', '#c4b5fd'];
    const x = card.offsetLeft + card.offsetWidth / 2, y = card.offsetTop - card.offsetHeight / 2;
    for (let i = 0; i < 34; i++) {
      const c = document.createElement('span');
      c.className = 'pg-confetti';
      c.style.background = cols[i % cols.length];
      c.style.left = `${x}px`;
      c.style.top = `${y}px`;
      world.appendChild(c);
      const a = Math.random() * Math.PI * 2, dist = 80 + Math.random() * 160;
      c.animate(
        [
          { transform: 'translate(0,0) rotate(0)', opacity: 1 },
          { transform: `translate(${Math.cos(a) * dist}px, ${Math.sin(a) * dist + 120}px) rotate(${Math.random() * 720}deg)`, opacity: 0 },
        ],
        { duration: 1200 + Math.random() * 600, easing: 'cubic-bezier(.2,.7,.4,1)' },
      ).onfinish = () => c.remove();
    }
  }

  function worldTop() {
    return world.getBoundingClientRect().top + window.scrollY;
  }

  function onScroll() {
    if (!L) return;
    const rel = window.scrollY - worldTop();
    for (const el of parallaxEls) el.style.transform = `translateY(${rel * parseFloat(el.dataset.depth)}px)`;
  }
  const scrollHandler = () => requestAnimationFrame(onScroll);

  /* ---------- Preview flight ---------- */
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const wait = (ms) => new Promise((res) => setTimeout(res, ms));
  const follow = (p) => window.scrollTo({ top: worldTop() + p.y - window.innerHeight * 0.55, behavior: 'instant' });
  const setHud = (text) => { hudText.textContent = text; };

  function tween(from, to, dur) {
    return new Promise((res) => {
      const t0 = performance.now();
      const f = (now) => {
        if (cancelled || destroyed) return res();
        const k = Math.min(1, (now - t0) / dur);
        current = from + (to - from) * ease(k);
        follow(render(current));
        setHud(`Preview · ${fmt(current)} community ads`);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
  }

  function scrollToGround(smooth = true) {
    if (!L) return;
    window.scrollTo({ top: worldTop() + L.H - window.innerHeight + 40, behavior: smooth ? 'smooth' : 'instant' });
  }

  async function preview() {
    if (running || !L) return;
    running = true;
    cancelled = false;
    hud.classList.add('pg-show');
    setHud('Preview · Getting ready for lift-off…');
    scrollToGround();
    await wait(900);
    let prev = current;
    for (let i = 0; i < MILESTONES.length && !cancelled; i++) {
      await tween(prev, MILESTONES[i].ads, 1900);
      prev = MILESTONES[i].ads;
      if (cancelled) break;
      setHud(`Milestone ${i + 1} · ${MILESTONES[i].title} unlocked for everyone!`);
      await wait(900);
    }
    if (!cancelled) {
      await tween(prev, FINAL_ADS, 1200);
      if (!cancelled) {
        setHud('The community reached the aurora ✨');
        await wait(1800);
        setHud('Back to reality… the balloon is waiting for you all 🎈');
        await tween(FINAL_ADS, COMMUNITY_ADS, 3200);
      }
    }
    stop();
  }

  function stop() {
    cancelled = true;
    running = false;
    current = COMMUNITY_ADS;
    if (L && !destroyed) render(current, true);
    hud.classList.remove('pg-show');
  }

  function skip() {
    stop();
    scrollToGround(false);
  }

  let rz;
  const resizeHandler = () => {
    clearTimeout(rz);
    rz = setTimeout(() => { if (!running) build(); }, 150);
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
  window.addEventListener('resize', resizeHandler);
  build();

  return {
    preview,
    skip,
    scrollToGround,
    destroy() {
      destroyed = true;
      cancelled = true;
      clearTimeout(rz);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    },
  };
}
