import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Format from '../utils/Format'

import DataEntry from './DataEntry'
import ChevronIcon from '../icons/chevron.svg'
import WeatherIcon from './WeatherIcon'

const AccordionItem = ({ dailyWeather }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Extract relevant variables
  const { dt, temp, weather, pop } = dailyWeather

  // Transform raw data into presentable strings
  const date = new Date(dt * 1000)
  const dayOfTheWeek = date.toLocaleDateString('en-US', { weekday: 'long' })
  const calendarDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const lowestTemperature = Format.temperature(temp.max)
  const highestTemperature = Format.temperature(temp.min)

  const precipitation = Format.precipitation(pop)
  const humidity = Format.humidity(dailyWeather.humidity)

  const sunrise = Format.hour(dailyWeather.sunrise)
  const sunset = Format.hour(dailyWeather.sunset)

  const windSpeed = Format.windSpeed(dailyWeather.wind_speed)
  const windDirection = Format.windDirection(dailyWeather.wind_deg)

  return (
    <li>
      <button
        className="accordion-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="inline-flex flex-grow">
          <WeatherIcon category={weather[0].main} />
          <div className="ml-3 text-left">
            <p className="text-sm font-medium">{dayOfTheWeek}</p>
            <p className="text-sm text-gray-500">{calendarDate}</p>
          </div>
        </div>
        <ChevronIcon
          className={isOpen ? 'secondary-icon rotate-90' : 'secondary-icon'}
        />
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
