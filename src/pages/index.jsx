import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const Index = () => (
  <div className="min-h-screen flex sm:items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <Helmet>
      <meta charSet="utf-8" />
      <title>weather-app</title>
    </Helmet>
    <div className="max-w-md w-full space-y-4">
      <h1 className="title">weather-app</h1>
      <input
        disabled
        type="text"
        name="location"
        id="location"
        className="h-10 text-gray-500 focus:ring-green-500 focus:border-green-500 block w-full border-gray-300 rounded-md"
        value="Halifax, Nova Scotia"
      />
      <div>
        <h2 className="font-semibold">Units</h2>
        <div className="sm:flex justify-between items-center">
          <div>
            <div className="flex space-x-4 sm:block sm:space-x-0">
              <div className="flex items-center">
                <input
                  className="cursor-pointer text-green-500 focus:ring-green-500"
                  type="radio"
                  name="unit-select"
                  id="metric"
                  value="metric"
                  checked
                />
                <label className="ml-2 cursor-pointer" htmlFor="metric">
                  Metric
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="cursor-pointer text-green-500 focus:ring-green-500"
                  type="radio"
                  name="unit-select"
                  id="imperial"
                  value="imperial"
                />
                <label className="ml-2 cursor-pointer" htmlFor="imperial">
                  Imperial
                </label>
              </div>
            </div>
          </div>
          <Link
            to="/weather"
            className="btn btn-primary mt-4 sm:mt-0 w-full sm:w-auto"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Index
