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
    <div className='overflow-x-auto max-h-full my-auto md:pb-12 grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
      {allPots.length>0 ? (
            allPots.map((pot) => (
              <div key={pot.id} className="flex justify-center">
                <HomePot key={pot.id} {...pot} />
              </div>
            ))
          ) : 
          <NoDataPlaceholder/>
          }
    </div>
  </div>
  )
}

export default HomePotsContainer