import { prisma } from '../config/prisma';
import { DashboardResponseDTO } from '../dtos/dashboard-response.dto';

class DashboardService {
  async execute(): Promise<DashboardResponseDTO> {
    const [
      totalCars,
      totalSoldCars,
      totalAvailableCars,
      soldCars,
      lastSoldCars,
    ] = await Promise.all([
      prisma.car.count(),
      prisma.car.count({ where: { isSold: true } }),
      prisma.car.count({ where: { isSold: false } }),
      prisma.car.findMany({
        where: { isSold: true },
        select: { price: true },
      }),
      prisma.car.findMany({
        where: { isSold: true },
        orderBy: { soldAt: 'desc' },
        take: 5,
        include: {
          images: {
            where: { isCover: true },
            take: 1,
          },
        },
      }),
    ]);

    const totalRevenue = soldCars.reduce(
      (sum, car) => sum + car.price,
      0
    );

    return {
      totalCars,
      totalSoldCars,
      totalAvailableCars,
      totalRevenue,
      lastSoldCars: lastSoldCars.map((car) => ({
        id: car.id,
        name: car.name,
        brand: car.brand,
        model: car.model,
        year: car.year,
        price: car.price,
        km: car.km,
        fuel: car.fuel,
        coverImage: car.images[0]?.imageUrl || null,
      })),
    };
  }
}

export { DashboardService };
