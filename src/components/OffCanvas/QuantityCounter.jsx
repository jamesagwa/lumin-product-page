import React, { useState } from "react";

export function QuantityCounter({ maxQuantity }) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div>-</div>
      <div>{count}</div>
      <div>+</div>
    </div>
  );
}
