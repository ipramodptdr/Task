import React from 'react'
import FlashSales from './FlashSales'
import Hero from './Hero'
import Navbar from './Navbar'
import SalesCard from './SalesCard'

const Home = () => {
  return (
    <>
    <div className='bg-black w-screen  text-white flex justify-center items-center text-sm'>
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
         <button className='cursor-pointer ml-2'>shop Now</button>
    </div>
    <Navbar/>
    <Hero/>
    <FlashSales/>
    <SalesCard/>
    </>
  )
}

export default Home
