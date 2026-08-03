import { Router } from 'express';
import { CarImageController } from '../controllers/car-image.controller';
import { upload } from '../middlewares/upload.middleware';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { validate } from '../middlewares/validate';
import { idParamSchema } from '../schemas/common.schema';
import { carImageBodySchema } from '../schemas/car-image.schema';

const carImageRoutes = Router();
const carImageController = new CarImageController();

carImageRoutes.post(
  '/:carId',
  ensureAuthenticated,
  ensureAdmin,
  validate(idParamSchema('carId'), 'params'),
  upload.single('image'),
  validate(carImageBodySchema),
  carImageController.upload
);

export default carImageRoutes;