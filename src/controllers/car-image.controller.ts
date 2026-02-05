import { Request, Response } from 'express';
import { CarImageService } from '../services/car-image.service';

class CarImageController {
  async upload(req: Request, res: Response) {
    const carId = Number(req.params.carId);

    if (!req.file) {
      return res.status(400).json({ error: 'Imagem não enviada' });
    }

    const isCover =
      req.body.isCover === 'true' || req.body.isCover === true;

    const imageUrl = `uploads/cars/${req.file.filename}`;

    const service = new CarImageService();

    const image = await service.create({
      carId,
      imageUrl,
      isCover,
    });

    return res.status(201).json(image);
  }
}

export { CarImageController };
