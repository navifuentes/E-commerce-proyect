import React from "react";
import ItemCard from "./ItemCard";

const items = [
  {
    id: "1",
    titulo: "Item 1",
    price: 300,
    category: "shampoo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "2",
    titulo: "Item 2",
    price: 300,
    category: "shampoo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "3",
    titulo: "Item 3",
    price: 300,
    category: "shampoo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "4",
    titulo: "Item 4",
    price: 300,
    category: "shampoo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "5",
    titulo: "Item 5",
    price: 300,
    category: "acondicionador",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "6",
    titulo: "Item 6",
    price: 300,
    category: "acondicionador",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "7",
    titulo: "Item 7",
    price: 300,
    category: "acondicionador",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "8",
    titulo: "Item 8",
    price: 300,
    category: "acondicionador",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "9",
    titulo: "Item 9",
    price: 300,
    category: "jabon",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "10",
    titulo: "Item 10",
    price: 300,
    category: "jabon",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "11",
    titulo: "Item 11",
    price: 300,
    category: "jabon",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "12",
    titulo: "Item 12",
    price: 300,
    category: "jabon",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
];

const ItemListContainer = ({ filter }) => {
  const filtered = filter ? items.filter((e) => e.category == filter) : items;

  
  console.log(filtered);
  return (
    <div className="grid grid-cols-3 justify-around">
      {filtered.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemListContainer;
