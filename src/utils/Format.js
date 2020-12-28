const temperature = (temp, scale) => {
  const unit = scale === 'celsius' ? '°C' : '°F'
  return `${Math.round(temp)}${unit}`
}

const precipitation = decimal => `${decimal * 100}%`

const humidity = value => `${value}%`

const hour = timestamp =>
  new Date(timestamp * 1000)
    .toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
    .toLocaleLowerCase()

const windSpeed = value =>
  // Metric wind speed is provided as m/s, so we need to convert it to km/h
  `${Math.round(value * 3.6)} km/h`

const windDirection = degrees => {
  let direction = ''

  switch (true) {
    case degrees >= 348.75 || degrees < 11.25:
      direction = 'N'
      break
    case degrees >= 11.25 && degrees < 33.75:
      direction = 'NNE'
      break
    case degrees >= 33.75 && degrees < 56.25:
      direction = 'NE'
      break
    case degrees >= 56.25 && degrees < 78.75:
      direction = 'ENE'
      break
    case degrees >= 78.75 && degrees < 101.25:
      direction = 'E'
      break
    case degrees >= 101.25 && degrees < 123.75:
      direction = 'ESE'
      break
    case degrees >= 123.75 && degrees < 146.25:
      direction = 'SE'
      break
    case degrees >= 146.25 && degrees < 168.75:
      direction = 'SSE'
      break
    case degrees >= 168.75 && degrees < 191.25:
      direction = 'S'
      break
    case degrees >= 191.25 && degrees < 213.75:
      direction = 'SSW'
      break
    case degrees >= 213.75 && degrees < 236.25:
      direction = 'SW'
      break
    case degrees >= 236.25 && degrees < 258.75:
      direction = 'WSW'
      break
    case degrees >= 258.75 && degrees < 281.25:
      direction = 'W'
      break
    case degrees >= 281.25 && degrees < 303.75:
      direction = 'WNW'
      break
    case degrees >= 303.75 && degrees < 326.25:
      direction = 'NW'
      break
    default:
      direction = 'NNW'
  }

  return `${direction} (${degrees}°)`
}

export default {
  temperature,
  precipitation,
  humidity,
  hour,
  windSpeed,
  windDirection
}
