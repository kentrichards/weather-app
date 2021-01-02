import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

const SearchResults = ({ searchQuery }) => {
  const [queryResults, setQueryResults] = useState(null)

  const fetchResults = async q => {
    const options = ['types=place', 'limit=10', 'access_token='].join('&')
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

  return (
    <>
      <hr className="border-gray-300" />
      <ul>
        {queryResults ? (
          queryResults.map(place => (
            <li key={place.id}>
              <button className="search-result" type="button">
                {place.place_name}
              </button>
            </li>
          ))
        ) : (
          <li className="no-results">No results found.</li>
        )}
      </ul>
      <hr className="border-gray-300" />
    </>
  )
}

SearchResults.propTypes = {
  searchQuery: PropTypes.string.isRequired
}

export default SearchResults
