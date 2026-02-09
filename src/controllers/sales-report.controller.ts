import { Request, Response } from 'express';
import { SalesReportService } from '../services/sales-report.service';

class SalesReportController {
  async index(req: Request, res: Response) {
    const service = new SalesReportService();

    const result = await service.execute({
      startDate: req.query.startDate as string,
      endDate: req.query.endDate as string,
      groupBy: req.query.groupBy as 'month' | 'year',
    });

    return res.json(result);
  }
}

export { SalesReportController };
