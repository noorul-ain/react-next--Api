import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url, { signal: controller.signal });
        setProducts(res.data);
        setError(null);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          console.error("Fetch error:", err);
          setError("Failed to load products.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Cleanup: abort if component unmounts or url changes
    return () => controller.abort();
  }, [url]);

  return { products, error, loading };
};

export default useFetchProducts;
