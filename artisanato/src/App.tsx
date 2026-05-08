import { useEffect, useState } from "react";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
};

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* NAVIGATION */}
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

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 pt-72 pb-20 px-6">
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
              className="bg-stone-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all hover:translate-y-[-4px] shadow-2xl shadow-stone-300 flex items-center gap-2 group"
            >
              Explorar Coleção
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

        <div className="relative group">
          <div className="absolute -inset-6 bg-gradient-to-tr from-amber-200 to-rose-100 rotate-3 -z-10 opacity-40 group-hover:rotate-6 transition-transform duration-700" />
          <div className="bg-white p-5  shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
            <img
              src="/src/assets/hero2.jpg"
              alt="Artesanato de Luxo"
              className=" w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* PRODUCT GRID */}
      <section id="produtos" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-handwriting text-stone-900 mb-6 tracking-tight">
                Destaques da Temporada
              </h2>
              <p className="text-stone-500 text-lg">
                Confira os produtos vendidos nessa temporada, feito
                especialmente para voce.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="p-4 rounded-2xl border border-stone-100 text-stone-400 hover:border-amber-200 hover:text-amber-700 hover:bg-amber-50 transition-all shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="p-4 rounded-2xl border border-stone-100 text-stone-400 hover:border-amber-200 hover:text-amber-700 hover:bg-amber-50 transition-all shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="group relative bg-stone-50 rounded-[48px] overflow-hidden border border-stone-100 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:translate-y-[-12px]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white m-4 rounded-[36px]">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-contain p-10 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl hover:bg-rose-500 hover:text-white transition-all text-stone-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-10 pt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/60">
                      Artesanal • Único
                    </span>
                    <h3 className="text-2xl font-medium text-stone-800 group-hover:text-amber-800 transition-colors">
                      {produto.nome}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div className="flex flex-col">
                      <span className="text-xs text-stone-400 font-medium">
                        Valor
                      </span>
                      <span className="text-3xl font-bold text-stone-900">
                        R$ {produto.preco}
                      </span>
                    </div>
                    <button className="bg-stone-900 text-white p-5 rounded-2xl hover:bg-amber-700 transition-all shadow-xl shadow-stone-200 group-hover:scale-110 active:scale-90">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM ORDER SECTION */}
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

      {/* FOOTER */}
      <footer className="py-24 px-6 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-handwriting text-stone-900 mb-8 tracking-tighter">
                Artisanato
              </h2>
              <p className="text-stone-500 text-lg max-w-sm leading-relaxed mb-10">
                Resgatando o valor do trabalho manual e a beleza da imperfeição
                deliberada em cada peça que criamos.
              </p>
              <div className="flex gap-6">
                {["Instagram", "Pinterest", "Behance"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-white transition-all duration-500"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-8">
                Navegação
              </h4>
              <ul className="flex flex-col gap-5 text-stone-500 font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-700 transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#produtos"
                    className="hover:text-amber-700 transition-colors"
                  >
                    Coleção
                  </a>
                </li>
                <li>
                  <a
                    href="#encomenda"
                    className="hover:text-amber-700 transition-colors"
                  >
                    Personalizados
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-700 transition-colors"
                  >
                    Nossa História
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-8">
                Atendimento
              </h4>
              <ul className="flex flex-col gap-5 text-stone-500 font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-700 transition-colors"
                  >
                    Envio & Prazos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-700 transition-colors"
                  >
                    Trocas & Devoluções
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-700 transition-colors"
                  >
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-700 transition-colors"
                  >
                    WhatsApp Suporte
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-stone-400 text-sm">
              © 2026 Artisanato Studio. Feito com paixão pelo manual.
            </p>
            <div className="flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-stone-300">
              <a href="#" className="hover:text-stone-600 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-stone-600 transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
