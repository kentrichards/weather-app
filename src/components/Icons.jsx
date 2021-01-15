import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Weather icons
import CloudIcon from '../icons/wi-cloudy.svg'
import ClearIcon from '../icons/wi-day-sunny.svg'
import SnowIcon from '../icons/wi-snow.svg'
import RainIcon from '../icons/wi-rain.svg'
import DrizzleIcon from '../icons/wi-sprinkle.svg'
import ThunderIcon from '../icons/wi-thunderstorm.svg'
import AtmosphereIcon from '../icons/wi-fog.svg'

// UI icons
import ChevronIcon from '../icons/chevron.svg'
import CloseIcon from '../icons/close.svg'

export const Weather = ({ category, styles }) => {
  const classes = classNames(`icon`, styles)

  switch (category) {
    case 'Clouds':
      return <CloudIcon className={classes} />
    case 'Clear':
      return <ClearIcon className={classes} />
    case 'Snow':
      return <SnowIcon className={classes} />
    case 'Rain':
      return <RainIcon className={classes} />
    case 'Drizzle':
      return <DrizzleIcon className={classes} />
    case 'Thunderstorm':
      return <ThunderIcon className={classes} />
    default:
      return <AtmosphereIcon className={classes} />
  }
}

Weather.propTypes = {
  category: PropTypes.string.isRequired,
  styles: PropTypes.string
}

Weather.defaultProps = {
  styles: ''
}

// chevron.svg
export const Chevron = ({ styles }) => {
  const classes = classNames(`secondary-icon`, styles)
  return <ChevronIcon className={classes} />
}

Chevron.propTypes = {
  styles: PropTypes.string
}

Chevron.defaultProps = {
  styles: ''
}

// close.svg
export const Close = ({ styles }) => {
  const classes = classNames(`h-6 w-6`, styles)
  return <CloseIcon className={classes} />
}

Close.propTypes = {
  styles: PropTypes.string
}

Close.defaultProps = {
  styles: ''
}
