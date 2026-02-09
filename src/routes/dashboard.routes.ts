import { Router } from 'express';
import { DashboardController } from '../controllers/dashboard.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const dashboardRoutes = Router();
const dashboardController = new DashboardController();

dashboardRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  dashboardController.show
);

export default dashboardRoutes;
