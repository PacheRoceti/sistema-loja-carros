import { Request, Response } from 'express';
import { CarService } from '../services/car.service';

class CarController {
  async create(req: Request, res: Response) {
    const carService = new CarService();
    const car = await carService.create(req.body);
    return res.status(201).json(car);
  }

  async list(req: Request, res: Response) {
    const carService = new CarService();

    const result = await carService.list({
      brand: req.query.brand as string,
      fuel: req.query.fuel as any,
      year: req.query.year ? Number(req.query.year) : undefined,
      minPrice: req.query.minPrice
        ? Number(req.query.minPrice)
        : undefined,
      maxPrice: req.query.maxPrice
        ? Number(req.query.maxPrice)
        : undefined,
      page: req.query.page ? Number(req.query.page) : 1,
      limit: req.query.limit ? Number(req.query.limit) : 10,
    });

    return res.json(result);
  }

  async findById(req: Request, res: Response) {
    const carService = new CarService();
    const car = await carService.findById(Number(req.params.id));
    return res.json(car);
  }

  async update(req: Request, res: Response) {
    const carService = new CarService();
    const car = await carService.update(
      Number(req.params.id),
      req.body
    );
    return res.json(car);
  }

  async delete(req: Request, res: Response) {
    const carService = new CarService();
    await carService.delete(Number(req.params.id));
    return res.status(204).send();
  }
}

export { CarController };
