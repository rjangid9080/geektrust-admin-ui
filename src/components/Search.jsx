import React from "react";

function Search() {
  return (
    <div className="w-full p-2">
      <input
        className="w-full p-2 border-2 rounded-md outline-none"
        type="text"
        placeholder="Search by name,email or role"
      />
    </div>
  );
}

export default Search;
