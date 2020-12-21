import React from 'react'
import PropTypes from 'prop-types'

const DataEntry = ({ label, value }) => {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  )
}

DataEntry.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default DataEntry
