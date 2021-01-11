import React from 'react'
import PropTypes from 'prop-types'

import AccordionItem from './AccordionItem'

const AccordionList = ({ weeklyWeather }) => (
  <div>
    <h2 className="title">This Week</h2>
    <ul className="divide-y divide-gray-200">
      <AccordionItem dailyWeather={weeklyWeather[0]} />
      <AccordionItem dailyWeather={weeklyWeather[1]} />
      <AccordionItem dailyWeather={weeklyWeather[2]} />
      <AccordionItem dailyWeather={weeklyWeather[3]} />
      <AccordionItem dailyWeather={weeklyWeather[4]} />
    </ul>
  </div>
)

AccordionList.propTypes = {
  weeklyWeather: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number.isRequired
    })
  ).isRequired
}

export default AccordionList
