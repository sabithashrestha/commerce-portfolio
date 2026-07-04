import { useEffect, useState } from "react";
import { getProducts } from "../lib/api/products";

// custom hook to fetch products from the supabase database

export function useProducts() {
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<any[] | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
        setProducts(null);
      }
    };

    loadProducts();
  }, []);

  return { products, error };
}
