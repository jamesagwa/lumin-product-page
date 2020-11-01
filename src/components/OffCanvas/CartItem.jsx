import React from "react";
import PropTypes from "prop-types";

import { QuantityCounter } from "./QuantityCounter";

export function CartItem({ title, price, image_url, quantity }) {
  const item = { title, price, image_url, quantity }
  return (
    <div className="cart-item__wrapper">
      <div className="cart-item__remove-icon">x</div>
      <div className="cart-item__title">
        <p>{title}</p>
        <div>
          <QuantityCounter item={item} />
        </div>
      </div>
      <div className="cart-item__price">${quantity * price}</div>
      <div className="cart-item__img">
          <img src={image_url} alt="" />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  title: PropTypes.string,
  maxQuantity: PropTypes.number,
  price: PropTypes.number,
  image_url: PropTypes.string,
};
