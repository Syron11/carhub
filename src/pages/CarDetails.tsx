import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarById } from "../services/api";
import type { Car } from "../types/car";
import { StatusRenderer } from "../components/StatusRenderer";

export function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      // setIsLoading(true) убрали, так как состояние уже true при инициализации
      getCarById(id)
        .then((data) => {
          if (data) setCar(data);
          else setError("Автомобиль не найден");
        })
        .catch(() => setError("Ошибка при загрузке данных"))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  return (
    <StatusRenderer isLoading={isLoading} error={error} isEmpty={!car}>
      {car && (
        <main className="container mx-auto px-12 py-20 text-white">
          <button 
            onClick={() => navigate(-1)} 
            className="mb-8 flex items-center text-neutral-400 hover:text-white transition-colors"
          >
            <span className="mr-2">←</span> Назад
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-2xl bg-neutral-800">
              <img src={car.imageUrl} alt={car.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold mb-2">{car.name}</h1>
                <p className="text-3xl font-mono text-neutral-300">
                  {car.price.toLocaleString()} {car.currency}
                </p>
              </div>

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
      )}
    </StatusRenderer>
  );
}