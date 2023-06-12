import React, { useState } from "react";

const CartForm = (props) => {
  //const { total , package } = props;

  const [form, setForm] = useState({
    buyer: {
      email: "",
      name: "",
      lastname: "",
      phone: "",
    },
  });

  return (
    <>
      <form
        className="flex flex-col items-center text-black text-center justify-between border-2 border-white"
        action=""
      >
        <h3 className="text-white text-3xl">Finaliza tu compra:</h3>
        <input className="border-2 border-red-500 my-2" type="email" placeholder="email" />
        <input className="border-2 border-red-500 my-2" type="text" placeholder="name" />
        <input className="border-2 border-red-500 my-2" type="text" placeholder="lastname" />
        <input className="border-2 border-red-500 my-2" type="tel" placeholder="phone" />
        <button
          className="rounded-full bg-blue-800 hover:bg-blue-950 text-white px-2 my-2"
          type="submit"
        >
          Comprar
        </button>
      </form>
    </>
  );
};

export default CartForm;
