// import "./App.css";

export default function App() {
  return (
    <div className=" min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-2xl font-bold mb-4">Presentes Artesanais</h1>

        <p className="max-w-xl mb-6 text-[rgb(102,79,66)]">
          Surpreenda com produtos feitos à mão e personalizados.
        </p>

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
