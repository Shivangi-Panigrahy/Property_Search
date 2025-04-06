import React from "react";
import Pagination from "../../../components/ui/pagination";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center my-12">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationControls;