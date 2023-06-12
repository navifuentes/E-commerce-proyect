import React from "react";

const CheckoutForm = (props) => {
  const { total, compras } = props;

  const [checkout, setCheckout] = useState({
    buyer: {
      email: "",
      name: "",
      lastname: "",
      phone: "",
    },
    total,
    items: compras,
  });

  return (
    <div>
      <form
        className="flex flex-col text-center items-center justify-between"
        action=""
      >
        <input title="email" placeholder="email" type="text" name="email" />
        <input type="text" name="name" />
        <input type="text" name="lastname" />
        <input type="text" name="phone" />
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
