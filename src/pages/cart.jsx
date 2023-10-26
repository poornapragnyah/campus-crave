import React from 'react'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import CartItems from '../components/CartItems'

const cart = () => {
  return (
    <div>
    <Offers caption="Order now and get 10% off"/>
    <Navbar/>
    <CartItems/>
    </div>
  )
}

export default cart
