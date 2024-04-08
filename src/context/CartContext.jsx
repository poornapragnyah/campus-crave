import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const initialItems = [
    { id: 1, name: "Tea", price: 20, quantity: 1 },
    { id: 2, name: "Samosa Chat", price: 50, quantity: 1 },
  ];

  const [cartItems, setCartItems] = useState(initialItems);
  const apiUrl = "http://localhost:4000/api/cart";

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const json = await response.json();
        setCartItems(json);
      } catch (error) {
        console.error("Error fetching cart items:", error.message);
      }
    };

    fetchCartItems();
  }, []);

  const updateCartItem = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item
    );
    setCartItems(updatedCartItems);
    // Update item in the database
  };

  const removeCartItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    // Remove item from the database
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCartItem, removeCartItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
