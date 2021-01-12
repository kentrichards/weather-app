import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SearchModal from './SearchModal'

const Search = ({ location, setLocation, setLatitude, setLongitude }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button
        type="button"
        className={location ? 'input-btn text-gray-900' : 'input-btn'}
        onClick={() => setShowModal(true)}
      >
        {!location ? 'Search for a location' : location}
      </button>
      <SearchModal
        setLocation={setLocation}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

Search.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  setLatitude: PropTypes.func.isRequired,
  setLongitude: PropTypes.func.isRequired
}

export default Search
