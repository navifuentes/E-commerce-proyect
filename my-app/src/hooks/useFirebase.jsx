import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../services/firebase.config";
import { useState } from "react";

const useFirebase = () => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});

  const getProducts = async () => {
    try {
      const data = collection(db, "products");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProductos(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getProductsCategory = async (category) => {
    try {
      const data = collection(db, "products");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProductos(result.filter((prod) => prod.category == category));
    } catch (error) {
      console.log(error);
    }
  };
  const getProduct = async ({ id }) => {
    try {
      const document = doc(db, "products", id);
      const response = await getDoc(document);
      const result = response.data();
      setProducto({ id: response.id, ...result });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    producto,
    productos,
    getProduct,
    getProducts,
    getProductsCategory,
  };
};

export default useFirebase;
