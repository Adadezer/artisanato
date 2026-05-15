export function Footer() {
  return (
    /* FOOTER */
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
                <a href="#" className="hover:text-amber-700 transition-colors">
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
                <a href="#" className="hover:text-amber-700 transition-colors">
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
                <a href="#" className="hover:text-amber-700 transition-colors">
                  Envio & Prazos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-700 transition-colors">
                  Trocas & Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-700 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-700 transition-colors">
                  WhatsApp Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
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
        </div> */}
      </div>
    </footer>
  );
}
