import React from 'react'
import Navbar from '../components/Navbar'
import ShopCards from '../components/ShopCards'

const admin = (props) => {
  return (
    <div>
      <Navbar/>
      <ShopCards page='/admin/'/>
    </div>
  )
}

export default admin
