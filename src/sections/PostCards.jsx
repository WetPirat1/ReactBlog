import AvtorData from "../componets/AvtorData";
import PostCard from "../componets/PostCard";


const PostCards = () => {
  const dummyData = [
    {
      id: 1,
      title: "Карточка 1",
      description: "Описание первой карточки.",
      image: "https://via.placeholder.com/300",
      avtorData: {
        avtor_img: "https://via.placeholder.com/100",
        avtor_name: "Tracey Willson",
        post_date: "August 20, 2022",
      },
    },
    {
      id: 1,
      title: "Карточка 1",
      description: "Описание первой карточки.",
      image: "https://via.placeholder.com/300",
      avtorData: {
        avtor_img: "https://via.placeholder.com/100",
        avtor_name: "Tracey Willson",
        post_date: "August 20, 2022",
      },
    },
    {
      id: 3,
      title: "Карточка 3",
      description: "Описание третьей карточки.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Карточка 4",
      description: "Описание четвертой карточки.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Карточка 5",
      description: "Описание пятой карточки.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      title: "Карточка 6",
      description: "Описание шестой карточки.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {dummyData.map((item) => (
        <PostCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
    ))}

    </div>
  );
};

export default PostCards;
