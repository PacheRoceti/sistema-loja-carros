export interface PaginationResponseDTO<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
