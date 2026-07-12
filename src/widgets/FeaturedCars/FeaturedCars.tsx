import { useEffect, useState } from "react";
import type { JSX } from "react";
import { getFeaturedCars } from "../../services/api";
import type { Car } from "../../types/car";

export function FeaturedCars(): JSX.Element {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedCars().then((data) => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <section className="py-24 text-center text-white">Загрузка каталога...</section>;

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-light uppercase tracking-[0.2em] text-white mb-12">
          Эксклюзивные предложения
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="group border border-neutral-900 bg-[#0F0F0F] transition-all duration-500 hover:border-neutral-700">
              <div className="w-full h-64 bg-neutral-800" /> {/* Здесь будет картинка */}
              
              <div className="p-8">
                <h3 className="text-lg font-medium text-white mb-2">{car.name}</h3>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">
                  {car.specs.hp} л.с. • {car.specs.year} • {car.specs.mileage} км
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-white">
                    {new Intl.NumberFormat('ru-RU').format(car.price)} {car.currency}
                  </span>
                  <a href={`/cars/${car.id}`} className="px-6 py-2 border border-neutral-800 text-[10px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}