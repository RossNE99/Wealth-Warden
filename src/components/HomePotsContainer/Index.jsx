import React from 'react'
import HomePot from '../HomePot/Index'

function HomePotsContainer() {
  const moc =[{name: "test1", ammountInInPot: 10, totalAllocated: 20, type:"save"}, {name: "test2", ammountInInPot: 2, totalAllocated: 10, type:"save"}, {name: "test3", ammountInInPot: 2, totalAllocated: 10,type:"spend"}]
  return (
    <div className='shadow-lg rounded flex flex-wrap'>
      {moc.map((pot) => (
        <HomePot key={pot.name} {...pot} />
      ))}
    </div>
  )
}

export default HomePotsContainer