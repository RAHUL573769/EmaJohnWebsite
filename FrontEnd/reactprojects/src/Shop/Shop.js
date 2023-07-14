import React, { useEffect, useState } from "react";
import "./Shop.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import { addToDb, getShoppingCart } from "../utilities/fakeDb";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (selected) => {
    console.log(selected);
    addToDb(selected.id);
    const newCart = [...cart, selected];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      console.log(id);
    }
  }, [products]);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <SingleProduct
            key={product.id}
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
