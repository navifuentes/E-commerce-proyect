import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ProductDetailCounter = ({ title, id, price }) => {
  const [number, setNumber] = useState(0);
  const { cart, addToCart } = useContext(CartContext);
  //PRODUCT ORDER
  const productOrder = {
    title: title,
    id: id,
    price: price,
    quantity: number,
  };

  function increase() {
    setNumber(number + 1);
  }
  function decrease() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  return (
    <div>
      <button
        className="rounded-lg bg-blue-800 hover:bg-blue-950 mx-2 px-2"
        onClick={increase}
      >
        +
      </button>
      <button className="bg-white text-black hover:cursor-default px-2">
        {number}
      </button>
      <button
        className="rounded-lg bg-blue-800 hover:bg-blue-950 mx-2 px-2"
        onClick={decrease}
      >
        -
      </button>
      <button
        onClick={() => {
          if (number > 0) {
            addToCart(productOrder);
            MySwal.fire({
              title: <p>Added to cart !</p>,
              icon: "success",
              timer:1500
            });
          }
        }}
        className="rounded-full bg-blue-800 hover:bg-blue-950 p-2"
      >
        Add to cart !
      </button>
    </div>
  );
};

export default ProductDetailCounter;
