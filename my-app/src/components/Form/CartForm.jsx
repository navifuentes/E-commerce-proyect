import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import useFirebase from "../../hooks/useFirebase";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CartForm = () => {
  const { cart, getCartTotal, cleanCart, purchaseOrder } =
    useContext(CartContext);
  const { createOrder } = useFirebase();
  const navigate = useNavigate();
  //USE REF
  const order = useRef({});
  // const orderSuccess = useRef(false);
  // USE STATES
  const [form, setForm] = useState({
    email: "",
    name: "",
    lastname: "",
    phone: "",
  });
  const [verifiedForm, setVerifiedForm] = useState(false);
  const [verified, setVerified] = useState({
    email: false,
    name: false,
    lastname: false,
    phone: false,
  });
  // FUNCTIONS
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    return;
  }
  function handleBlur(e) {
    if (form?.[e.target.name] === e.target.value) {
      setVerified({
        ...verified,
        [e.target.name]: true,
      });
      console.log(`${e.target.name} true`);
      return;
    } else {
      setVerified({
        ...verified,
        [e.target.name]: false,
      });
      console.log(`${e.target.name} false`);
      return;
    }
  }
  function verifyEffect() {
    if (
      verified.email &&
      verified.name &&
      verified.lastname &&
      verified.phone
    ) {
      setVerifiedForm(true);
      console.log("form");
    } else {
      setVerifiedForm(false);
      console.log("unverified form X");
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (cart.length <= 0) {
        return console.log("no items in cart");
      }

      if (verifiedForm) {
        order.current = {
          buyer: form,
          total: getCartTotal(),
          products: cart,
          date: new Date().toDateString(),
        };
        const orderDb = await createOrder(order.current);
        // orderSuccess.current = true;
        cleanCart();
        console.log(orderDb.id);
        purchaseOrder.current = { ...order.current, id: orderDb.id };
        MySwal.fire({
          title: <p>Your purchase is complete !</p>,
          icon: "success",
          timer: 1500,
        });
        navigate("/cart/checkout");
        return;
      } else {
        return console.log("form is not verified ");
      }
    } catch (error) {
      console.log(error);
    }
  }
  //USE EFFECT
  useEffect(() => {
    verifyEffect();
  }, [verified]);

  /* useEffect(() => {
    if (orderSuccess.current) {
      return redirect("/cart/checkout");
    }
  }, [orderSuccess]);
 */

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
          className={"border-2 border-red-500 my-2"}
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
        {verifiedForm & (cart.length > 0) ? (
          <button
            className="rounded-full bg-blue-800 hover:bg-blue-950 text-white px-2 my-2"
            type="submit"
          >
            Buy
          </button>
        ) : (
          <div
            className="bg-cyan-950
           text-white"
          >
            Insert your data
          </div>
        )}
      </form>
    </>
  );
};

export default CartForm;
