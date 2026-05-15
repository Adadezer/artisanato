import { useEffect, useState } from "react";
import type { Produto } from "./types";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductGrid } from "./components/ProductGrid";
import { CustomOrderSection } from "./components/CustomOrderSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <HeroSection />
      <ProductGrid produtos={produtos} />
      <CustomOrderSection />
      <Footer />
    </div>
  );
}
