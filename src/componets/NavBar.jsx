import React from "react";
import SearchInput from "./SearchInput";

export default function NavBar() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <nav className="p-4 flex items-center space-x-4">
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Single Post</a>
      <a href="#">Pages</a>
      <a href="#">Contact</a>
      <SearchInput placeholder="Search..." onSearch={handleSearch} />
    </nav>
  );
}
