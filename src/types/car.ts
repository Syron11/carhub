export interface Car {
  id: string;
  name: string;
  price: number;
  currency: 'EUR' | 'USD' | 'KZT';
  specs: {
    hp: number; // Лошадиные силы
    year: number;
    mileage: number; // Пробег в км
  };
  imageUrl: string;
}