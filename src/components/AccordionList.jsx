import React from 'react'

import AccordionItem from './AccordionItem'

const AccordionList = () => (
  <ul className="divide-y divide-gray-200">
    <AccordionItem dayOfTheWeek="Sunday" calendarDate="December 20th, 2020" />
    <AccordionItem dayOfTheWeek="Monday" calendarDate="December 21st, 2020" />
    <AccordionItem dayOfTheWeek="Tuesday" calendarDate="December 22nd, 2020" />
  </ul>
)

export default AccordionList
