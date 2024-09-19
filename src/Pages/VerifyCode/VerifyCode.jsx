// VerifyCode.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function VerifyCode() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
        email,
        code: verificationCode
      });
      setMessage('Verification code is valid. You can now reset your password.');
    } catch (error) {
      setMessage('Invalid verification code or email. Please try again.');
      console.error('Error verifying code:', error);
    }
  };

  return (
    <div className='text-center mt-24'>
      <h2 className='text-2xl text-red-700'>Verify Code</h2>
      <form onSubmit={handleSubmit}>

      <div class="relative my-5  w-3/4 m-auto">
            <input type="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
        
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
            />

            <label htmlFor="email" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">email</label>

          </div>
      <div class="relative my-5  w-3/4 m-auto">
            <input  id="code" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-green-700 appearance-none dark:text-white dark:border-blue-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
        
          
        type="text"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        required
            />

            <label htmlFor="code" class="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">          Verification Code:
            </label>

          </div>

        
   
  
        <button className='text-center hover:bg-red-400' type="submit">Verify Code</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
