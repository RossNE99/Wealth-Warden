import React from 'react'
import Log from '../components/Log/Index'
import Graph from '../components/Graph/Index'
import DownloadStatement from '../components/DownloadStatement/Index'

function Statement() {
  return (
    <div className='container mx-auto md:pr-4'>
      <div className='shadow-lg rounded-lg p-3 md:col-span-4 sm:col-span-1 mt-auto mb-auto'>
        <DownloadStatement/>
      </div>
    </div>
  )
}

export default Statement