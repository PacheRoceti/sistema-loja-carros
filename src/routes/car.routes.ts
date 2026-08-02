import { Router } from 'express';
import { CarController } from '../controllers/car.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { validate } from '../middlewares/validate';
import {
  createCarSchema,
  updateCarSchema,
  carIdParamSchema,
} from '../schemas/car.schema';

const carRoutes = Router();
const carController = new CarController();

// públicas
carRoutes.get('/', carController.list);

carRoutes.get(
  '/:id',
  validate(carIdParamSchema, 'params'),
  carController.findById
);

// admin
carRoutes.get(
  '/admin/sold',
  ensureAuthenticated,
  ensureAdmin,
  carController.listSoldCars
);

// protegidas
carRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  validate(createCarSchema),
  carController.create
);

carRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  validate(carIdParamSchema, 'params'),
  validate(updateCarSchema),
  carController.update
);

carRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  validate(carIdParamSchema, 'params'),
  carController.delete
);

carRoutes.patch(
  '/:id/sold',
  ensureAuthenticated,
  ensureAdmin,
  validate(carIdParamSchema, 'params'),
  carController.markAsSold
);

export default carRoutes;