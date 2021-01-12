import React, { useState, useEffect } from 'react'

import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AccordionList from '../components/AccordionList'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [hasErrors, setHasErrors] = useState(false)

  const fetchData = async () => {
    // Read the unit type from the URL parameters
    const params = new URL(document.location).searchParams
    const units = params.get('units') || 'metric'

    const latitude = localStorage.getItem('latitude')
    const longitude = localStorage.getItem('longitude')
    const coordinates = `&lat=${latitude}&lon=${longitude}`

    await fetch(
      `${process.env.WEATHER_URL}${coordinates}&units=${units}&appid=${process.env.WEATHER_KEY}`
    )
      .then(response => response.json())
      .then(result => setWeatherData(result))
      .catch(setHasErrors(true))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col space-y-6">
        {weatherData && (
          <>
            <Hero currentWeather={weatherData.current} />
            <AccordionList weeklyWeather={weatherData.daily} />
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}

export default Weather
