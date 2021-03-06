import React, { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";

function Pagination({ usersPerPage, totalUsers, paginate }) {
  const [activePage, setActivePage] = useState(1);
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="w-full flex justify-center items-center p-2 font-semibold text-xs md:text-sm">
      <button
        disabled={activePage === 1}
        onClick={() => {
          setActivePage(1);
          paginate(1);
        }}
        className={`p-2 mx-1 md:mx-2 h-8 w-8 md:h-10 md:w-10 rounded-md ${
          activePage > 1
            ? `hover:bg-blue-500 hover:text-white hover:shadow-md cursor-pointer`
            : "opacity-50"
        } flex justify-center items-center  transition duration-300`}
      >
        <FaAngleDoubleLeft />
      </button>
      <button
        disabled={activePage === 1}
        onClick={() => {
          paginate(activePage - 1);
          setActivePage(activePage - 1);
        }}
        className={`p-2 mx-1 md:mx-2 h-8 md:h-10 rounded-md ${
          activePage > 1
            ? `hover:bg-blue-500 hover:text-white hover:shadow-md cursor-pointer`
            : "opacity-50"
        } flex justify-center items-center  transition duration-300 font-semibold text-xs md:text-sm`}
      >
        <FaAngleLeft />
        Prev
      </button>
      {pages.map((page) => (
        <span
          key={page}
          onClick={() => {
            setActivePage(page);
            paginate(page);
          }}
          className={`${
            activePage === page ? "bg-blue-500 text-white shadow-md" : ""
          } p-2 mx-1 md:mx-2 h-8 w-8 md:h-10 md:w-10 flex justify-center items-center rounded-md hover:border-blue-500 hover:border hover:shadow-md cursor-pointer transition duration-300`}
        >
          {page}
        </span>
      ))}
      <button
        disabled={activePage === pages.length}
        onClick={() => {
          paginate(activePage + 1);
          setActivePage(activePage + 1);
        }}
        className={`mx-1 md:mx-2 p-2 h-8 md:h-10 rounded-md ${
          activePage < pages.length
            ? `hover:bg-blue-500 hover:text-white hover:shadow-md cursor-pointer`
            : "opacity-50"
        } flex justify-center items-center  transition duration-300 font-semibold text-xs md:text-sm`}
      >
        Next
        <FaAngleRight />
      </button>
      <button
        disabled={activePage === pages.length}
        onClick={() => {
          setActivePage(pages.length);
          paginate(pages.length);
        }}
        className={`mx-1 md:mx-2 p-2 h-10 w-10 rounded-md ${
          activePage < pages.length
            ? `hover:bg-blue-500 hover:text-white hover:shadow-md cursor-pointer`
            : "opacity-50"
        } flex justify-center items-center  transition duration-300`}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}

export default Pagination;
