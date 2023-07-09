import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CartCard from "./CartCard";

const Checkout = () => {
  const { purchaseOrder } = useContext(CartContext);
  const { id, buyer, products, total, date } = purchaseOrder.current;
  return (
    <>
      {purchaseOrder.current ? (
        <div className="flex flex-col items-center text-center mt-10">
          <div className="border-2 rounded-full p-2 border-white">
            order id: <span className="text-slate-400">{id}</span>
          </div>
          <hr />
          <div className=" text-center p-10 my-8 border-2 border-white rounded-full grid grid-cols-3">
            <div className="border-2 border-white">
              name:{" "}
              <span className="text-slate-400">
                {buyer.name + " " + buyer.lastname}
              </span>
            </div>
            <div className="border-2 border-white">
              email: <span className="text-slate-400">{buyer.email}</span>
            </div>
            <div className="border-2 border-white">
              phone: <span className="text-slate-400">{buyer.phone}</span>
            </div>
            <div className="border-2 border-white">
              date: <span className="text-slate-400">{date}</span>
            </div>
            <div className="border-2 border-white">
              items: <span className="text-slate-400">{products.length}</span>
            </div>
            <div className="border-2 border-white">
              total: <span className="text-yellow-600">${total}</span>
            </div>
            <hr />
            <div className="col-span-3 overflow-y-auto">
              {products.map((product) => (
                <CartCard key={product} item={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>No Order</div>
      )}
    </>
  );
};

export default Checkout;
