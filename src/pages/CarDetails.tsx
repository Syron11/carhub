import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarById } from "../services/api";
import type { Car } from "../types/car";

export function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      getCarById(id).then((data) => {
        if (data) setCar(data);
      });
    }
  }, [id]);

  if (!car) return <div className="text-white p-20">Загрузка...</div>;

  return (
    <main className="container mx-auto px-12 py-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Левая колонка: Изображение */}
        <img src={car.imageUrl} alt={car.name} className="w-full h-auto rounded-lg shadow-2xl" />
        
        {/* Правая колонка: Информация */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-2">{car.name}</h1>
            <p className="text-3xl font-mono text-neutral-300">
              {car.price.toLocaleString()} {car.currency}
            </p>
          </div>

          {/* Техническая сетка */}
          <div className="grid grid-cols-2 gap-4 bg-[#1A1A1A] p-6 rounded-lg">
            <div><span className="text-neutral-500">Кузов:</span> {car.specs.bodyType}</div>
            <div><span className="text-neutral-500">Двигатель:</span> {car.specs.fuelType}</div>
            <div><span className="text-neutral-500">Объем:</span> {car.specs.engineVolume} л</div>
            <div><span className="text-neutral-500">Коробка:</span> {car.specs.transmission}</div>
            <div><span className="text-neutral-500">Привод:</span> {car.specs.driveType}</div>
            <div><span className="text-neutral-500">Мощность:</span> {car.specs.hp} л.с.</div>
            <div><span className="text-neutral-500">Год:</span> {car.specs.year}</div>
            <div><span className="text-neutral-500">Пробег:</span> {car.specs.mileage} км</div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Описание</h3>
            <p className="text-neutral-400">{car.description}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Опции</h3>
            <ul className="grid grid-cols-2 gap-2">
              {car.options.map((opt) => <li key={opt} className="text-neutral-400">• {opt}</li>)}
            </ul>
          </div>

          {car.vinCode && (
            <p className="text-xs text-neutral-600 font-mono">VIN: {car.vinCode}</p>
          )}

          {/* Блок кнопок: Связаться и Избранное с интерактивной иконкой */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-white text-black px-8 py-4 font-bold text-lg hover:bg-neutral-200 transition">
              СВЯЗАТЬСЯ С ПРОДАВЦОМ
            </button>
            
            <button 
              className={`w-16 flex items-center justify-center border border-neutral-700 transition ${
                isFavorite ? "bg-neutral-800" : "hover:bg-neutral-800"
              }`}
              onClick={() => setIsFavorite(!isFavorite)}
              title="Добавить в избранное"
            >
              <span className="text-2xl">{isFavorite ? "♥" : "♡"}</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}