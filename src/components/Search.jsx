import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="add search">
      <input
        type="text"
        value={search}
        onChange={({ target }) => {
          setSearch(target.value);
        }}
        placeholder="Do Your Search here "
      />
    </div>
  );
};

export default Search;
