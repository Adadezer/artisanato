import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* NAVIGATION */
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-stone-100"
          : "bg-stone-50 border-b border-stone-100 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <img
          src="artizanato.png"
          alt="Artisanato da Isa"
          className="h-10 w-auto object-contain"
        />
        {/* <div className="hidden md:flex items-center gap-10 text-sm font-medium text-stone-500">
          <a
            href="#"
            className="hover:text-amber-700 transition-colors relative group"
          >
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#produtos"
            className="hover:text-amber-700 transition-colors relative group"
          >
            Coleção
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#encomenda"
            className="hover:text-amber-700 transition-colors relative group"
          >
            Encomendas
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </a>
        </div> */}

        <button className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-stone-200">
          Contato
        </button>
      </div>
    </nav>
  );
}
