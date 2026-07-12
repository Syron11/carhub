import { useEffect, useState } from "react";
import { getFeaturedCars } from "../services/api"; // Импортируем правильную функцию
import { CarCard } from "../components/CarCard";
import { StatusRenderer } from "../components/StatusRenderer";
import type { Car } from "../types/car";

export function Catalog() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Используем getFeaturedCars вместо getCars
    getFeaturedCars()
      .then((data: Car[]) => {
        setCars(data);
      })
      .catch(() => setError("Не удалось загрузить каталог"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="container mx-auto px-12 py-10">
      <h1 className="text-4xl font-bold text-white mb-8">Каталог автомобилей</h1>
      
      <StatusRenderer isLoading={isLoading} error={error} isEmpty={cars.length === 0}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </StatusRenderer>
    </main>
  );
}