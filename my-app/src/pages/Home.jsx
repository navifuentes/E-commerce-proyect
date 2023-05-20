import React, { Fragment } from "react";
import ItemCard from "../components/ItemListContainer/ItemCard";

const Home = () => {
  const items = [
    {
      id: 1,
      titulo: "Item 1",
      price: 300,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      titulo: "Item 2",
      price: 300,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
  ];

  return (
    <Fragment>
      <h1>HOME</h1>
      <div className="flex flex-col items-center justify-between">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
