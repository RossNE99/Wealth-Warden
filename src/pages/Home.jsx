import React from 'react'
import HomePotsContainer from '../components/HomePotsContainer/Index'

function Home() {
  return (
    <div className='grid md:grid-cols-10 sm:grid-cols-1 gap-1 container mx-auto'>
      <HomePotsContainer/>
      <div className='md:col-span-4 sm:col-span-1'>Log And graph here</div>
    </div>
  )
}

export default Home