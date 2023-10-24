import React from 'react'
import ShopCard from './ShopCard'

const ShopCards = () => {
  return (
    <div className='justify-center'>
        <ShopCard caption="Cantina" src="../src/assets/shop-1.jpg" desc="Lorem ipsum dolor sit amet, Proin vel arcade games, suscipit velit."
        href="/cantina" className='flex'/>
        <ShopCard caption="Halli Mane" src="../src/assets/shop-2.jpg" desc="Lorem ipsum dolor sit amet, Proin vel arcade games, suscipit velit."
        href="/halli-mane" className='flex'/>
        <ShopCard caption="PES Canteen" src="../src/assets/shop-3.jpg" desc="Lorem ipsum dolor sit amet, Proin vel arcade games, suscipit velit."
        href="pes-canteen" className='flex'/>
        <ShopCard caption="PES Campus Mart" src="../src/assets/shop-4.jpg" desc="Lorem ipsum dolor sit amet, Proin vel arcade games, suscipit velit."
        href="campus-mart" className='flex'/>
    </div>
  )
}

export default ShopCards
