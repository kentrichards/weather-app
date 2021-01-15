import React, { useState } from 'react'
import PropTypes from 'prop-types'

import format from '../utils/format'

import Icons from './Icons'
import DataEntry from './DataEntry'

const AccordionItem = ({ dailyWeather }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Extract relevant variables
  const { dt, temp, weather, pop } = dailyWeather

  // Transform raw data into presentable strings
  const date = new Date(dt * 1000)
  const dayOfTheWeek = date.toLocaleDateString('en-US', { weekday: 'long' })
  const calendarDate = format.calendarDate(date)

  const lowestTemperature = format.temperature(temp.max)
  const highestTemperature = format.temperature(temp.min)

  const precipitation = format.precipitation(pop)
  const humidity = format.humidity(dailyWeather.humidity)

  const sunrise = format.hour(dailyWeather.sunrise)
  const sunset = format.hour(dailyWeather.sunset)

  const windSpeed = format.windSpeed(dailyWeather.wind_speed)
  const windDirection = format.windDirection(dailyWeather.wind_deg)

  return (
    <li>
      <button
        className="accordion-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="inline-flex flex-grow">
          <Icons.Weather category={weather[0].main} />
          <div className="ml-3 text-left">
            <p className="text-sm font-medium">{dayOfTheWeek}</p>
            <p className="text-sm text-gray-500">{calendarDate}</p>
          </div>
        </div>
        <Icons.Chevron styles={isOpen && 'rotate-90'} />
      </button>
      {isOpen && (
        <div className="py-2 grid grid-cols-2 gap-5 sm:grid-cols-4">
          <DataEntry label="High" value={highestTemperature} />
          <DataEntry label="Low" value={lowestTemperature} />

          <DataEntry label="Sunrise" value={sunrise} />
          <DataEntry label="Sunset" value={sunset} />

          <DataEntry label="Precipitation" value={precipitation} />
          <DataEntry label="Humidity" value={humidity} />

          <DataEntry label="Wind Speed" value={windSpeed} />
          <DataEntry label="Wind Direction" value={windDirection} />
        </div>
      )}
    </li>
  )
}

AccordionItem.propTypes = {
  dailyWeather: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired
      })
    ).isRequired,
    temp: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }).isRequired,
    pop: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    sunrise: PropTypes.number.isRequired,
    sunset: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
    wind_deg: PropTypes.number.isRequired
  }).isRequired
}

export default AccordionItem
