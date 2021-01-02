import React, { useState } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

import SearchHeading from './SearchHeading'
import SearchResults from './SearchResults'

// Bind the modal to the application's root, for a11y
Modal.setAppElement('#___gatsby')

const SearchModal = ({ showModal, setShowModal }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = event => {
    setSearchQuery(event.target.value)
  }

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      className="modal-content"
      overlayClassName="modal-overlay"
      aria={{
        labelledby: 'modal-heading'
      }}
    >
      <div className="flex flex-col space-y-4">
        <SearchHeading closeModal={() => setShowModal(false)} />
        <input
          type="text"
          className="input"
          value={searchQuery}
          onChange={event => handleChange(event)}
        />
        <SearchResults searchQuery={searchQuery} />
      </div>
    </Modal>
  )
}

SearchModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default SearchModal
