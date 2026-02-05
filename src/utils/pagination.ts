export function getPagination(page = 1, limit = 10) {
  const safePage = Math.max(page, 1);
  const safeLimit = Math.max(limit, 1);

  const skip = (safePage - 1) * safeLimit;

  return {
    page: safePage,
    limit: safeLimit,
    skip,
    take: safeLimit,
  };
}
