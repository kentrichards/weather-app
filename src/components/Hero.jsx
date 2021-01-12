import React from 'react'
import PropTypes from 'prop-types'

import format from '../utils/format'

import WeatherIcon from './WeatherIcon'

const Hero = ({ currentWeather }) => {
  // Extract the relevant fields about today's weather
  const { temp, dt } = currentWeather

  // Make the data presentable
  const temperature = format.temperature(temp)
  const temperatureStyle = format.temperatureStyle(temp)

  const date = new Date(dt * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Get the name of the place we are showing weather data for
  const params = new URL(document.location).searchParams
  const name = params.get('place')

  return (
    <div className="p-4 mt-4 w-full h-64 shadow-lg rounded bg-white">
      <div className="h-full flex flex-col justify-between">
        <div className="h-14 flex w-full justify-between ">
          <div>
            <p className="font-semibold text-2xl truncate">{name}</p>
            <p className="text-gray-600 text-sm truncate">{date}</p>
          </div>
          <WeatherIcon
            category={currentWeather.weather[0].main}
            styles="text-gray-800 flex-shrink-0"
          />
        </div>
        <div>
          <p className={`${temperatureStyle} text-8xl`}>{temperature}</p>
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
