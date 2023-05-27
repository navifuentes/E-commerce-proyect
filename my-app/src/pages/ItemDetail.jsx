import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailCounter from "../components/Counter/ProductDetailCounter.jsx";

const items = [
  {
    id: "1",
    titulo: "Item 1",
    price: 300,
    category:"shampoo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "2",
    titulo: "Item 2",
    price: 300,
    category:"shampoo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "3",
    titulo: "Item 3",
    price: 300,
    category:"shampoo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "4",
    titulo: "Item 4",
    price: 300,
    category:"shampoo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "5",
    titulo: "Item 5",
    price: 300,
    category:"acondicionador",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "6",
    titulo: "Item 6",
    price: 300,
    category:"acondicionador",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "7",
    titulo: "Item 7",
    price: 300,category:"acondicionador",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "8",
    titulo: "Item 8",
    price: 300,category:"acondicionador",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "9",
    titulo: "Item 9",
    price: 300,category:"jabon",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "10",
    titulo: "Item 10",
    price: 300,category:"jabon",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "11",
    titulo: "Item 11",
    price: 300,category:"jabon",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
  {
    id: "12",category:"jabon",
    titulo: "Item 12",
    price: 300,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  },
];

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    const filter = items.find((item) => item.id === id);
    setItem(filter);
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="sm:w-1/3 w-5/6 sm:h-1/3 border-4 border-white flex flex-col justify-between items-center my-10 py-2">
        <span className="text-sm text-slate-500 ">#{item.id}</span>
        <h1 className="text-5xl my-2">{item.titulo}</h1>
        <img src="https://placehold.co/300x300" alt="" />
        <span>{item.description}</span>
        <p className="text-2xl"> $ {item.price}</p>
        <ProductDetailCounter></ProductDetailCounter>
      </div>
    </div>
  );
};

export default ItemDetail;
