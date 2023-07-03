import {
  collection,
  getDoc,
  getDocs,
  doc,
  setDoc,
  addDoc,
  or,
} from "firebase/firestore";
import { db } from "../services/firebase.config";
import { useState, useCallback, useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";

export default function useFirebase() {
  const { products, setProducts, product, setProduct, filter, setFilter } =
    useContext(GlobalContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("accediendo a firebase");

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const prodsCol = collection(db, "products");
      const prodsData = await getDocs(prodsCol);
      setProducts(prodsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getProduct = async ({ id }) => {
    try {
      const document = doc(db, "products", id);
      const response = await getDoc(document);
      const result = response.data();
      setProduct({ id: response.id, ...result });
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = async (order) => {
    try {
      const newOrderDoc = await addDoc(collection(db, "orders"), order);
      console.log(newOrderDoc);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    product,
    products,
    getProduct,
    getProducts,
    createOrder,
    loading,
    error,
  };
}
