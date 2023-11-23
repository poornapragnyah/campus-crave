import React from 'react'
import ShopCard from './ShopCard'

const ShopCards = (props) => {
  return (
    <div className='flex flex-wrap w-fit justify-center'>
        <ShopCard caption="Cantina" src="../src/assets/shop-1.jpg" desc="Lorem ipsum dolor sit amet, Proin vel arcade games, suscipit velit."
        href={`${props.page}shops/cantina`} className=''/>
        <ShopCard caption="Halli Mane" src="../src/assets/shop-2.jpg" desc="Lorem ipsum dolor sit amet, Proin vel arcade games, suscipit velit."
        href="/shops/halli-mane" className=''/>
        <ShopCard caption="PES Canteen" src="../src/assets/shop-3.jpg" desc="Lorem ipsum dolor sit amet, Proin vel arcade games, suscipit velit."
        href="/shops/pes-canteen" className=''/>
        <ShopCard caption="PES Campus Mart" src="../src/assets/shop-4.jpg" desc="Lorem ipsum dolor sit amet, Proin vel arcade games, suscipit velit."
        href="/shops/campus-mart" className=''/>
    </div>
  )
}

export default ShopCards
