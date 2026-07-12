import { useEffect, useState } from "react";
import { CarCard } from "@/components/CarCard";
import { getFeaturedCars } from "@/services/api";
import type { Car } from "@/types/car";

export function FeaturedCars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getFeaturedCars().then(setCars);
  }, []);

  return (
    // Убираем p-10, добавляем вертикальные отступы py-20
    <section className="py-20">
      {/* Добавляем контейнер для центрирования и отступов */}
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-10">Популярные модели</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}