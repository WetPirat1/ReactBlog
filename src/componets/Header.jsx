import React from "react";
import NavBar from "./NavBar";
import headerImage from "../assets/header-img.jpg";
import "../tailwind.css";

export default function Header() {
  return (
    <header className="">
      <NavBar />

      <div
        className="bg-cover bg-center h-screen relative h-600"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute bottom-20 left-150 bg-white w-1/2">
          <div className="bg-[#4B6BFB]">
            <h3 className="w-1 ">Technology</h3>
          </div>

          <h2 className="text-3xl">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <ul className="flex gap-8">
            <li className>
              <img src="" alt="" />
            </li>
            <li>
              <p>Jason Francisco</p>
            </li>
            <li>
              <p>August 20, 2022</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
