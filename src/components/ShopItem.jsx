import React from 'react'

const ShopItem = (props) => { 

  const addToCart = async (event) => {
    event.preventDefault();

    // Assuming you have a signup endpoint like '/api/signup'
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

        // Handle the error, e.g., display an error message to the user
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during signup:', error);

      // Handle the error, e.g., display a generic error message to the user
    }
  }

  return (
    <div className='bg-white rounded-lg shadown-lg p-4 m-4 inline-block w-96 h-32 relative'>
      
      <div className="flex justify-between items-center">
      <p className='text-2xl m-3 font-bold'>{props.title}</p>
      <p className='text-lg m-2 text-green-700 font-semibold'>₹{props.cost}</p></div>
      <p className='m-2 text-slate-600'>{props.desc}</p>
      <button onClick={addToCart}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-5 bottom-5 shadown-md">
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      </button>

    </div>
  )
}

export default ShopItem
