import { prisma } from '../config/prisma';
import { CreateCarDTO } from '../dtos/create-car.dto';
import { AppError } from '../errors/AppError';

class CarService {
  async create(data: CreateCarDTO) {
    return prisma.car.create({ data });
  }

  async findAll() {
    return prisma.car.findMany({
      where: { isSold: false },
      include: { images: true },
    });
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

export const carService = new CarService();
