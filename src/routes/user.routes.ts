import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { validate } from '../middlewares/validate';
import { createUserSchema } from '../schemas/user.schema';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  validate(createUserSchema),
  userController.create
);

export default userRoutes;  