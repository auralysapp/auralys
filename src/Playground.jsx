import { useEffect, useRef, useState } from 'react';
import { Play, ArrowDown, Users, TrendingUp, Gift, Lock, Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import { MILESTONES, COMMUNITY_ADS, GOAL, fmt } from './playground/milestones';
import { createPlaygroundEngine } from './playground/engine';
import './Playground.css';

const CHIP = {
  amber: 'bg-amber-400/10 text-amber-400',
  pink: 'bg-pink-400/15 text-pink-200',
  sky: 'bg-sky-400/15 text-sky-200',
  purple: 'bg-purple-400/15 text-purple-200',
  emerald: 'bg-emerald-400/15 text-emerald-200',
};

/* The Auralys balloon, drawn like the app logo (three gores + basket). */
const BalloonShape = () => (
  <g fill="#fff">
    <path d="M455 193C360 228 297 300 297 412C297 560 395 680 465 742L471 740C432 640 408 520 408 412C408 305 428 238 455 193Z" />
    <path d="M540 190C600 190 636 290 636 420C636 562 600 680 570 750L512 750C480 680 444 562 444 420C444 290 480 190 540 190Z" />
    <path d="M625 193C720 228 783 300 783 412C783 560 685 680 615 742L609 740C648 640 672 520 672 412C672 305 652 238 625 193Z" />
    <rect x="440" y="780" width="200" height="120" rx="32" />
  </g>
);

const Ping = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
  </span>
);

export default function Playground() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const worldRef = useRef(null);
  const sceneRef = useRef(null);
  const balloonRef = useRef(null);
  const pillRef = useRef(null);
  const hudRef = useRef(null);
  const hudTextRef = useRef(null);
  const cardRefs = useRef([]);
  const engineRef = useRef(null);

  useEffect(() => {
    const engine = createPlaygroundEngine({
      world: worldRef.current,
      scene: sceneRef.current,
      balloon: balloonRef.current,
      pill: pillRef.current,
      cards: cardRefs.current,
      hud: hudRef.current,
      hudText: hudTextRef.current,
    });
    engineRef.current = engine;
    return () => engine.destroy();
  }, []);

  const next = MILESTONES.find((m) => m.ads > COMMUNITY_ADS);

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#A1A3F4] to-[#6738AA] selection:bg-white/30 text-white overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.4) 0%, transparent 70%)' }}
      />

      <Navbar onWaitlistOpen={() => setWaitlistOpen(true)} />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="relative z-10 pt-28 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-8 text-xs font-medium text-purple-100">
                <Ping />
                Coming soon to the Auralys app 🎈
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-5 sm:mb-8 leading-[1.1]">
                The Community<br />Playground.
              </h1>
              <p className="text-base sm:text-xl text-white/90 leading-relaxed mb-8">
                One balloon for the entire Auralys community. Every ad watched by any member lifts it a little
                higher, and every milestone it passes unlocks rewards for <b>everyone</b>.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => engineRef.current?.preview()}
                  className="bg-white text-purple-600 px-6 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg shadow-white/20 inline-flex items-center gap-2"
                >
                  <Play size={16} fill="currentColor" /> Preview the journey
                </button>
                <button
                  onClick={() => engineRef.current?.scrollToGround()}
                  className="px-6 py-3.5 rounded-full font-semibold bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/20 transition-colors inline-flex items-center gap-2"
                >
                  <ArrowDown size={16} /> See the balloon
                </button>
              </div>
            </div>

            {/* Community progress */}
            <div className="glass-panel flex-1 w-full max-w-md rounded-3xl p-7 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/75 mb-3">
                <Users size={14} /> Community altitude
              </div>
              <div className="text-4xl font-extrabold tracking-tight">
                {fmt(COMMUNITY_ADS)}
                <span className="text-base font-medium text-white/70 ml-1.5">/ {fmt(GOAL)} ads</span>
              </div>
              <div className="relative h-3 rounded-full bg-white/15 mt-6 mb-2">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-white to-fuchsia-200 shadow-[0_0_12px_rgba(255,255,255,0.6)] min-w-[0.75rem]"
                  style={{ width: `${(COMMUNITY_ADS / GOAL) * 100}%` }}
                />
                {MILESTONES.map((m) => (
                  <span
                    key={m.ads}
                    className="absolute top-1/2 w-3.5 h-3.5 -mt-[7px] -ml-[7px] rounded-full bg-[#7c5ad0] border-2 border-white/80"
                    style={{ left: `${(m.ads / GOAL) * 100}%` }}
                  />
                ))}
              </div>
              <div className="relative h-4 text-[10px] font-semibold text-white/70">
                {MILESTONES.map((m, i) => (
                  <span
                    key={m.ads}
                    className="absolute whitespace-nowrap"
                    style={i === MILESTONES.length - 1 ? { right: 0 } : { left: `${(m.ads / GOAL) * 100}%`, transform: 'translateX(-50%)' }}
                  >
                    {m.ads / 1000}K
                  </span>
                ))}
              </div>
              <p className="mt-5 pt-5 border-t border-white/15 text-sm text-white/85 leading-relaxed">
                {next ? (
                  <>The balloon is still <b className="text-white">on the ground</b>, waiting for lift-off. Next stop: <b className="text-white">{next.title} · {fmt(next.ads)} ads</b>.</>
                ) : (
                  <>The community reached the aurora! ✨</>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- World ---------- */}
        <section ref={worldRef} className="pg-world" aria-label="Community balloon journey">
          <div className="pg-aurora" aria-hidden="true"><i /><i /><i /></div>
          <svg ref={sceneRef} className="pg-scene" aria-hidden="true" />

          {MILESTONES.map((m, i) => {
            const Icon = m.icon;
            return (
              <article key={m.ads} ref={(el) => (cardRefs.current[i] = el)} className="pg-card glass-panel rounded-3xl p-5 sm:p-6">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-11 h-11 flex-none rounded-2xl flex items-center justify-center ${CHIP[m.chip]}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                      Milestone {i + 1} · {fmt(m.ads)} ads
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{m.title}</h3>
                  </div>
                </div>
                <p className="font-semibold text-[15px] mb-1.5">{m.reward}</p>
                <p className="text-sm leading-relaxed text-white/80">{m.desc}</p>
                <span className="pg-status inline-flex items-center gap-1.5 mt-3.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/85 transition-all">
                  <Lock size={13} className="pg-i-lock" />
                  <Check size={13} className="pg-i-check" />
                  <span className="pg-st-locked">Locked</span>
                  <span className="pg-st-on">Unlocked for everyone</span>
                </span>
              </article>
            );
          })}

          <div ref={pillRef} className="pg-ground-pill glass-panel rounded-full px-3.5 py-2 text-xs font-semibold flex items-center gap-2">
            <Ping /> Waiting for the community
          </div>

          <div ref={balloonRef} className="pg-balloon">
            <div className="pg-balloon-inner">
              <svg viewBox="290 185 500 720">
                <defs>
                  <radialGradient id="pg-flame" cx="50%" cy="70%" r="60%">
                    <stop offset="0" stopColor="#fff7d6" />
                    <stop offset=".5" stopColor="#ffcf6b" />
                    <stop offset="1" stopColor="#ff8fc7" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse className="pg-flame" cx="540" cy="760" rx="26" ry="24" fill="url(#pg-flame)" />
                <BalloonShape />
              </svg>
            </div>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section className="relative z-10 pt-16 sm:pt-24 bg-gradient-to-b from-[#4A2A84] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">A sky full of balloons. One community.</h2>
              <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg px-2">
                Let&apos;s be honest: ads are boring. But they help keep Auralys alive. Watch one, and get rewarded.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {[
                { icon: Play, chip: CHIP.amber, step: 'Step 1', title: 'Watch an ad', text: 'Whenever you feel like it, watch a short ad in the app. No obligation, no pressure: every single view counts for the community.' },
                { icon: TrendingUp, chip: CHIP.purple, step: 'Step 2', title: 'The balloon rises', text: 'All views from all members add up in real time. The more the community watches, the higher the balloon climbs along its path.' },
                { icon: Gift, chip: CHIP.pink, step: 'Step 3', title: 'Everyone unlocks', text: 'Each milestone the balloon passes unlocks its reward for every Auralys member at once, whether you watched one ad or a hundred.' },
              ].map(({ icon: Icon, chip, step, title, text }) => (
                <div key={title} className="glass-panel p-6 sm:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 ${chip}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1.5">{step}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base">{text}</p>
                </div>
              ))}
            </div>
            <div className="glass-panel mt-10 mx-auto max-w-3xl rounded-3xl px-7 py-6 flex gap-4 items-start text-white/90 leading-relaxed">
              <span className="text-2xl leading-none">💜</span>
              <p>
                <b className="text-white">This is the community playground.</b> Your own personal playground is
                   waiting for you in the app, coming in January.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div ref={hudRef} className="pg-hud glass-panel rounded-full pl-4 pr-2 py-2 flex items-center gap-3 text-sm font-semibold" role="status">
        <span className="w-2 h-2 flex-none rounded-full bg-amber-200 shadow-[0_0_10px_#fde68a]" />
        <span ref={hudTextRef} className="truncate">Preview</span>
        <button onClick={() => engineRef.current?.skip()} className="flex-none bg-white text-purple-600 rounded-full px-3.5 py-1.5 text-xs font-semibold">
          Skip
        </button>
      </div>

      <WaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}
