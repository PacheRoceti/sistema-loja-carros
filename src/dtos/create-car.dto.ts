import { Fuel } from '@prisma/client';

export interface CreateCarDTO {
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  km: number;
  fuel: Fuel;
  color?: string;
  description?: string;
}
