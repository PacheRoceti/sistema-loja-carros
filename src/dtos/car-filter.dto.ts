import { Fuel } from '@prisma/client';

export interface CarFilterDTO {
  brand?: string;
  fuel?: Fuel;
  year?: number;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}
