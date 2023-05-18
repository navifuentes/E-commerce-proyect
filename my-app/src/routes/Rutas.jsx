import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/item/:id" element={<ItemDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
