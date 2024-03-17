import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='p-4 text-white border-t-2  border-slate-50/30 flex md:flex-row md:justify-between items-center justify-center flex-col gap-3'>
         <Link to='/'>
      <h1 className=' text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      <p>Design and Developed By  <Link className='text-red-600' to='https://scotrand.com/' target='_blank'>Scotrand</Link> Studio.</p>
      </div>
    </>
  )
}

export default Footer