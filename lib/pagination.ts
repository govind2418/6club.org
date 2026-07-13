export interface Pagination<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  prevPage: number;
  nextPage: number;
}

export function paginate<T>(items: T[], page = 1, perPage = 6): Pagination<T> {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  return {
    items: pageItems,
    currentPage,
    totalPages,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
    prevPage: currentPage - 1,
    nextPage: currentPage + 1
  };
}
