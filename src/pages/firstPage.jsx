import React from 'react'
import { NavLink } from 'react-router-dom'

const firstPage = () => {
  return (
    <div class="flex flex-wrap min-h-screen items-center justify-center bg-gradient-to-tr to-yellow-400 from-yellow-400 p-10">
        <div class="w-max">
            <h1
            class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
            Campus Crave
            </h1>
            
        </div>
        <NavLink to='/home' >
                <button className='bg-white rounded-lg p-4 m-4 ml-4 hover:bg-orange-400 hover:text-white shadow-lg font-semibold text-xl ease-in-out scale-110 text-orange-400'>
                    Get Started!
                </button>
            </NavLink>
    </div>
  )
}

export default firstPage
