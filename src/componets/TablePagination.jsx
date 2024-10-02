import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
// import "../css/tablePagination.css"

const TablePagination = ({ data, rowsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const indexOfLastRow = pageNumber * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    onPageChange(currentRows); // Pass the paginated rows back to the parent
  };

  return (
    <div className="d-flex justify-content-end">
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
        />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default TablePagination;
