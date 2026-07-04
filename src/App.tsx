import { useProducts } from "./hooks/useProducts";
import Products from "./components/Products";

const App = () => {
  const { products, error } = useProducts();

  return (
    <div>
      {error && <p>{error}</p>}
      {products && <Products product={products} />}
    </div>
  );
};

export default App;
