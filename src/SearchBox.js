import React from "react";

const SearchBox = ({ search, handleSearch }) => {
  return (
    <div>
      <input
        type=""
        value={search}
        placeholder="Search Country"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
