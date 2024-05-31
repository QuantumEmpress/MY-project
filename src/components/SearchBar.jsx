import React from 'react';

const SearchBar = ({ setQuery }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for movies..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
