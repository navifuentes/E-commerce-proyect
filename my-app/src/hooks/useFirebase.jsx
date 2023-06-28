import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../services/firebase.config";
import { useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";

export function useFirebase({ search }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getProducts = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;
    try {
    } catch (error) {
      setError(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /*   const getProducts = async () => {
    try {
      const data = collection(db, "products");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );

      if (!category) {
        setProductos(result);
      } else {
        setProductos(result.filter((prod) => prod.category == category));
      }
    } catch (error) {
      console.log(error);
    }
  }; */
  /* const getProductsCategory = async (category) => {
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
  }; */
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

  return {
    product,
    products,
    getProduct,
    getProducts,
  };
}
