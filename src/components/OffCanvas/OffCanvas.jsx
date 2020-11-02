import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";

import { GET_CURRENCIES, GET_PRODUCTS } from "../../gql";
import { CartItem } from "./CartItem";
import { useAppContext } from '../../hooks'

import "./style.css";

export function OffCanvas() {
  const { data } = useQuery(GET_CURRENCIES)
  const [getProducts, { loading, data:allProducts }] = useLazyQuery(GET_PRODUCTS);
  const { state, showCart, currencyChanged} = useAppContext()
  const [currency, setCurrency] = useState('USD')

  const getTotalCost = items => items.reduce((acc, item) => {
    return acc += (item.price * item.quantity)
  },0)
  

  useEffect(() => {
    if (allProducts) {
      currencyChanged(allProducts)
    }
  }, [allProducts])
  
  return (
    <div className="offcanvas-container" style={{ transform: `translateX(${state.showCart ? 0: '100%'})`}}>
      <div className="wrapper">
        <div className="mt-1">
          <p><span className="pr-1" style={{cursor: 'pointer'}} onClick={showCart}>&larr;</span> YOUR CART</p>
        </div>
        <div>
          <select name="currency" className="currency" onChange={(evt) => {
            const {value} = evt.target
            setCurrency(value)
            getProducts({ variables: { currency: value}})
          }
            }>
            <option selected defaultValue disabled>
              USD
            </option>
            {data && data.currency.map((currency, idx) => (
              <option value={currency} key={`${idx}+${currency}`}>
                {currency}
              </option>
            ))}
          </select>
          {
            state.items.length >= 1 ? state.items.map(item => (
              <CartItem currency={currency} {...item} key={item.id} />
            )) : (
              <p>No item in your cart yet.</p>
            )
          }
          <hr />
          <div className="price-total">
            <div>Subtotal</div>
            <div>{`${currency} ${getTotalCost(state.items)}`}</div>
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
