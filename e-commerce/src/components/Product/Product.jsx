import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { id, name, price, seller, ratings, img } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>price: $ {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} stars</p>
        <button
          onClick={() => handleAddToCart(props.product)}
          className="btn-cart"
        >
          add to cart 
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
