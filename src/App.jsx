import React from "react";
import "./tailwind.css";
import Header from "./componets/Header";
import PostCards from "./sections/PostCards";


function App() {
  return (
    <div className="max-w-7xl m-auto">
    <Header />
    <PostCards />
    </div>
  );
}

export default App;
