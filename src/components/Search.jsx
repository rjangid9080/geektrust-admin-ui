import React, { useState, useEffect } from "react";
import SearchUsers from "../utils/SearchUsers";

function Search({ users, setUsers }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  return (
    <div className="w-[90%] py-2">
      <input
        className="w-full font-semibold text-xs p-2 px-4 border-b-2 focus:border-blue-400 focus:shadow-lg outline-none"
        type="text"
        placeholder="Search by name, email or role"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
