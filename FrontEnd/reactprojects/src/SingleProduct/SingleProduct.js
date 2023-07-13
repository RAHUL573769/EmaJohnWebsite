import React from "react";
import "./Single.css";
const SingleProduct = (props) => {
  const { category, id, img, name, seller, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" srcset="" />

      <div className="product-info">
        <h1 className="product-name">{name}</h1>
        <p>Category:{category}</p>
        <p>Seller:{seller}</p>
        <p>Price:{price}</p>

        <button onClick={() => props.handleAddToCart(id)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
