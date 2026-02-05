import { prisma } from '../config/prisma';
import { CarListResponseDTO } from '../dtos/car-response.dto';
import { CreateCarDTO } from '../dtos/create-car.dto';
import { CarFilterDTO } from '../dtos/car-filter.dto';
import { PaginationResponseDTO } from '../dtos/pagination-response.dto';
import { getPagination } from '../utils/pagination';
import { AppError } from '../errors/AppError';

class CarService {
  async create(data: CreateCarDTO) {
    return prisma.car.create({ data });
  }

  async list(
    filters: CarFilterDTO
  ): Promise<PaginationResponseDTO<CarListResponseDTO>> {
    const {
      brand,
      fuel,
      year,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
    } = filters;

    const { skip, take } = getPagination(page, limit);

    const where: any = {
      isSold: false,
    };

    if (brand) where.brand = brand;
    if (fuel) where.fuel = fuel;
    if (year) where.year = year;

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = minPrice;
      if (maxPrice) where.price.lte = maxPrice;
    }

    const [cars, total] = await Promise.all([
      prisma.car.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: {
          images: {
            where: { isCover: true },
            take: 1,
          },
        },
      }),
      prisma.car.count({ where }),
    ]);

    const data: CarListResponseDTO[] = cars.map((car) => ({
      id: car.id,
      name: car.name,
      brand: car.brand,
      model: car.model,
      year: car.year,
      price: car.price,
      km: car.km,
      fuel: car.fuel,
      coverImage: car.images[0]?.imageUrl || null,
    }));

    return {
      data,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findById(id: number) {
    const car = await prisma.car.findUnique({
      where: { id },
      include: { images: true },
    });

    if (!car) {
      throw new AppError('Carro não encontrado', 404);
    }

    return car;
  }

  async update(id: number, data: Partial<CreateCarDTO>) {
    await this.findById(id);

    return prisma.car.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    await this.findById(id);

    return prisma.car.delete({
      where: { id },
    });
  }
}

export { CarService };
