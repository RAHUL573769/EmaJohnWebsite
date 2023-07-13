import React, { useEffect, useState } from "react";
import "./Shop.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import { addToDb } from "../utilities/fakeDb";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });

  const handleAddToCart = (id) => {
    addToDb(id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <SingleProduct
            handleAddToCart={handleAddToCart}
            product={product}
          ></SingleProduct>
        ))}
      </div>
      <div className="cart-container">This is Cart</div>
    </div>
  );
};

export default Shop;
