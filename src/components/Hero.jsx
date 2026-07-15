import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';

const Hero = ({ onWaitlistOpen }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-8 text-xs font-medium text-purple-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              Auralys Beta is coming soon 👀
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-5 sm:mb-8 leading-[1.1]">
              THE platform to rate, rank &<br className="hidden sm:block" />
              share the music you love.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-purple-50 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Dive into a new dimension of music exploration. Connect with a community of audiophiles, showcase your top tracks, and let the algorithm guide your next obsession.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={onWaitlistOpen}
                className="glass-button px-7 py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-base sm:text-lg hover:-translate-y-1 transition-transform duration-200"
              >
                Join the Waitlist <ArrowRight size={20} />
              </button>
              <a
                href="https://www.instagram.com/auralys.app"
                target="_blank" rel="noopener noreferrer"
                className="px-7 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center text-base sm:text-lg"
              >
                View Demo
              </a>
            </div>

            {/* Feature pills */}
            <div className="mt-10 sm:mt-12 flex items-center justify-center lg:justify-start gap-5 sm:gap-8 text-sm text-white/90 font-medium flex-wrap">
              <div className="flex items-center gap-2"><Star size={16} className="text-amber-300" /> Rate Albums</div>
              <div className="flex items-center gap-2"><TrendingUp size={16} className="text-white" /> Discover Trends</div>
              <div className="flex items-center gap-2"><Users size={16} className="text-pink-300" /> Share Taste</div>
            </div>
          </div>

          {/* Right: iPhone Mockup */}
          <div className="flex-1 w-full flex justify-center relative mt-6 lg:mt-0">
            <div
              className="animate-float relative w-full"
              style={{ maxWidth: 'min(280px, 65vw)' }}
            >
              {/* iPhone frame */}
              <div className="relative aspect-[9/19.5] bg-black rounded-[2.8rem] p-2 shadow-[0_20px_50px_rgba(147,51,234,0.3)] rotate-[-4deg] hover:rotate-0 transition-transform duration-500 ring-1 ring-white/10">

                {/* Hardware buttons */}
                <div className="absolute top-24 -left-2.5 w-1.5 h-10 bg-gray-800 rounded-l-md" />
                <div className="absolute top-36 -left-2.5 w-1.5 h-14 bg-gray-800 rounded-l-md" />
                <div className="absolute top-36 -right-2.5 w-1.5 h-16 bg-gray-800 rounded-r-md" />

                {/* Screen */}
                <div className="w-full h-full bg-surface rounded-[2.2rem] overflow-hidden relative">
                  <img
                    src="/screenshot.png"
                    alt="Auralys App Screenshot"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 sm:-right-8 top-1/4 glass-panel p-3 sm:p-4 rounded-2xl hidden sm:flex animate-pulse-slow shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Star size={18} className="text-purple-400 fill-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Starboy</div>
                    <div className="text-xs text-purple-100">Top Rated Today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
