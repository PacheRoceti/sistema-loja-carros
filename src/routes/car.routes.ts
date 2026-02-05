import { Router } from 'express';
import { CarController } from '../controllers/car.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carRoutes = Router();
const carController = new CarController();

// públicas
carRoutes.get('/', carController.list);
carRoutes.get('/:id', carController.findById);

// protegidas
carRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  carController.create
);

carRoutes.put(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  carController.update
);

carRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  carController.delete
);

export default carRoutes;
