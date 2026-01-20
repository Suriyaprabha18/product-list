import React, { useState } from "react";
import productsData from "./data/products";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  let filteredProducts = productsData
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category ? p.category === category : true
    );

  if (sort === "low")
    filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high")
    filteredProducts.sort((a, b) => b.price - a.price);
  if (sort === "rating")
    filteredProducts.sort((a, b) => b.rating - a.rating);

  return (
    <>
      <Header />

      <div className="container">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterSort setCategory={setCategory} setSort={setSort} />

        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />

        {/* CART SECTION */}
        <div className="cart-box">
          <h3>🛒 Cart Items</h3>

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>

              <h3>Total Price: ₹{totalPrice}</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
