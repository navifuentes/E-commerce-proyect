import React from "react";
import ProductDetailCounter from "../Counter/ProductDetailCounter";




const ItemCardDetail = (props) => {
  const { id, titulo, price, description, img, marca, stock } = props;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="sm:w-1/3 w-5/6 sm:h-1/3 border-4 border-white flex flex-col justify-between items-center my-10 py-2">
        <span className="text-sm text-slate-500 ">#{id}</span>
        <h1 className="text-5xl my-2">{titulo}</h1>
        <img src={img} alt={description} />
        <span>{description}</span>
        <p className="text-2xl"> $ {price}</p>
        <ProductDetailCounter product={titulo} price={price}/>
      </div>
    </div>
  );
};

export default ItemCardDetail;
