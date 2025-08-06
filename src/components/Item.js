import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={handleAddToCartClick}
        style={{
          backgroundColor: isInCart ? "purple" : "",
          color: isInCart ? "white" : "",
          border: "none",
          padding: "0.5rem 0.5rem",
          cursor: "pointer"
        }}
      >
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
