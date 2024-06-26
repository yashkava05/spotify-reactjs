import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate  = useNavigate()

  return (
      <>
          <div className='w-full justify-between flex items-center font-semibold'>
              <div className='flex items-center gap-2'>
                  <img onClick={() => navigate(-1)} src={assets.arrow_left} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' alt="" />
                  <img onClick={() => navigate(1)} src={assets.arrow_right} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' alt="" />
              </div>
              <div className='flex items-center gap-4'>
                  <p className='bg-white text-black text-[15px] px-4 py-1 hidden md:block rounded-2xl cursor-pointer'>Explore Premium</p>
                  <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                  <p className='cursor-pointer rounded-full bg-yellow-200 w-7 h-7 flex items-center text-black justify-center'>Y</p>
              </div> 
          </div>
          <div className='flex items-center gap-2 mt-4'>
              <p className='px-4 py-1 rounded-2xl bg-white text-black cursor-pointer'>All</p>
              <p className='px-4 py-1 rounded-2xl bg-black cursor-pointer'>Music</p>
              <p className='px-4 py-1 rounded-2xl bg-black cursor-pointer'>Podcasts</p>
          </div>
    </>

  )
}

export default Navbar