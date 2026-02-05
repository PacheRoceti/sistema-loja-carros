import { Router } from 'express';
import { CarImageController } from '../controllers/car-image.controller';
import { upload } from '../middlewares/upload.middleware';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carImageRoutes = Router();
const carImageController = new CarImageController();

carImageRoutes.post(
  '/:carId',
  ensureAuthenticated,
  ensureAdmin,
  upload.single('image'),
  carImageController.upload
);

export default carImageRoutes;
