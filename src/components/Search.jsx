import React, { useState } from 'react'

import SearchModal from './SearchModal'

const Search = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button
        type="button"
        className="input-btn"
        onClick={() => setShowModal(true)}
      >
        Toronto, Ontario, Canada
      </button>
      <SearchModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Search
