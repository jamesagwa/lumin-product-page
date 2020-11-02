import React, { useState } from "react";

import { useAppContext } from '../../hooks'

const styles = {
  wrapper: {
    display:'flex',
  },
  signs: {
    flex: 1,
    cursor: 'pointer'
  },
  count: {
    flex: 2
  }
}

export function QuantityCounter({ item }) {
  const {increaseQuantity, decreaseQuantity} = useAppContext()

  const increase = () => {
    increaseQuantity(item)
  }
 
  const decrease = () => {
    decreaseQuantity(item)
  }

  return (
    <div role="group">
      <div style={styles.wrapper} role="spinbutton" aria-valuemin="0" aria-valuenow={item.quantity} aria-valuemax={item.quantity**2} >
        <div style={styles.signs} onClick={decrease} aria-label="decrease quantity" tabIndex="-1">-</div>
        <div style={styles.count} >{item.quantity}</div>
        <div style={styles.signs} onClick={increase} aria-label="increase quantity" tabIndex="-1">+</div>
      </div>
    </div>
  );
}
