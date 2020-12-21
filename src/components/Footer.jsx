import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <div className="text-center">
    <Link to="/" className="btn btn-secondary h-auto text-xs px-2.5 py-1.5">
      <span>Switch Locations</span>
      <svg
        className="w-4 h-4 ml-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
    </Link>
    <p className="text-gray-500 text-xs mt-2">
      Data retrieved from&nbsp;
      <a className="underline" href="https://openweathermap.org/api">
        OpenWeather
      </a>
    </p>
  </div>
)

export default Footer
