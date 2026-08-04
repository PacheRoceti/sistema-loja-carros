import { Request, Response } from 'express';
import { SalesReportService } from '../services/sales-report.service';

class SalesReportController {
  async index(req: Request, res: Response) {
    const service = new SalesReportService();
    const result = await service.execute((req as any).validatedQuery);
    return res.json(result);
  }
}

export { SalesReportController };