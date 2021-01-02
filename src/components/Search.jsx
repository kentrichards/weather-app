import React, { useState } from 'react'

const Search = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button type="button" className="input-btn">
        Toronto, Ontario, Canada
      </button>
    </div>
  )
}

export default Search
