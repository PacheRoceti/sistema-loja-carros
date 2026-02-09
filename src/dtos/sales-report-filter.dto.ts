export interface SalesReportFilterDTO {
  startDate?: string; // YYYY-MM-DD
  endDate?: string;   // YYYY-MM-DD
  groupBy: 'month' | 'year';
}
