import { useState } from "react";

function Product() {
  const [price, setPrice] = useState("");

  return (
    <div>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
}

export default Product;
