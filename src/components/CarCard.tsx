import { Link } from "react-router-dom";
import type { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-[#121212] border border-neutral-800 p-6 flex flex-col gap-4">
      {/* Здесь будет картинка, когда добавишь её в тип Car */}
      <div className="bg-neutral-800 h-60 w-full" />
      
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
        <Link 
          to={`/cars/${car.id}`} 
          className="px-6 py-2 border border-neutral-700 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}