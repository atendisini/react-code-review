import { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(0);

  return (
    <input
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
    />
  );
}

export default Cart;
