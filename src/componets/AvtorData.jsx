import React from "react";

export default function AvtorData({ avtor_img, avtor_name, post_date }) {
  const dummyData = [
    {
      id: 1,
      avtor_img: "",
      avtor_name: "Tracey Willson",
      post_date: "August 20, 2022",
    },
    {
      id: 2,
      avtor_img: "",
      avtor_name: "Tracey",
      post_date: "September 20, 2022",
    },
  ];

  return (
    <div className="pb-4 pl-4 pr-4">
      {dummyData.map((item) => (
        <div className="flex" key={item.id}>
          <img src={item.avtor_img} alt="avtor avatar" />
          <p>{item.avtor_name}</p>
          <p>{item.post_date}</p>
        </div>
      ))}
    </div>
  );
}
