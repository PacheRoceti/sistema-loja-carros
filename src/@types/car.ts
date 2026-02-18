export type CarImage = {
  id: number;
  imageUrl: string;
  isCover: boolean;
};

export type Car = {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  km: number;
  fuel: string;
  description?: string;
  images: CarImage[];
};
