import { Router } from 'express';
import {
  createCar,
  listCars,
  getCar,
  updateCar,
  deleteCar,
} from '../controllers/car.controller';

import carImageRoutes from './car-image.routes';

const router = Router();

router.post('/', createCar);
router.get('/', listCars);
router.get('/:id', getCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

router.use('/', carImageRoutes);

export default router;
