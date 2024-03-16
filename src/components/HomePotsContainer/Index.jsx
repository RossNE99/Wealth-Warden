import React from 'react'
import HomePot from '../HomePot/Index'

function HomePotsContainer() {
  const moc =[{name: "test1", ammountInInPot: 10, totalAllocated: 20, type:"save"}, {name: "test2", ammountInInPot: 2, totalAllocated: 10, type:"save"}, {name: "test3", ammountInInPot: 2, totalAllocated: 10,type:"spend"}]
  return (
    <div className='mt-5 md:col-span-6 sm:col-span-1 shadow-lg rounded-lg mb-auto m-2'>
      <h2 className='text-2xl font-semibold'>Pots</h2>
      <div className='flex flex-wrap justify-evenly'>
        {moc.map((pot) => (
          <HomePot key={pot.name} {...pot} />
        ))}
      </div>
    </div>
  )
}

export default HomePotsContainer