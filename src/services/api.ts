import type { Car } from "../types/car";

// Пока здесь массив, но потом здесь будет fetch('/api/cars')
export async function getFeaturedCars(): Promise<Car[]> {
  return [
    {
      id: "1",
      name: "Porsche 911 GT3 RS",
      price: 245000,
      currency: "EUR",
      specs: { hp: 525, year: 2024, mileage: 0 },
      imageUrl: "/car1.jpg"
    },
    // ... сюда будем добавлять данные
  ];
}