import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

const SearchResults = ({ searchQuery, setLocationName, closeModal }) => {
  const [queryResults, setQueryResults] = useState(null)

  const fetchResults = async q => {
    const options = ['types=place', 'limit=4', 'access_token='].join('&')
    const url = process.env.GEOCODE_URL
    const key = process.env.GEOCODE_KEY
    const query = `${q}.json?`

    await fetch(`${url}${query}${options}${key}`)
      .then(response => response.json())
      .then(result => setQueryResults(result.features))
  }

  const delayedSearch = useCallback(
    debounce(q => fetchResults(q), 300),
    []
  )

  useEffect(() => {
    if (searchQuery.length !== 0) {
      delayedSearch(searchQuery)
    }

    // Cancel pending function calls when the component unmounts
    return delayedSearch.cancel
  }, [searchQuery, delayedSearch])

  const selectLocation = data => {
    const name = data.text
    const longName = data.place_name
    const latitude = data.center[1]
    const longitude = data.center[0]

    localStorage.setItem('name', name)
    localStorage.setItem('latitude', latitude)
    localStorage.setItem('longitude', longitude)

    setLocationName(longName)
    closeModal()
  }

  return (
    <div>
      <hr className="border-gray-300" />
      <ul className="max-h-72 overflow-y-auto">
        {queryResults && queryResults.length !== 0 ? (
          queryResults.map(place => (
            <li key={place.id}>
              <button
                onClick={() => selectLocation(place)}
                className="search-result"
                type="button"
              >
                {place.place_name}
              </button>
            </li>
          ))
        ) : (
          <li className="no-results">No results found.</li>
        )}
      </ul>
      <hr className="border-gray-300" />
    </div>
  )
}

SearchResults.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setLocationName: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default SearchResults
