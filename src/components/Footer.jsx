import React from 'react'
import { Link } from 'gatsby'

import Icons from './Icons'

const Footer = () => (
  <div className="text-center">
    <Link to="/" className="btn btn-secondary h-auto text-xs px-2.5 py-1.5">
      <span>Switch Locations</span>
      <Icons.Switch />
    </Link>
    <p className="text-gray-500 text-xs my-2">
      Data retrieved from&nbsp;
      <a className="underline" href="https://openweathermap.org/api">
        OpenWeather
      </a>
    </p>
  </div>
)

export default Footer
