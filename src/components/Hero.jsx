import React from 'react'

import CloudIcon from '../icons/cloudy.svg'

const Hero = () => (
  <div className="p-4 mt-4 w-full h-64 shadow rounded bg-gray-900">
    <div className="h-full flex justify-between">
      <div className="h-full flex flex-col justify-between z-10">
        <div>
          <p className="text-white font-semibold text-2xl">Middleton</p>
          <p className="text-gray-300 text-sm"> December 19th, 2020</p>
        </div>
        <div>
          <p className="text-yellow-300 text-8xl">21°C</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <CloudIcon className="text-gray-800 h-full z-0" />
      </div>
    </div>
  </div>
)

export default Hero
