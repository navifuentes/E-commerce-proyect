import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import ItemDetail from "../pages/ItemDetail";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ItemDetail />} />
        <Route path="/category/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
