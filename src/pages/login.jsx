import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

const Login = () => {

  return (
    <div className='flex flex-col justify-center items-center shadow-lg h-[100vh]'>
        <div className='flex flex-col justify-center items-center space-y-3 bg-white w-72 rounded-lg p-4 m-2 shadow-lg'>
            <p className='text-2xl p-2 font-semibold mb-2'>Login</p>
            <input placeholder='Username' className='input-box'/>
            <input placeholder='Password' className='input-box'/>
            <p className='text-sm p-2 mt-4'>New here? <NavLink to="/signup" className={'text-orange-400 underline text-sm'}> Create an account!</NavLink></p>
        </div>
    </div>
  )
}

export default Login
