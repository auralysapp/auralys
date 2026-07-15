import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#A1A3F4] to-[#6738AA] selection:bg-white/30 text-white">
      {/* Decorative background radial */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.4) 0%, transparent 70%)' }}
      />

      <Navbar onWaitlistOpen={() => setWaitlistOpen(true)} />

      <main>
        <Hero onWaitlistOpen={() => setWaitlistOpen(true)} />
        <Features />
      </main>

      <Footer />

      <WaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}

export default App;
