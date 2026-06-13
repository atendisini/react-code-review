import { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(0);

  return (
    <input
      type="number"
      min="1"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
    />
  );
}

export default Cart;
