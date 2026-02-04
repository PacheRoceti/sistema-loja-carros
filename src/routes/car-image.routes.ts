import { Router } from 'express';
import { upload } from '../middlewares/upload.middleware';
import { uploadCarImage } from '../controllers/car-image.controller';

const router = Router();

router.post('/:id/images', upload.single('image'), uploadCarImage);

export default router;
