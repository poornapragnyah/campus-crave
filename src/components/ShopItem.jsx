import React, { useState } from "react";
import "../App.css";

const ShopItem = (props) => {
  const [Added, setAdded] = useState(0);
  const apiUrl = "http://localhost:4000/api/cart";

  const addToCart = async (event) => {
    event.preventDefault();
    const itemData = {
      name: props.title,
      price: props.cost,
      quantity: props.quantity,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Assuming the API expects JSON
        },
        body: JSON.stringify(itemData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Item added to cart successfully:", responseData);
      setAdded(1);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadown-lg p-4 m-4 inline-block w-96 h-32 relative ${
        Added ? "bounce1" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="text-2xl m-3 font-bold">{props.title}</p>
        <p className="text-lg m-2 text-green-700 font-semibold">
          ₹{props.cost}
        </p>
      </div>
      <p className="m-2 text-slate-600">{props.desc}</p>
      <button onClick={addToCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute right-5 bottom-5 shadown-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default ShopItem;
