import React from 'react'
import PropTypes from 'prop-types'

import Format from '../utils/Format'

import WeatherIcon from './WeatherIcon'

const Hero = ({ currentWeather }) => {
  // Extract the relevant fields about today's weather
  const { temp, dt } = currentWeather

  // Make the data presentable
  const temperature = Format.temperature(temp)
  const temperatureStyle =
    temperature > 10 ? 'text-yellow-300' : 'text-blue-300'

  const date = new Date(dt * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="p-4 mt-4 w-full h-64 shadow-lg rounded bg-white">
      <div className="h-full flex justify-between">
        <div className="h-full flex flex-col justify-between z-10">
          <div>
            <p className="font-semibold text-2xl">Middleton</p>
            <p className="text-gray-600 text-sm">{date}</p>
          </div>
          <div>
            <p className={`${temperatureStyle} text-8xl`}>{temperature}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end">
          <WeatherIcon
            category={currentWeather.weather[0].main}
            styles="text-gray-800 h-full z-0"
          />
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  currentWeather: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    dt: PropTypes.number.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default Hero
