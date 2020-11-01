import React, { useState } from "react";

import { useAppContext } from '../../hooks'

const styles = {
  wrapper: {
    display:'flex',
  },
  signs: {
    flex: 1
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
    <div style={styles.wrapper}>
      <div style={styles.signs} onClick={decrease}>-</div>
      <div style={styles.count}>{item.quantity}</div>
      <div style={styles.signs} onClick={increase}>+</div>
    </div>
  );
}
