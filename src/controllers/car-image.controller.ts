import { Request, Response } from 'express';
import { CarImageService } from '../services/car-image.service';

class CarImageController {
  async upload(req: Request, res: Response) {
    const carId = Number(req.params.carId);

    if (!req.file) {
      return res.status(400).json({ error: 'Imagem não enviada' });
    }

    const imageUrl = `uploads/cars/${req.file.filename}`;

    const service = new CarImageService();

    const result = await service.create({
      carId,
      imageUrl,
    });

    return res.status(201).json(result);
  }
}

export { CarImageController };
