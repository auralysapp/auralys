import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onWaitlistOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((v) => !v);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#6738AA]/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img src="/auralys-logo.svg" alt="Auralys Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
          <span className="text-lg sm:text-xl font-bold tracking-tight">Auralys</span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onWaitlistOpen}
            className="bg-white text-purple-600 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg shadow-white/20"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={toggleMobile}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/10 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(103,56,170,0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="px-4 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/90 hover:text-white font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onWaitlistOpen(); }}
            className="mt-2 w-full bg-white text-purple-700 py-3 rounded-full font-semibold text-sm hover:bg-purple-50 transition-colors"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
