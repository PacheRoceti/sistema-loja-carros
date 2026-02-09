import { prisma } from '../config/prisma';
import { SalesReportFilterDTO } from '../dtos/sales-report-filter.dto';
import { SalesReportResponseDTO } from '../dtos/sales-report-response.dto';

class SalesReportService {
  async execute(
    filters: SalesReportFilterDTO
  ): Promise<SalesReportResponseDTO[]> {
    const { startDate, endDate, groupBy } = filters;

    const where: any = {
      isSold: true,
      soldAt: { not: null },
    };

    if (startDate || endDate) {
      where.soldAt = {};
      if (startDate) where.soldAt.gte = new Date(startDate);
      if (endDate) where.soldAt.lte = new Date(endDate);
    }

    const soldCars = await prisma.car.findMany({
      where,
      select: {
        price: true,
        soldAt: true,
      },
    });

    const reportMap = new Map<string, SalesReportResponseDTO>();

    for (const car of soldCars) {
      if (!car.soldAt) continue;

      const date = car.soldAt;
      const period =
        groupBy === 'month'
          ? `${date.getFullYear()}-${String(
              date.getMonth() + 1
            ).padStart(2, '0')}`
          : `${date.getFullYear()}`;

      if (!reportMap.has(period)) {
        reportMap.set(period, {
          period,
          totalSoldCars: 0,
          totalRevenue: 0,
        });
      }

      const entry = reportMap.get(period)!;
      entry.totalSoldCars += 1;
      entry.totalRevenue += car.price;
    }

    return Array.from(reportMap.values()).sort((a, b) =>
      a.period.localeCompare(b.period)
    );
  }
}

export { SalesReportService };
