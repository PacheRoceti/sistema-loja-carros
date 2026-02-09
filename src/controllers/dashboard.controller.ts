import { Request, Response } from 'express';
import { DashboardService } from '../services/dashboard.service';

class DashboardController {
  async show(req: Request, res: Response) {
    const service = new DashboardService();
    const data = await service.execute();
    return res.json(data);
  }
}

export { DashboardController };
