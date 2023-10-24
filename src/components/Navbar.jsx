import React from 'react'
import { useState } from 'react';
import '../App.css';

const Navbar = () => {
    let Links = [
        {name:'Home',logo:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      ,link:'/home'},
        {name:"Cart",logo:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      ,link:'/cart'},
        {name:"Login / Sign Up",logo:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
      ,link:'/login'},
    ]
    const [isOpen, setOpen] = useState(false);    
    return (
        <nav>
    <div className='flex justify-between h-20 p-5 bounce'>
        <img src="../src/assets/campus-1.png" alt="logo" className='scale-150 shadow-md rounded-xl'/>

        <input type="text" placeholder='Search' className='px-5 py-3 items-center rounded-lg bg-white focus:outline-none shadow-md hover:scale-105 ease-linear'/>
        <ul className='hidden md:flex items-center space-x-4 list-none'>            
           {
            Links.map((link)=>(
                <li className='hover:scale-105 ease-linear bg-white rounded-xl p-2 px-3 shadow-md cursor-pointer'>
                    <a href={link.link} target='_blank' title={link.name}>{link.logo}</a>
                </li>
            ))
           }       
        </ul>
    

      <button
        onClick={() => setOpen(!isOpen)}
        className='md:hidden p-2 focus:outline-none bg-white rounded-full shadow-md'
      >
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
          {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>        
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> 
            

          )}
        </svg>
      </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'} absolute right-2`}>
        <ul className='items-center space-y-4 list-none rounded-2xl shadow-md '>
          {Links.map((link, index) => (
            <li key={index} className='hover:scale-105 ease-linear bg-white rounded-xl p-2 px-3 shadow-md cursor-pointer'>
              <a href={link.link} className='flex items-center justify-evenly w-[100px]' target='_blank'>{link.name}{link.logo}</a>
            </li>
          ))}
        </ul>
    </div>
    </nav>
  )
}

export default Navbar
