import { prisma } from '../config/prisma';
import { CarListResponseDTO } from '../dtos/car-response.dto';
import { CreateCarDTO } from '../dtos/create-car.dto';
import { AppError } from '../errors/AppError';

class CarService {
  async create(data: CreateCarDTO) {
    return prisma.car.create({ data });
  }

  async list(): Promise<CarListResponseDTO[]> {
    const cars = await prisma.car.findMany({
      where: { isSold: false },
      include: {
        images: {
          where: { isCover: true },
          take: 1,
        },
      },
    });

    return cars.map((car) => ({
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
