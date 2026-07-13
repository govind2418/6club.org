import type { Pagination as PaginationType } from '@/lib/pagination';

export function Pagination({ pagination, baseUrl }: { pagination: PaginationType<unknown>; baseUrl: string }) {
  if (pagination.totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-3">
      {pagination.hasPrev && (
        <a
          href={`${baseUrl}${pagination.prevPage === 1 ? '' : `/page/${pagination.prevPage}`}`}
          className="btn-outline !px-4 !py-2 text-xs"
        >
          Previous
        </a>
      )}
      <span className="btn-font text-xs text-grey">
        Page {pagination.currentPage} of {pagination.totalPages}
      </span>
      {pagination.hasNext && (
        <a href={`${baseUrl}/page/${pagination.nextPage}`} className="btn-outline !px-4 !py-2 text-xs">
          Next
        </a>
      )}
    </nav>
  );
}
