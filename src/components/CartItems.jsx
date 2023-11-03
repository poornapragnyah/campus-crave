import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import checkout from '../pages/checkout';
import { NavLink } from 'react-router-dom';

const CartItems = () => {
  const initialItems = [
    { id: 1, name: "Cup Noodles", price: 20, quantity: 0 },
    { id: 2, name: "Burger", price: 20, quantity: 0 },
  ];

  const [cartItems, setCartItems] = useState(initialItems);

  useEffect(() => {
    // Calculate the total price whenever cartItems change
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    // Update the quantity for the specified item
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  // it can take negative quantities rn
  return (
    <div className="h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
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
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={() => handleRemoveItem(item.id)}
                    onQuantityChange={newQuantity => handleQuantityChange(item.id, newQuantity)}
                  />
                ))}
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <hr className="my-2" />
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span className="font-semibold">{item.name} x{item.quantity}</span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">₹{totalPrice}</span>
              </div>
              <NavLink to="/checkout"><button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
