import React from 'react'
import HomePotsContainer from '../components/HomePotsContainer/Index'

function Home() {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-1'>
      <HomePotsContainer/>
      <div>Log And graph here</div>
    </div>
  )
}

export default Home