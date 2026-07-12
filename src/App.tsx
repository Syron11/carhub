import type { JSX } from "react";
import { Header } from "./widgets/Header/Header";
import { Hero } from "./widgets/Hero/Hero";
import { FeaturedCars } from "./widgets/FeaturedCars/FeaturedCars";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-[#0F0F0F] text-white antialiased overflow-x-hidden">
      {/* Шапка сайта (все иконки импортируются внутри неё) */}
      <Header />

      {/* Главный интерактивный 3D-блок */}
      <Hero />

      <FeaturedCars />
    </div>
  );
}