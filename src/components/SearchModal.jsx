import React, { useState, useRef } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

import SearchHeading from './SearchHeading'
import SearchResults from './SearchResults'

// Bind the modal to the application's root, for a11y
Modal.setAppElement('#___gatsby')

const SearchModal = ({ setLocationName, showModal, setShowModal }) => {
  const textInput = useRef(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = event => {
    setSearchQuery(event.target.value)
  }

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      className="modal-content mx-auto my-4"
      overlayClassName="modal-overlay"
      aria={{
        labelledby: 'modal-heading'
      }}
      shouldFocusAfterRender={false}
      onAfterOpen={() => textInput.current.focus()}
    >
      <div className="flex flex-col space-y-4">
        <SearchHeading closeModal={() => setShowModal(false)} />
        <input
          type="text"
          className="input"
          value={searchQuery}
          onChange={event => handleChange(event)}
          ref={textInput}
        />
        <SearchResults
          searchQuery={searchQuery}
          setLocationName={setLocationName}
          closeModal={() => setShowModal(false)}
        />
      </div>
    </Modal>
  )
}

SearchModal.propTypes = {
  setLocationName: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default SearchModal
