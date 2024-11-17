import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    page =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 1 && page <= currentPage + 1)
  );

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {visiblePages.map((page, index) => {
        const prevPage = visiblePages[index - 1];
        const showEllipsis = prevPage && page - prevPage > 1;

        return (
          <React.Fragment key={page}>
            {showEllipsis && (
              <span className="px-4 py-2 text-gray-400 dark:text-gray-500">...</span>
            )}
            <button
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-purple-600 text-white'
                  : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {page}
            </button>
          </React.Fragment>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}