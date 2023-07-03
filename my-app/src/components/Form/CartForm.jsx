import React, { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const CartForm = ({ cartTotal, cart }) => {
  const [order, setOrder] = useState({});

  //sacar a un hook
  const [form, setForm] = useState({
    email: "",
    name: "",
    lastname: "",
    phone: "",
  });

  const [verified, setVerified] = useState({
    email: false,
    name: false,
    lastname: false,
    phone: false,
  });

  const { createOrder } = useFirebase();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      verified.email &&
      verified.name &&
      verified.lastname &&
      verified.phone
    ) {
      setOrder({
        buyer: { ...form },
        total: cartTotal,
        products: cart,
      });
      createOrder(order);
      console.log("new order created");
    } else {
      console.log("unverfied form inputs");
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  function handleBlur(e) {
    if (form?.[e.target.name] === e.target.value) {
      setVerified({
        ...verified,
        [e.target.name]: true,
      });
      console.log(`${e.target.name} true`);
    } else {
      setVerified({
        ...verified,
        [e.target.name]: false,
      });
      console.log(`${e.target.name} false`);
      console.log(form);
      console.log(verified);
    }
  }

  return (
    <>
      <form
        className="flex flex-col items-center text-black text-center justify-between border-2 border-white"
        onSubmit={handleSubmit}
      >
        <h3 className="text-white text-3xl">Finaliza tu compra:</h3>
        <label className="text-white">Email :</label>
        <input
          className="border-2 border-red-500 my-2"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="...user@mail.com"
          required
        />
        <input
          //className={checkEmail() ? "border-2 border-yellow-500 my-2" : "border-2 border-red-500 my-2"}
          name="email"
          type="email"
          onBlur={handleBlur}
          placeholder="repeat your email"
        />
        <label className="text-white">Name :</label>
        <input
          className="border-2 border-red-500 my-2"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="...name"
          required
        />
        <input
          className="border-2 border-red-500 my-2"
          type="text"
          name="name"
          onBlur={handleBlur}
          placeholder="repeat your name"
        />
        <label className="text-white">Lastname</label>
        <input
          className="border-2 border-red-500 my-2"
          type="text"
          name="lastname"
          onChange={handleChange}
          placeholder="...lastname"
          required
        />
        <input
          className="border-2 border-red-500 my-2"
          type="text"
          name="lastname"
          onBlur={handleBlur}
          placeholder="repeat your lastname"
        />
        <label className="text-white">Phone :</label>
        <input
          className="border-2 border-red-500 my-2"
          type="tel"
          name="phone"
          onChange={handleChange}
          placeholder="phone"
          required
        />
        <input
          className="border-2 border-red-500 my-2"
          type="tel"
          name="phone"
          onBlur={handleBlur}
          placeholder="repeat your phone"
        />
        <button
          className="rounded-full bg-blue-800 hover:bg-blue-950 text-white px-2 my-2"
          type="submit"
        >
          Buy
        </button>
      </form>
    </>
  );
};

export default CartForm;
