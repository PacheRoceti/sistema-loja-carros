import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', ensureAuthenticated, ensureAdmin, userController.create);

export default userRoutes;