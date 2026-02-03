import { Request, Response } from 'express';
import { carService } from '../services/car.service';

export async function createCar(req: Request, res: Response) {
  const car = await carService.create(req.body);
  return res.status(201).json(car);
}

export async function listCars(req: Request, res: Response) {
  const cars = await carService.findAll();
  return res.json(cars);
}

export async function getCar(req: Request, res: Response) {
  const car = await carService.findById(Number(req.params.id));
  return res.json(car);
}

export async function updateCar(req: Request, res: Response) {
  const car = await carService.update(Number(req.params.id), req.body);
  return res.json(car);
}

export async function deleteCar(req: Request, res: Response) {
  await carService.delete(Number(req.params.id));
  return res.status(204).send();
}
