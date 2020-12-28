import React from 'react'
import PropTypes from 'prop-types'

import CloudIcon from '../icons/wi-cloudy.svg'
import ClearIcon from '../icons/wi-day-sunny.svg'
import SnowIcon from '../icons/wi-snow.svg'
import RainIcon from '../icons/wi-rain.svg'
import DrizzleIcon from '../icons/wi-sprinkle.svg'
import ThunderstormIcon from '../icons/wi-thunderstorm.svg'
import AtmosphereIcon from '../icons/wi-fog.svg'

const WeatherIcon = ({ category, styles }) => {
  switch (category) {
    case 'Clouds':
      return <CloudIcon className={styles} />
    case 'Clear':
      return <ClearIcon className={styles} />
    case 'Snow':
      return <SnowIcon className={styles} />
    case 'Rain':
      return <RainIcon className={styles} />
    case 'Drizzle':
      return <DrizzleIcon className={styles} />
    case 'Thunderstorm':
      return <ThunderstormIcon className={styles} />
    default:
      return <AtmosphereIcon className={styles} />
  }
}

WeatherIcon.propTypes = {
  category: PropTypes.string.isRequired,
  styles: PropTypes.string
}

WeatherIcon.defaultProps = {
  styles: 'h-10 w-10'
}

export default WeatherIcon
