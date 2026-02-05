import { prisma } from '../config/prisma';
import { AppError } from '../errors/AppError';
import { CreateCarImageDTO } from '../dtos/create-car-image.dto';

class CarImageService {
  async create({ carId, imageUrl, isCover = false }: CreateCarImageDTO) {
    const carExists = await prisma.car.findUnique({
      where: { id: carId },
    });

    if (!carExists) {
      throw new AppError('Carro não encontrado', 404);
    }

    if (isCover) {
      await prisma.carImage.updateMany({
        where: { carId },
        data: { isCover: false },
      });
    }

    return prisma.carImage.create({
      data: {
        carId,
        imageUrl,
        isCover,
      },
    });
  }
}

export { CarImageService };
