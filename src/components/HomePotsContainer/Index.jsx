import React from 'react'
import HomePot from '../HomePot/Index'

function HomePotsContainer() {
  const moc =[{name: "test1", ammountInInPot: 10, totalAllocated: 20, type:"save"}, 
  {name: "test2", ammountInInPot: 2, totalAllocated: 10, type:"save"},
   {name: "test3", ammountInInPot: 2, totalAllocated: 10,type:"spend"},
    {name: "test1", ammountInInPot: 10, totalAllocated: 20, type:"save"},
     {name: "test2", ammountInInPot: 2, totalAllocated: 10, type:"save"},
      {name: "test3", ammountInInPot: 2, totalAllocated: 10,type:"spend"},
       {name: "test1", ammountInInPot: 10, totalAllocated: 20, type:"save"},
        {name: "test2", ammountInInPot: 2, totalAllocated: 10, type:"save"},
         {name: "test3", ammountInInPot: 2, totalAllocated: 10,type:"spend"}, ]
  return (
    <div className='md:col-span-6 sm:col-span-1 shadow-lg rounded-lg mb-auto m-2 md:h-5/6 mt-auto pb-3 overflow-hidden'>
    <h2 className='text-2xl font-semibold m-3'>Pots</h2>
    <div className='overflow-y-auto max-h-full'>
      <div className='flex flex-wrap justify-evenly'>
        {moc.map((pot) => (
          <HomePot key={pot.name} {...pot} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default HomePotsContainer