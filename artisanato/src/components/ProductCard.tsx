import { useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import type { Produto } from "../types";

type ProductCardProps = {
  produto: Produto;
};

export function ProductCard({ produto }: ProductCardProps) {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade((prev) => prev + 1);
  };

  const diminuirQuantidade = () => {
    setQuantidade((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="group relative bg-stone-100 rounded-3xl overflow-hidden border border-stone-100">
      <div className="relative aspect-[4/5] overflow-hidden bg-white m-4 rounded-3xl">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-contain p-5 rounded-3xl"
        />
        {/* <div className="absolute top-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
        </div> */}
      </div>

      <div className="p-10 pt-4 flex flex-col items-center text-center md:items-start md:text-left">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/60">
            Artesanal • Único
          </span>
          <h3 className="text-2xl font-display font-medium text-stone-800 tracking-tight">
            {produto.nome}
          </h3>
        </div>

        <div className="flex flex-col gap-5 mt-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-stone-400 font-medium">
              Valor
            </span>

            <span className="text-3xl font-bold text-stone-900 font-display">
              {formatPrice(produto.preco * quantidade)}
            </span>
          </div>

          <div className="flex items-center justify-center w-full md:w-auto">
            <button
              onClick={diminuirQuantidade}
              className="bg-stone-200 text-stone-700 w-9 h-9 rounded-xl flex items-center justify-center hover:bg-stone-300 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>

            <span className="text-xl font-bold text-stone-900 font-display min-w-10 text-center">
              {quantidade}x
            </span>

            <button
              onClick={aumentarQuantidade}
              className="bg-stone-900 text-white w-9 h-9 rounded-xl flex items-center justify-center hover:bg-amber-700 transition-all"
            >
              <svg
                className="w-4 h-4"
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
        <button className="bg-amber-700 text-white p-5 rounded-2xl hover:bg-amber-900 justify-center w-full mt-5">
          Pedir
          {/* <svg
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
          </svg> */}
        </button>
      </div>
    </div>
  );
}
