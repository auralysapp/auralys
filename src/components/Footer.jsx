const Footer = () => {
  return (
    <footer className="border-t border-white/20 pt-16 pb-8 relative z-10 bg-white/10 mt-20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center">
              <span className="font-bold text-white text-xs">A</span>
            </div>
            <span className="text-xl font-bold">Auralys</span>
          </div>

          <div className="flex gap-6 text-sm text-white/80 font-medium">
            <a href="https://www.tiktok.com/@auralysapp?_r=1&_t=ZN-97Gc5yqa0LW" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
            <a href="https://www.instagram.com/auralysapp?igsh=MTJ0cWtndTd6dG5iZA==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="mailto:contact@auralys.app" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

        <div className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} Auralys. All rights reserved. Built with passion for music.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
