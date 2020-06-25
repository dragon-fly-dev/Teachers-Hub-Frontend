/* eslint-disable import/prefer-default-export */
import React from "react";
import PaginationRow from "../components/Pagination/PaginationRow.jsx";

export const isAuthenticated = localStorage.getItem("token");

export const LIMIT = 5;
export const getDataByPage = (courses, currentPage) => {
  const begin = (currentPage - 1) * LIMIT;
  const end = begin + LIMIT;

  return courses.slice(begin, end);
};

export const renderPagination = (count, pageCount, handlePageChange) =>
  count === 0 ? (
    "No Data"
  ) : (
    <PaginationRow limit={LIMIT} count={count} pageCount={pageCount} onPageChange={handlePageChange} />
  );
