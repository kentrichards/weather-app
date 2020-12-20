import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <div className="text-xs text-center">
    <Link
      to="/"
      className="text-green-500 hover:text-green-600 hover:underline"
    >
      Choose another location
    </Link>
    <p className="text-gray-500">
      Data retrieved from&nbsp;
      <a className="underline" href="https://openweathermap.org/api">
        OpenWeather
      </a>
    </p>
  </div>
)

export default Footer
