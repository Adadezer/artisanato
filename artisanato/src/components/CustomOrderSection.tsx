export function CustomOrderSection() {
  return (
    /* CUSTOM ORDER SECTION */
    <section
      id="encomenda"
      className="py-32 px-6 bg-stone-50 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        <div className="bg-stone-900 p-12 md:p-24 rounded-[64px] shadow-[0_48px_96px_-12px_rgba(0,0,0,0.2)] text-center relative z-10 overflow-hidden">
          {/* Decorative background for the dark section */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

          <div className="inline-block bg-amber-500 text-stone-900 px-6 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-10">
            Personalização
          </div>

          <h2 className="text-5xl md:text-7xl font-handwriting text-white mb-8 leading-tight">
            Crie algo{" "}
            <span className="text-amber-500 italic font-serif">
              Memorável
            </span>
          </h2>

          <p className="text-stone-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Tem uma ideia específica? Nossa equipe de artesãos mestre está
            pronta para transformar seu conceito em realidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-stretch max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="bg-stone-800 border-2 border-stone-700 text-white px-8 py-5 rounded-[24px] w-full focus:outline-none focus:border-amber-500 transition-all placeholder:text-stone-500"
            />
            <button className="bg-amber-500 text-stone-900 px-10 py-5 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-amber-500/20 whitespace-nowrap">
              Solicitar Orçamento
            </button>
          </div>
        </div>

        {/* External decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-200 rounded-full blur-[80px] opacity-40 animate-pulse" />
        <div className="absolute top-20 -right-20 w-60 h-60 bg-amber-200 rounded-full blur-[100px] opacity-30" />
      </div>
    </section>
  );
}
