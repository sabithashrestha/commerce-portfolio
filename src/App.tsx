import { useEffect, useState } from "react";
import supabase from "../src/config/supabaseClient";

const App = () => {
  const [fetchError, setFetchError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase.from("products").select();

      if (error) {
        setFetchError("Could not fetch the data");
        setProduct(null);
        console.log(error);
      }

      if (data) {
        setProduct(data);
        setFetchError(null);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {product && (
        <ul>
          {product.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
