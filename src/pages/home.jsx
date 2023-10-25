import React from 'react'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import ShopCards from '../components/ShopCards'

const Home = () => {
  return (
    <div>
        <Offers caption="Order now and get 10% off"/>
        <Navbar />       
        <ShopCards/>
    </div>
  )
}

export default Home
