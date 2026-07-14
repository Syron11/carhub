import type { JSX } from "react";
import { Link } from "react-router-dom";
import showroomImage from "../assets/showroom.jpeg"; 

// Импорты логотипов
import porscheLogo from "../assets/brands/Porsche.svg";
import lamborghiniLogo from "../assets/brands/Lamborghini.svg";
import mclarenLogo from "../assets/brands/McLaren.svg";
import astonMartinLogo from "../assets/brands/Aston Martin.svg";
import bentleyLogo from "../assets/brands/Bentley.svg";
import ferrariLogo from "../assets/brands/Ferrari.svg";

const brands = [
  { name: "Porsche", logo: porscheLogo },
  { name: "Lamborghini", logo: lamborghiniLogo },
  { name: "McLaren", logo: mclarenLogo },
  { name: "Aston Martin", logo: astonMartinLogo },
  { name: "Bentley", logo: bentleyLogo },
  { name: "Ferrari", logo: ferrariLogo },
];

const carPhotos = [
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop"
];

export function About(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Заголовок */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest mb-6">О компании CARHUB</h1>
          <p className="max-w-2xl text-neutral-400 text-lg leading-relaxed">
            CARHUB — ваш персональный эксперт на рынке премиальных и эксклюзивных автомобилей. 
            Мы упрощаем процесс владения автомобилями высшего класса, обеспечивая полную прозрачность и профессиональную поддержку на каждом этапе.
          </p>
        </div>

        {/* Галерея логотипов */}
        <div className="mb-20">
          <h3 className="text-neutral-500 text-xs uppercase tracking-widest mb-10">Представленные бренды</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-l border-t border-neutral-800">
            {brands.map((brand) => (
              <div 
                key={brand.name} 
                className="h-32 border-r border-b border-neutral-800 flex items-center justify-center bg-neutral-900/30 hover:bg-neutral-800/30 transition-all duration-500 group p-6"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-16 w-auto object-contain opacity-40 grayscale-[20%] group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Галерея фотографий */}
        <div className="mb-20">
          <h3 className="text-neutral-500 text-xs uppercase tracking-widest mb-10">Наш шоурум</h3>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {carPhotos.map((src, i) => (
                <div key={i} className="aspect-[16/10] w-full overflow-hidden bg-neutral-900 border border-neutral-800">
                  <img 
                    src={src} 
                    alt={`Car ${i + 1}`} 
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 block" 
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <div className="w-full md:w-2/3 aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-800">
                <img src={showroomImage} alt="Showroom" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>
        </div>

        {/* Сетка преимуществ */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 border-t border-neutral-800 pt-12">
          {["Наша миссия", "Безупречность", "Сервис"].map((title) => (
            <div key={title}>
              <h3 className="text-xl mb-4">{title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {title === "Наша миссия" ? "Предоставить каждому клиенту эксклюзивный доступ к рынку суперкаров." :
                 title === "Безупречность" ? "Строгий технический аудит каждого автомобиля в нашем каталоге." :
                 "Полное сопровождение сделки и профессиональная логистика в любую точку мира."}
              </p>
            </div>
          ))}
        </div>

        {/* Финальный блок */}
        <div className="border border-neutral-800 p-12 text-center bg-neutral-900/20">
          <h2 className="text-2xl mb-8">Готовы выбрать свой автомобиль?</h2>
          <Link 
            to="/catalog" 
            className="inline-flex items-center justify-center min-h-[56px] px-10 py-4 bg-white font-bold uppercase hover:bg-neutral-200 transition-all duration-300 tracking-wider"
          >
            <span style={{ color: '#000000', display: 'block' }}>Перейти в каталог</span>
          </Link>
        </div>
      </div>
    </div>
  );
}