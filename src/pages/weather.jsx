import React from 'react'

import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AccordionList from '../components/AccordionList'

const weather = () => (
  <div className="max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto flex flex-col space-y-6">
      <Hero />
      <AccordionList />
      <Footer />
    </div>
  </div>
)

export default weather
