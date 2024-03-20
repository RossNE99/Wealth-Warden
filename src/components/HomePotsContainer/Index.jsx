import React from 'react'
import HomePot from '../HomePot/Index'
import NoDataPlaceholder from '../NoDataPlaceholder/Index'
import { useMyContext } from '../Contexts/MyContext'

function HomePotsContainer() {

  const {SavingPots, SpendingPots} = useMyContext()

  const allPots = [...SavingPots, ...SpendingPots]

  return (
    <div className='md:col-span-6 sm:col-span-1 shadow-lg rounded-lg mb-auto m-2 md:h-5/6 mt-auto pb-3 overflow-hidden'>
    <h2 className='text-2xl font-semibold m-3'>Pots</h2>
    <div className='overflow-x-auto max-h-full flex flex-wrap justify-evenly md:pb-12'>
      {allPots.length>0 ? (
            allPots.map((pot) => (
              <HomePot key={pot.id} {...pot} />
            ))
          ) : 
          <NoDataPlaceholder/>
          }
    </div>
  </div>
  )
}

export default HomePotsContainer