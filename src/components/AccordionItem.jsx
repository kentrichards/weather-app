import React from 'react'
import PropTypes from 'prop-types'

import CloudIcon from '../icons/cloudy.svg'
import ChevronIcon from '../icons/chevron.svg'

const AccordionItem = ({ dayOfTheWeek, calendarDate }) => {
  return (
    <li className="pb-4 flex justify-between items-center">
      <div className="flex flex-grow">
        <CloudIcon />
        <div className="ml-3">
          <p className="text-sm font-medium">{dayOfTheWeek}</p>
          <p className="text-sm text-gray-500">{calendarDate}</p>
        </div>
      </div>
      <ChevronIcon />
    </li>
  )
}

AccordionItem.propTypes = {
  dayOfTheWeek: PropTypes.string.isRequired,
  calendarDate: PropTypes.string.isRequired
}

export default AccordionItem
