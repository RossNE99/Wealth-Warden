import React from 'react';
import HomePotsContainer from '../components/HomePotsContainer/Index';
import Log from '../components/Log/Index';
import Graph from '../components/Graph/Index';
import Row from '../components/Row';

function Home() {
  return (
    <div className='grid md:grid-cols-10 sm:grid-cols-1 gap-1 container mx-auto md:pr-4'>
      <HomePotsContainer/>
      <div className='shadow-lg rounded-lg p-3 md:col-span-4 sm:col-span-1 md:h-5/6 mt-auto mb-auto'>
        <Log size={"h-3/6"}/>
        <Graph/>
      </div>
    </div>
  )
}

export default Home