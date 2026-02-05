export interface CarListResponseDTO {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: any;
  km: number;
  fuel: string;
  coverImage: string | null;
}
