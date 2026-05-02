// import "./App.css";

import { useEffect, useState } from "react";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
};

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div className=" min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[rgb(175,142,120)]">
        <h1 className="text-2xl font-bold mb-4">Presentes Artesanais</h1>

        <p className="max-w-xl mb-6 text-[rgb(102,79,66)]">
          Surpreenda com produtos feitos à mão e personalizados.
        </p>

        <div className="flex flex-col gap-4 mt-6">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="shadow-md rounded-lg p-4 w-72 mx-auto flex flex-col gap-2 bg-[#635656]"
            >
              <div className="w-full h-48 bg-[#3b3838] rounded-md flex items-center justify-center">
                <img
                  src={produto.imagem}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold mt-2">{produto.nome}</h2>

              <p className="text-lg font-semibold text-[rgb(232,140,140)]">
                R$ {produto.preco.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            document
              .getElementById("form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[rgb(232,140,140)] text-white px-6 py-3 rounded-lg"
        >
          Fazer encomenda
        </button>
      </section>

      <section id="form" className="h-[400px] flex items-center justify-center">
        <p className="text-[rgb(102,79,66)]">Formulário aqui amanhã 👀</p>
      </section>
    </div>
  );
}
