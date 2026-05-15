import type { Produto } from "../types";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  produtos: Produto[];
};

export function ProductGrid({ produtos }: ProductGridProps) {
  return (
    /* PRODUCT GRID */
    <section id="produtos" className="px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-handwriting text-stone-900 mb-6 tracking-tight">
              Destaques da Temporada
            </h2>
            <p className="text-stone-500 text-lg">
              Confira os produtos vendidos nessa temporada, feito
              especialmente para você.
            </p>
          </div>
          {/* <div className="flex gap-4">
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
          </div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  );
}
