import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DataEntry from './DataEntry'
import CloudIcon from '../icons/cloudy.svg'
import ChevronIcon from '../icons/chevron.svg'

const AccordionItem = ({ dayOfTheWeek, calendarDate }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li>
      <button
        className="accordion-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="inline-flex flex-grow">
          <CloudIcon />
          <div className="ml-3 text-left">
            <p className="text-sm font-medium">{dayOfTheWeek}</p>
            <p className="text-sm text-gray-500">{calendarDate}</p>
          </div>
        </div>
        <ChevronIcon
          className={isOpen ? 'secondary-icon' : 'secondary-icon -rotate-90'}
        />
      </button>
      {isOpen && (
        <div className="py-2 grid grid-cols-2 gap-5 sm:grid-cols-4">
          <DataEntry label="High" value="12°C" />
          <DataEntry label="Low" value="-3°C" />

          <DataEntry label="Sunrise" value="7:56 am" />
          <DataEntry label="Sunset" value="4:31 pm" />

          <DataEntry label="Precipitation" value="12%" />
          <DataEntry label="Humidity" value="39%" />

          <DataEntry label="Wind Speed" value="11 km/h" />
          <DataEntry label="Wind Direction" value="SW (220°)" />
        </div>
      )}
    </li>
  )
}

AccordionItem.propTypes = {
  dayOfTheWeek: PropTypes.string.isRequired,
  calendarDate: PropTypes.string.isRequired
}

export default AccordionItem
