import React from 'react';
import Button from './button';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
      >
        Previous
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          onClick={() => onPageChange(index + 1)}
          variant={currentPage === index + 1 ? 'default' : 'outline'}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;