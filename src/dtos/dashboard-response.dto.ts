import { CarListResponseDTO } from './car-response.dto';

export interface DashboardResponseDTO {
  totalCars: number;
  totalSoldCars: number;
  totalAvailableCars: number;
  totalRevenue: number;
  lastSoldCars: CarListResponseDTO[];
}
