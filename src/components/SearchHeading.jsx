import React from 'react'
import PropTypes from 'prop-types'

import Icons from './Icons'

const SearchHeading = ({ closeModal }) => (
  <div className="flex justify-between items-center">
    <h1 className="title" id="modal-heading">
      Search
    </h1>
    <button
      type="button"
      onClick={() => closeModal()}
      className="rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
    >
      <Icons.Close />
    </button>
  </div>
)

SearchHeading.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default SearchHeading
