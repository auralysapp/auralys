import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="flex-1 w-full max-w-2xl lg:max-w-none text-center lg:text-left pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs font-medium text-purple-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Auralys Beta is coming soon 👀
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              THE platform to rate, rank &<br className="hidden lg:block"/>
              share the music you love.
            </h1>

            <p className="text-lg lg:text-xl text-purple-50 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dive into a new dimension of music exploration. Connect with a community of audiophiles, showcase your top tracks, and let the algorithm guide your next obsession.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="glass-button w-full sm:w-auto px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-lg hover:-translate-y-1">
                Join the Waitlist <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center text-lg">
                View Demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-white/90 font-medium">
              <div className="flex items-center gap-2"><Star size={18} className="text-amber-300" /> Rate Albums</div>
              <div className="flex items-center gap-2"><TrendingUp size={18} className="text-white" /> Discover Trends</div>
              <div className="flex items-center gap-2"><Users size={18} className="text-pink-300" /> Share Taste</div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center relative animate-float mt-10 lg:mt-0">
            {/* iPhone Mockup Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19.5] bg-black rounded-[3rem] p-2 sm:p-3 shadow-[0_20px_50px_rgba(147,51,234,0.3)] rotate-[-4deg] hover:rotate-0 transition-transform duration-500 ring-1 ring-white/10">

              {/* Hardware buttons simulation */}
              <div className="absolute top-32 -left-3 w-1.5 h-12 bg-gray-800 rounded-l-md"></div>
              <div className="absolute top-48 -left-3 w-1.5 h-16 bg-gray-800 rounded-l-md"></div>
              <div className="absolute top-48 -right-3 w-1.5 h-20 bg-gray-800 rounded-r-md"></div>

              {/* Screen */}
              <div className="w-full h-full bg-surface rounded-[2.2rem] overflow-hidden relative flex flex-col items-center justify-center">

                <img src="/screenshot.png" alt="Auralys App" className="absolute inset-0 w-full h-full object-cover z-20" />

              </div>
            </div>

            {/* Floating UI Elements for depth */}
            <div className="absolute right-0 lg:-right-6 top-1/4 glass-panel p-4 rounded-2xl hidden md:flex animate-pulse-slow shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Star size={20} className="text-purple-400 fill-purple-400" />
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
    </section>
  );
};

export default Hero;
