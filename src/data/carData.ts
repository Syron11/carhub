// src/data/carData.ts
export type CarData = {
  [key: string]: {
    [brand: string]: string[];
  };
};

export const carData: CarData = {
  "Купе": {
    "Ferrari": ["296 GTB", "812 Superfast", "Roma"],
    "Porsche": ["911 Turbo", "911 GT3"],
  },
  "Гиперкар": {
    "Ferrari": ["SF90 Stradale"],
    "McLaren": ["Senna"],
  },
  "Кроссовер": {
    "Lamborghini": ["Urus"],
    "Porsche": ["Panamera"],
  }
};