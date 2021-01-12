import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Search from '../components/Search'

const Index = () => {
  const [location, setLocation] = useState('')
  const [unitType, setUnitType] = useState('metric')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    // Check if the user has previously made a selection
    const savedUnits = localStorage.getItem('units')
    if (savedUnits !== 'metric' && savedUnits !== 'imperial') {
      localStorage.setItem('units', unitType)
    } else {
      setUnitType(savedUnits)
    }
  }, [])

  const handleClick = event => {
    setUnitType(event.target.value)
    localStorage.setItem('units', event.target.value)
  }

  const createQueryString = () => {
    let query = '/weather?'

    // Don't include the unit type if it is the default
    if (unitType !== 'metric') {
      query += 'units=imperial&'
    }

    // Add the name of the location to fetch data for
    // We only want to send the first part of the name to the next page
    query += `place=${location.split(',')[0]}&`

    // Add the coordinates of the location
    query += `lat=${latitude}&lon=${longitude}`

    return query
  }

  return (
    <div className="min-h-screen flex sm:items-center justify-center py-4 sm:py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>weather-app</title>
      </Helmet>
      <div className="max-w-md w-full space-y-4">
        <h1 className="title">weather-app</h1>
        <Search
          location={location}
          setLocation={setLocation}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
        <div>
          <h2 className="font-semibold">Units</h2>
          <div className="sm:flex justify-between items-center">
            <div>
              <div className="flex space-x-4 sm:block sm:space-x-0">
                <div className="flex items-center">
                  <input
                    className="cursor-pointer text-green-500 focus:ring-green-500"
                    type="radio"
                    name="unit-select"
                    id="metric"
                    value="metric"
                    checked={unitType === 'metric'}
                    onChange={e => handleClick(e)}
                  />
                  <label className="ml-2 cursor-pointer" htmlFor="metric">
                    Metric
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="cursor-pointer text-green-500 focus:ring-green-500"
                    type="radio"
                    name="unit-select"
                    id="imperial"
                    value="imperial"
                    checked={unitType === 'imperial'}
                    onChange={e => handleClick(e)}
                  />
                  <label className="ml-2 cursor-pointer" htmlFor="imperial">
                    Imperial
                  </label>
                </div>
              </div>
            </div>
            <Link
              to={createQueryString()}
              className="btn btn-primary mt-4 sm:mt-0 w-full sm:w-auto"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
