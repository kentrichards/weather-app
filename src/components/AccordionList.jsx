import React from 'react'

import AccordionItem from './AccordionItem'

const AccordionList = () => (
  <div>
    <h2 className="title">This Week</h2>
    <ul className="divide-y divide-gray-200">
      <AccordionItem dayOfTheWeek="Sunday" calendarDate="December 20th, 2020" />
      <AccordionItem dayOfTheWeek="Monday" calendarDate="December 21st, 2020" />
      <AccordionItem
        dayOfTheWeek="Tuesday"
        calendarDate="December 22nd, 2020"
      />
      <AccordionItem
        dayOfTheWeek="Wednesday"
        calendarDate="December 23rd, 2020"
      />
    </ul>
  </div>
)

export default AccordionList
