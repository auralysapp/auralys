const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#6738AA]/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/auralys-logo.svg" alt="Auralys Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tight">Auralys</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="bg-white text-purple-600 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg shadow-white/20">
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
