import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const apiUrl = "http://localhost:4000/api/cart";
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("inside cart items");
    // Fetching cart items
    const fetchCartItems = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const json = await response.json();
        console.log(json);
        setCartItems(json);
      } catch (error) {
        console.error("Error fetching cart items:", error.message);
      }
    };

    fetchCartItems();
  }, []);
  useEffect(() => {
    // Calculate the total price whenever cartItems change
    const total = cartItems.reduce(
      (acc, item) => acc + item.cost * item.quantity,
      0
    );
    console.log(total);
    setTotalPrice(total);
  }, [cartItems]);

  const handleRemoveItem = async (id) => {
    console.log(`${apiUrl}/${id}`);
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }
      const updatedCartItems = cartItems.filter((item) => item._id !== id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleQuantityChange = async (id, newQuantity) => {
    try {
      console.log(`${apiUrl}/${id}`);
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      if (!response.ok) {
        throw new Error("Failed to update item quantity");
      }
      const updatedCartItems = cartItems.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item
      );
      for (const item of updatedCartItems) {
        if (item.quantity === 0) {
          handleRemoveItem(item._id);
        }
      }
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  /*const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item
    );
    setCartItems(updatedCartItems);
  }; */

  return (
    <div className="h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item._id}
                      item={item}
                      onRemove={() => handleRemoveItem(item._id)}
                      onQuantityChange={(newQuantity) =>
                        handleQuantityChange(item._id, newQuantity)
                      }
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <hr className="my-2" />
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between mb-2">
                  <span className="font-semibold">
                    {item.title} x{item.quantity}
                  </span>
                  <span className="font-semibold">
                    ₹{item.cost * item.quantity}
                  </span>
                </div>
              ))}
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">₹{totalPrice}</span>
              </div>
              <NavLink to="/checkout">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
