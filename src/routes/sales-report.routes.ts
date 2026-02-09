import { Router } from 'express';
import { SalesReportController } from '../controllers/sales-report.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const salesReportRoutes = Router();
const controller = new SalesReportController();

salesReportRoutes.get(
  '/sales',
  ensureAuthenticated,
  ensureAdmin,
  controller.index
);

export default salesReportRoutes;
