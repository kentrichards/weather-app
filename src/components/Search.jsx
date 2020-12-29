/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [queryResponse, setQueryResponse] = useState('')

  const fetchPlace = async query => {
    await fetch(
      `${process.env.GEOCODE_URL}${query}.json?types=place&limit=4&access_token=${process.env.GEOCODE_KEY}`
    )
      .then(response => response.json())
      .then(result => setQueryResponse(result))
  }

  const delayedSearch = useCallback(
    debounce(query => fetchPlace(query), 300),
    []
  )

  useEffect(() => {
    if (searchQuery.length !== 0) {
      delayedSearch(searchQuery)
    }

    // Cancel pending function calls when the component unmounts
    return delayedSearch.cancel
  }, [searchQuery, delayedSearch])

  const handleChange = event => {
    setSearchQuery(event.target.value)
  }

  let searchResults = ''
  if (queryResponse) {
    if (!queryResponse.features || queryResponse.features.length === 0) {
      searchResults = <li className="no-results">No results found</li>
    } else if (queryResponse.features) {
      searchResults = queryResponse.features.map(place => (
        <li className="search-result" key={place.id}>
          {place.place_name}
        </li>
      ))
    }
  }

  return (
    <div className="relative">
      <input
        type="text"
        name="location"
        id="location"
        className="input"
        value={searchQuery}
        onChange={e => handleChange(e)}
        placeholder="Toronto, Ontario"
      />
      {searchQuery && (
        <ul className="absolute w-full mt-2 bg-white overflow-hidden rounded-md shadow border border-gray-300">
          {searchResults}
        </ul>
      )}
    </div>
  )
}

export default Search
