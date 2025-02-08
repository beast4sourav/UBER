import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://cdn.pixabay.com/photo/2023/07/31/14/24/traffic-light-8161107_1280.jpg)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-20 ml-8' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get starded with Uber</h2>
          <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue {" "} ➡️</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
