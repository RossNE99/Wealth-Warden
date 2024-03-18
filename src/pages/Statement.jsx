import React from 'react'
import Log from '../components/Log/Index'
import Graph from '../components/Graph/Index'
import DownloadStatement from '../components/DownloadStatement/Index'

function Statement() {
  return (
    <div className='grid md:grid-cols-10 sm:grid-cols-1 gap-1 container mx-auto md:pr-4'>
      <div className='shadow-lg rounded-lg p-3 md:col-span-4 sm:col-span-1 md:h-5/6 mt-auto mb-auto'>
        <Log size={"h-1/2"}/>
        <Graph/>
        <DownloadStatement/>
      </div>
    </div>
  )
}

export default Statement