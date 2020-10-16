import React from "react";

const SearchBox = ({ search, setSearch, handleSearch }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Country"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
