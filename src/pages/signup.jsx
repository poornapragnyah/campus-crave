import React from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import { useState, } from 'react';

const signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = 'http://localhost:4000/api/signup';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successfully signed up
        const userData = await response.json();
        console.log('Signup successful:', userData);
        navigate('/home')
      } else {
        // Failed to sign up
        const errorData = await response.json();
        console.error('Signup failed:', errorData.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
    setUsername('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className='flex flex-col justify-center items-center shadow-lg h-[100vh]'>
        <div className='flex flex-col justify-center items-center space-y-3 bg-white w-72 rounded-lg p-4 m-2 shadow-lg'>
            <p className='text-2xl p-2 font-semibold mb-2'>Sign Up</p>
            <input placeholder='Username' className='input-box' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input placeholder='Password' className='input-box' value={password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
            <button onClick={handleSubmit} className='p-3 m-2 w-60 text-center bg-yellow-200 rounded-lg'>Sign up!</button>
            <p className='text-sm p-2 mt-4'>Already have an account? <NavLink to="/login" className={'text-orange-400 underline text-sm'}> Login!</NavLink></p>
        </div>
    </div>   
    </form>  
  )
}

export default signup
