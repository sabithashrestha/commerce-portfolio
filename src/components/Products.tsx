import React from "react";

const Products = ({ product }) => {
  return (
    <div>
      {"Products List:"}
      <ul>
        {product.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
