import React from "react";
import PropTypes from "prop-types";

import { QuantityCounter } from "./QuantityCounter";

export function CartItem({ description, maxQuantity, price, itemImageUrl }) {
  return (
    <div>
      <div className="remove-item">x</div>
      <div className="description">
        <h3>{description}</h3>
      </div>
      <div className="item-details">
        <div>
          <QuantityCounter maxQuantity={5} />
        </div>
        <div>${price}</div>
        <div>
          <img src={itemImageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  description: PropTypes.string,
  maxQuantity: PropTypes.number,
  price: PropTypes.number,
  itemImageUrl: PropTypes.string,
};
