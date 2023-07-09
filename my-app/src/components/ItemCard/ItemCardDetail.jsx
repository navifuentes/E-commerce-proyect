import React from "react";
import ProductDetailCounter from "../Counter/ProductDetailCounter";

const ItemCardDetail = (props) => {
  const { _id, title, price, description, img } = props;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="sm:w-1/3 w-5/6 sm:h-1/3 border-4 border-white flex flex-col justify-between items-center my-10 py-2 rounded-3xl">
        <h1 className="text-5xl my-2">{title}</h1>
        <img className="px-2" src={img} alt={description} />
        <span>{description}</span>
        <p className="text-2xl"> $ {price}</p>
        <ProductDetailCounter title={title} id={_id} price={price} />
      </div>
    </div>
  );
};

export default ItemCardDetail;
