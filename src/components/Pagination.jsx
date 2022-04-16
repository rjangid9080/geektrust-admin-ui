import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Pagination({ usersPerPage, totalUsers, paginate }) {
  const [activePage, setActivePage] = useState(1);
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="w-full flex justify-center items-center p-2">
      <button
        disabled={activePage === 1}
        onClick={() => setActivePage(activePage - 1)}
        className={`p-2 h-10 rounded-md ${
          activePage > 1
            ? `hover:bg-blue-500 hover:text-white hover:shadow-md cursor-pointer`
            : "opacity-50"
        } flex justify-center items-center  transition duration-300`}
      >
        <MdNavigateBefore />
        Prev
      </button>
      {pages.map((page) => (
        <span
          key={page}
          onClick={() => {
            paginate(page);
            setActivePage(page);
          }}
          className={`${
            activePage === page ? "bg-blue-500 text-white shadow-md" : ""
          } p-2 mx-2 h-10 w-10 flex justify-center items-center rounded-md hover:border-blue-500 hover:border hover:shadow-md cursor-pointer transition duration-300`}
        >
          {page}
        </span>
      ))}
      <button
        disabled={activePage === pages.length}
        onClick={() => setActivePage(activePage + 1)}
        className={`p-2 h-10 rounded-md ${
          activePage < pages.length
            ? `hover:bg-blue-500 hover:text-white hover:shadow-md cursor-pointer`
            : "opacity-50"
        } flex justify-center items-center  transition duration-300`}
      >
        Next
        <MdNavigateNext />
      </button>
    </div>
  );
}

export default Pagination;
