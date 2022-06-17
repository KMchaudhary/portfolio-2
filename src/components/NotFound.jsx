import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-[100vh] bg-slate-50 flex justify-center items-center">
      <div className='flex flex-col'>
        <h1 className='text-center text-red-500 text-5xl font-serif mb-4'>404!</h1>
        <h2 className='text-4xl text-center'>page not found 🧐</h2>
        <Link to="/" className='text-center my-3 text-blue-400 hover:text-blue-500'>Go to home page &rarr;</Link>
      </div>
    </div>
  )
}
