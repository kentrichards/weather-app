import React from 'react'
import { Link } from 'gatsby'

const weather = () => (
  <div className="max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto flex flex-col space-y-6">
      <div className="p-4 mt-4 w-full h-64 shadow rounded bg-gray-900">
        <div className="h-full flex justify-between">
          <div className="h-full flex flex-col justify-between z-10">
            <div>
              <p className="text-white font-semibold text-2xl">Middleton</p>
              <p className="text-gray-300 text-sm"> December 19th, 2020</p>
            </div>
            <div>
              <p className="text-yellow-300 text-8xl">21°C</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end">
            <svg
              className="text-gray-800 h-full z-0"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              fill="currentColor"
            >
              <g>
                <path d="m184.743 95.179c8.284 0 15-6.716 15-15v-30.205c0-8.284-6.716-15-15-15s-15 6.716-15 15v30.205c0 8.284 6.716 15 15 15z" />
                <path d="m48.661 150.086-26.159-15.103c-7.175-4.144-16.349-1.684-20.49 5.49-4.142 7.175-1.684 16.349 5.49 20.49l26.159 15.103c7.158 4.134 16.339 1.701 20.49-5.49 4.142-7.175 1.684-16.349-5.49-20.49z" />
                <path d="m33.661 315.881-26.159 15.102c-7.174 4.142-9.632 13.315-5.49 20.49 4.163 7.21 13.35 9.614 20.49 5.49l26.159-15.103c7.174-4.142 9.632-13.315 5.49-20.49-4.142-7.173-13.314-9.634-20.49-5.489z" />
                <path d="m335.824 176.066 26.159-15.103c7.174-4.142 9.632-13.315 5.49-20.49-4.142-7.174-13.314-9.634-20.49-5.49l-26.159 15.103c-7.174 4.142-9.632 13.315-5.49 20.49 4.163 7.21 13.35 9.614 20.49 5.49z" />
                <path d="m398.906 267.268c-17.171-42.432-58.823-70.488-104.645-70.29-18.777-41.809-60.796-71.005-109.519-71.005-66.168 0-119.999 53.832-119.999 120 0 42.451 22.168 79.809 55.525 101.147-35.567 56.188 4.873 129.853 71.41 129.853 236.012-.246 223.098.604 227.208-.672 52.427-5.913 93.114-50.379 93.114-104.327 0-61.607-52.642-109.441-113.094-104.706zm-304.163-21.294c0-49.626 40.374-90 90-90 33.465 0 62.705 18.37 78.211 45.547-47.399 13.889-80.31 57.162-80.838 106.81-14.9 1.635-28.949 7.202-41.049 16.301-27.605-15.389-46.324-44.874-46.324-78.658zm318.469 200.742c-5.343.434-141.464.182-221.534.258-49.461 0-73.564-61.31-36.763-94.916 11.046-10.087 25.755-15.454 41.783-13.996 9.669.872 17.548-7.493 16.213-17.02-6.954-49.631 31.479-94.068 81.689-94.068 37.144 0 69.882 25.002 79.612 60.801 2.08 7.649 9.753 12.356 17.512 10.755 46.753-9.669 90.276 26.071 90.276 73.444 0 38.756-30.215 71.587-68.788 74.742z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <h2 className="title">This Week</h2>
      <ul className="divide-y divide-gray-200">
        <li className="pb-4 flex justify-between items-center">
          <div className="flex flex-grow">
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <div className="ml-3">
              <p className="text-sm font-medium">Sunday</p>
              <p className="text-sm text-gray-500">December 20th, 2020</p>
            </div>
          </div>
          <svg
            className="w-6 h-6 flex-shrink-0 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </li>

        <li className="py-4 flex justify-between items-center">
          <div className="flex flex-grow">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div className="ml-3">
              <p className="text-sm font-medium">Monday</p>
              <p className="text-sm text-gray-500">December 21st, 2020</p>
            </div>
          </div>
          <svg
            className="w-6 h-6 flex-shrink-0 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </li>

        <li className="py-4 flex justify-between items-center">
          <div className="flex flex-grow">
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <div className="ml-3">
              <p className="text-sm font-medium">Tuesday</p>
              <p className="text-sm text-gray-500">December 22nd, 2020</p>
            </div>
          </div>
          <svg
            className="w-6 h-6 flex-shrink-0 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </li>
      </ul>
      <div className="text-xs text-center">
        <Link
          className="text-blue-500 hover:text-blue-600 hover:underline"
          to="/"
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
    </div>
  </div>
)

export default weather
