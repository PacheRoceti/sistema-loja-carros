import { Router } from 'express';
import { SalesReportController } from '../controllers/sales-report.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { validate } from '../middlewares/validate';
import { salesReportQuerySchema } from '../schemas/sales-report.schema';

const salesReportRoutes = Router();
const controller = new SalesReportController();

salesReportRoutes.get(
  '/sales',
  ensureAuthenticated,
  ensureAdmin,
  validate(salesReportQuerySchema, 'query'),
  controller.index
);

export default salesReportRoutes;