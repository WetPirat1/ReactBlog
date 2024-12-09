import React, { useState } from "react";

function SearchInput({ placeholder, onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
    if (onSearch) onSearch(query); // Вызов колбэка, если он передан
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder || "Search..."}
        className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}

export default SearchInput;
