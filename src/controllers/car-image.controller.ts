import { Request, Response } from 'express';
import { carImageService } from '../services/car-image.service';

export async function uploadCarImage(req: Request, res: Response) {
  const carId = Number(req.params.id);
  const isCover = req.body.isCover === 'true';

  if (!req.file) {
    return res.status(400).json({ message: 'Imagem não enviada' });
  }

  const image = await carImageService.create({
    carId,
    imageUrl: req.file.filename,
    isCover,
  });

  return res.status(201).json(image);
}
