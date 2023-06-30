import React, { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const CartForm = ({ cartTotal, cart }) => {
  const [order, setOrder] = useState({});
  const [form, setForm] = useState({
    email: "",
    name: "",
    lastname: "",
    phone: "",
  });

  const { createOrder } = useFirebase();

  function handleSubmit(e) {
    e.preventDefault();
    setOrder({
      buyer: { ...form },
      total: cartTotal,
      products: cart,
    });
    createOrder(order);
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <form
        className="flex flex-col items-center text-black text-center justify-between border-2 border-white"
        onSubmit={handleSubmit}
      >
        <h3 className="text-white text-3xl">Finaliza tu compra:</h3>
        <input
          className="border-2 border-red-500 my-2"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          className="border-2 border-red-500 my-2"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="name"
        />
        <input
          className="border-2 border-red-500 my-2"
          type="text"
          name="lastname"
          onChange={handleChange}
          placeholder="lastname"
        />
        <input
          className="border-2 border-red-500 my-2"
          type="tel"
          name="phone"
          onChange={handleChange}
          placeholder="phone"
        />
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
