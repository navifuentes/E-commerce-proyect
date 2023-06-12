import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import ItemDetail from "../pages/ItemDetail";
import Cart from "../pages/Cart";
import Footer from "../components/Footer/Footer";
import GlobalProvider from "../context/GlobalContext";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ItemDetail />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default Rutas;
