import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <p>⭐ {product.rating}</p>
      <button onClick={() => console.log(product.name)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
    