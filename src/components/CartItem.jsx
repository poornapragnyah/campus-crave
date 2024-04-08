import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <tr>
      <td className="py-4">
        <div className="flex items-center">
          <span className="font-semibold">{item.title}</span>
        </div>
      </td>
      <td className="py-4">₹{item.cost}</td>
      <td className="py-4">
        <div className="flex items-center">
          <button
            className="border rounded-md py-2 px-4 mr-2"
            onClick={() => onQuantityChange(item.quantity - 1)}
          >
            -
          </button>
          <span className="text-center w-8">{item.quantity}</span>
          <button
            className="border rounded-md py-2 px-4 ml-2"
            onClick={() => onQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4">₹{item.cost * item.quantity}</td>
      <td className="py-4">
        <button
          className="text-red-600 rounded-full shadow-xl p-3"
          onClick={onRemove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
