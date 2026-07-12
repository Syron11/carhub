import type { Car } from "../types/car";

export async function getFeaturedCars(): Promise<Car[]> {
  // Имитация задержки ответа сервера
  return [
    {
      id: "1",
      name: "Porsche 911 GT3 RS",
      price: 245000,
      currency: "EUR",
      imageUrl: "/car1.jpg",
      specs: {
        hp: 525,
        year: 2024,
        mileage: 0,
        fuelType: "Бензин",
        transmission: "Робот",
        engineVolume: 4.0,
        driveType: "Задний",
        bodyType: "Купе"
      },
      description: "Легендарный спорткар, созданный для трека, но допущенный на дороги общего пользования. Максимальная производительность и аэродинамика.",
      options: ["Климат-контроль", "Карбоновые сиденья", "Антикрыло GT3", "Керамические тормоза"],
      vinCode: "WP0ZZZ992RS123456",
      sellerComments: "Автомобиль в идеальном состоянии, без пробега. Полная комплектация Weissach package."
    }
  ];
}

export async function getCarById(id: string): Promise<Car | undefined> {
  const cars = await getFeaturedCars();
  return cars.find(car => car.id === id);
}