// ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', { email });
      setMessage('A verification code has been sent to your email.');
      navigate('/verifyCode');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Error sending verification code:', error);
    }
  };

  return (
    <div className='text-center' >

      <h2 className='text-2xl text-red-500 mt-24'>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
      <div class="relative my-5  w-3/4 m-auto">
            <input type="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
        
          
        
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
            />

            <label htmlFor="email" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">email</label>

          </div>
     
        <button className='bg-red-200' type="submit">Send Verification Code</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
