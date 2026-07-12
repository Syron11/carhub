export type FuelType = "Бензин" | "Дизель" | "Гибрид" | "Электро" | "Газ-бензин";
export type TransmissionType = "Автомат" | "Механика" | "Робот" | "Вариатор";
export type DriveType = "Передний" | "Задний" | "Полный";

export interface Car {
  id: string;
  name: string;
  price: number;
  currency: "USD" | "EUR" | "KZT";
  imageUrl: string;
  
  // Технические характеристики
  specs: {
    hp: number;
    year: number;
    mileage: number;
    fuelType: FuelType;      // Добавили тип топлива
    transmission: TransmissionType;
    engineVolume: number; 
    driveType: DriveType;
    bodyType: string; 
  };

  // Описание и детали
  description: string;
  options: string[]; 
  vinCode?: string; 
  sellerComments: string;
}