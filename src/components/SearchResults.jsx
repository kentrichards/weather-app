import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

const SearchResults = ({
  searchQuery,
  setLocation,
  setLatitude,
  setLongitude,
  closeModal
}) => {
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
    setLatitude(data.center[1])
    setLongitude(data.center[0])
    setLocation(data.place_name)

    closeModal()
  }

  return (
    <div>
      <hr className="border-gray-300" />
      <ul className="max-h-72">
        {queryResults && queryResults.length !== 0 ? (
          queryResults.map(place => (
            <li key={place.id}>
              <button
                onClick={() => selectLocation(place)}
                className="search-result"
                type="button"
              >
                <span className="truncate">{place.place_name}</span>
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
  setLocation: PropTypes.func.isRequired,
  setLatitude: PropTypes.func.isRequired,
  setLongitude: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default SearchResults
