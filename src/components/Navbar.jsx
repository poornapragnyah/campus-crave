import React from 'react'
import { useState } from 'react';
import '../App.css';

const Navbar = () => {
    let Links = [
        {name:"Home",link:'/'},
        {name:"About",link:'/'},
        {name:"Contact Us",link:'/'},
    ]
    const [isOpen, setOpen] = useState(false);    
    return (
        <nav>
    <div className='flex justify-between h-20 p-5 bounce'>
        <img src="../src/assets/campus-1.png" alt="logo" className='scale-150 shadow-md rounded-xl'/>

        <input type="text" placeholder='Search' className='px-5 py-3 items-center rounded-lg bg-gray-200 focus:outline-none shadow-md hover:scale-105 ease-linear'/>
        <ul className='hidden md:flex items-center space-x-4 list-none'>            
           {
            Links.map((link)=>(
                <li className='hover:scale-105 ease-linear bg-white rounded-xl p-2 px-3 shadow-md '>
                    <a href={link.link}>{link.name}</a>
                </li>
            ))
           }       
        </ul>
    

      <button
        onClick={() => setOpen(!isOpen)}
        className='md:hidden p-2 focus:outline-none'
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
      <div className={` ${isOpen ? 'flex' : 'hidden'} absolute right-2`}>
        <ul className='items-center space-y-4 list-none rounded-2xl shadow-md '>
          {Links.map((link, index) => (
            <li key={index} className='hover:scale-105 ease-linear bg-white rounded-xl p-2 px-3 shadow-md'>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
    </div>
    </nav>
  )
}

export default Navbar
