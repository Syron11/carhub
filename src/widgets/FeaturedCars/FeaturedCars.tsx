import { useEffect, useState } from "react";
import { CarCard } from "@/components/CarCard";
import { getFeaturedCars } from "@/services/api"; // Импортируй функцию
import type { Car } from "@/types/car";

export function FeaturedCars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getFeaturedCars().then(setCars); // Загружаем данные из твоего API
  }, []);

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">Популярные модели</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}