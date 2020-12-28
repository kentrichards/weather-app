/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import debounce from 'lodash.debounce'

const Index = () => {
  const [unitType, setUnitType] = useState('metric')
  const [searchQuery, setSearchQuery] = useState('')
  const [queryResponse, setQueryResponse] = useState('')
  const [hasErrors, setHasErrors] = useState(false)

  useEffect(() => {
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

  const fetchPlace = async query => {
    await fetch(
      `${process.env.GEOCODE_URL}${query}.json?types=place&access_token=${process.env.GEOCODE_KEY}`
    )
      .then(response => response.json())
      .then(result => setQueryResponse(result))
      .catch(setHasErrors(true))
  }

  const delayedSearch = useCallback(
    debounce(query => fetchPlace(query), 300),
    []
  )

  useEffect(() => {
    if (searchQuery.length >= 2) {
      delayedSearch(searchQuery)
    }

    // Cancel pending function calls when the component unmounts
    return delayedSearch.cancel
  }, [searchQuery, delayedSearch])

  const handleChange = event => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="min-h-screen flex sm:items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>weather-app</title>
      </Helmet>
      <div className="max-w-md w-full space-y-4">
        <h1 className="title">weather-app</h1>
        <input
          type="text"
          name="location"
          id="location"
          className="input"
          value={searchQuery}
          onChange={e => handleChange(e)}
          placeholder="Toronto, Ontario"
        />
        {queryResponse && queryResponse.features && (
          <ul>
            {queryResponse.features.map(place => (
              <li key={place.id}>{place.place_name}</li>
            ))}
          </ul>
        )}
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
              to="/weather"
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
