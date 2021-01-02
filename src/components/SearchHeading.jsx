import React from 'react'
import PropTypes from 'prop-types'

import CloseIcon from '../icons/close.svg'

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
      <CloseIcon />
    </button>
  </div>
)

SearchHeading.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default SearchHeading
