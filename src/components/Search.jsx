import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import SearchModal from './SearchModal'

const Search = ({ location, setLocation, setLatitude, setLongitude }) => {
  const [showModal, setShowModal] = useState(false)
  const btnClass = classNames('input-btn', { 'text-gray-900': location })

  return (
    <div>
      <button
        type="button"
        className={btnClass}
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
