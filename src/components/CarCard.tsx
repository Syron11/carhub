import { Link } from "react-router-dom";
import type { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-[#121212] border border-neutral-800 p-6 flex flex-col gap-4 h-full">
      {/* Картинка с резервированием места (aspect-video) и эффектом загрузки */}
      <div className="w-full aspect-video overflow-hidden bg-neutral-800 animate-pulse">
        <img 
          src={car.imageUrl} 
          alt={car.name} 
          className="w-full h-full object-cover transition-opacity duration-500 opacity-0" 
          onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
        />
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white">{car.name}</h3>
        <p className="text-neutral-400 text-sm">
          {car.specs.hp} Л.С. • {car.specs.year} • {car.specs.mileage} КМ
        </p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg text-white font-mono">
          {car.price.toLocaleString()} {car.currency}
        </span>
        
        {/* Кнопка с исправленным hover-эффектом */}
        <Link 
          to={`/cars/${car.id}`} 
          className="flex items-center justify-center px-6 py-2 border border-white text-white text-xs uppercase tracking-widest transition-colors duration-300 hover:bg-white hover:!text-black"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}