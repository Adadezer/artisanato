export function HeroSection() {
  return (
    /* HERO SECTION */
    <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 pt-24 pb-20 px-6">
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl md:text-8xl leading-[1.1] text-stone-900 font-medium mt-4">
          A Arte do <br />
          <span className="text-amber-700 font-serif italic pr-4">
            Manual
          </span>
        </h1>

        <p className="text-stone-600 text-xl max-w-lg leading-relaxed font-light">
          Transformamos matérias-primas em histórias tangíveis. Cada detalhe é
          pensado para trazer alma e calor ao seu ambiente.
        </p>

        <div className="flex flex-wrap gap-5 pt-4">
          <a
            href="#produtos"
            className="bg-stone-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-stone-800 flex items-center gap-2 group"
          >
            Destaques da temporada
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#encomenda"
            className="bg-white text-stone-800 border-2 border-stone-100 px-10 py-4 rounded-2xl font-bold hover:border-amber-200 hover:bg-amber-50/30 transition-all"
          >
            Personalizar
          </a>
        </div>
      </div>
      {/* </div> */}

      <div className="relative group overflow-visible flex items-center justify-center">
        <img
          src="/src/assets/hero2.jpg"
          alt="Artesanato de Luxo"
          className="w-[150%] h-auto object-cover scale-125"
        />
      </div>
    </section>
  );
}
