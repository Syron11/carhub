import type { JSX } from "react";
import { Link } from "react-router-dom"; // Импортируем Link для навигации
import { CarCanvas } from "./components/CarCanvas";

export function Hero(): JSX.Element {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-6 md:py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full relative z-10">
        
        {/* Левая колонка */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 max-w-xl w-full pt-4 md:pt-0">
          <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800/60">
            Exclusive Automotive Marketplace
          </span>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] md:leading-[1.1] text-white">
            Инженерия <br />
            <span className="font-medium text-neutral-400">высшего класса</span>
          </h1>
          
          <p className="text-sm sm:text-lg text-neutral-400 font-light leading-relaxed max-w-sm md:max-w-none">
            Ваш персональный доступ к закрытому рынку суперкаров и редких серийных автомобилей. Доставка в любую точку мира и безупречный сервис.
          </p>
          
          <div className="w-full sm:w-auto pt-2 md:pt-4">
            <Link 
              to="/catalog" 
              style={{ color: "#000000" }}
              className="block px-8 py-3.5 !bg-white !text-black font-medium text-xs md:text-sm rounded-sm hover:!bg-neutral-200 transition-colors duration-300 text-center uppercase tracking-wider"
            >
              Смотреть автомобили
            </Link>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="w-full relative flex items-center justify-center h-[280px] sm:h-[400px] md:h-auto min-h-[250px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[550px] md:h-[550px] bg-blue-500/10 md:bg-blue-500/5 blur-[60px] md:blur-[120px] rounded-full pointer-events-none z-0" />
          
          <div className="w-full h-full relative z-10">
            <CarCanvas modelPath="/models/porsche.glb" />
          </div>
        </div>

      </div>
    </section>
  );
}