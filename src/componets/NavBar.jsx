import React from "react";
import SearchInput from "./SearchInput";
import Logo from "../assets/Logo";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavBar() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <nav className="p-4 flex items-center space-x-4 justify-around">
      <a href="">
        <Logo fill="#ff6347" />
      </a>
      <ul className="flex items-center gap-14">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Single Post</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <SearchInput placeholder="Search..." onSearch={handleSearch} />
      <ThemeSwitcher />
    </nav>
  );
}
