import React from "react";
import { CartItem } from "./CartItem";

import "./style.css";

export function OffCanvas() {
  return (
    <div className="offcanvas-container">
      <div className="wrapper">
        <div className="cart-title">
          <span>icon</span>
          <span>YOUR CART</span>
        </div>
        <div>
          <select name="currency" id="" className="currency">
            <option selected defaultValue disabled>
              USD
            </option>
          </select>
          <CartItem />
          <hr />
          <div className="price-total">
            <div>Subtotal</div>
            <div>$61.00</div>
          </div>
          <div className="button-group">
            <button>MAKE THIS A SUBSCRIPTION (SAVE 20%)</button>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
