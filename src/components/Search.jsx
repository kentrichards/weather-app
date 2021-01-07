import React, { useState } from 'react'

import SearchModal from './SearchModal'

const Search = () => {
  const [locationName, setLocationName] = useState(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button
        type="button"
        className={locationName ? 'input-btn text-gray-900' : 'input-btn'}
        onClick={() => setShowModal(true)}
      >
        {!locationName ? 'Search for a location' : locationName}
      </button>
      <SearchModal
        setLocationName={setLocationName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default Search
