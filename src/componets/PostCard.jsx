import React from "react";
import AvtorData from "./AvtorData";



const PostCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-sm mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-3xl font-semibold">{description}</p>
      </div>
      <AvtorData />
    </div>
  );
};

export default PostCard;
