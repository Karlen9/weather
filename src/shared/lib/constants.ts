import fogNight32 from 'shared/assets/weather/night/32/fog_night_32.png'
import sunnyNight32 from 'shared/assets/weather/night/32/sunny_night_32.png'
import rainNight32 from 'shared/assets/weather/night/32/rain_night_32.png'
import snowNight32 from 'shared/assets/weather/night/32/snow_night_32.png'
import cloudyNight32 from 'shared/assets/weather/night/32/cloudy_night_32.png'

import fogNight512 from 'shared/assets/weather/night/512/fog_night_512.png'
import sunnyNight512 from 'shared/assets/weather/night/512/sunny_night_512.png'
import rainNight512 from 'shared/assets/weather/night/512/rain_night_512.png'
import snowNight512 from 'shared/assets/weather/night/512/snow_night_512.png'
import cloudyNight512 from 'shared/assets/weather/night/512/cloudy_night_512.png'

import fog32 from 'shared/assets/weather/day/32/fog_32.png'
import cloudy32 from 'shared/assets/weather/day/32/cloudy_32.png'
import rain32 from 'shared/assets/weather/day/32/rain_32.png'
import snow32 from 'shared/assets/weather/day/32/snow_32.png'
import sunny32 from 'shared/assets/weather/day/32/sunny_32.png'
import overcast32 from 'shared/assets/weather/day/32/overcast_32.png'
import mist32 from 'shared/assets/weather/day/32/mist_32.png'

import fog512 from 'shared/assets/weather/day/512/fog_512.png'
import cloudy512 from 'shared/assets/weather/day/512/cloudy_512.png'
import rain512 from 'shared/assets/weather/day/512/rain_512.png'
import snow512 from 'shared/assets/weather/day/512/snow_512.png'
import sunny512 from 'shared/assets/weather/day/512/sunny_512.png'
import overcast512 from 'shared/assets/weather/day/512/overcast_512.png'
import mist512 from 'shared/assets/weather/day/512/mist_512.png'

export const conditions: Record<string, string> = {
  Clear: 'Clear',
  Overcast: 'Overcast',
  'Partly cloudy': 'Partly cloudy',
  Cloudy: 'Cloudy',
  Rain: 'Rain',
  Drizzle: 'Drizzle',
  Snow: 'Snow',
  Stormy: 'Stormy',
  Tornadoes: 'Tornadoes',
  Thundersnows: 'Thundersnows',
  Fog: 'Fog',
  Hurricanes: 'Hurricanes',
  Sandstorms: 'Sandstorms',
  Hailstorm: 'Hailstorm',
  Mist: 'Mist',
  'Light snow': 'Light snow'
}

export const iconsNight512: Record<string, string> = {
  Clear: sunnyNight512,
  Overcast: cloudyNight512,
  'Partly cloudy': cloudyNight512,
  Cloudy: cloudyNight512,
  Rain: rainNight512,
  Drizzle: rainNight512,
  Snow: snowNight512,
  Fog: fogNight512,
  Mist: mist512,
  'Light snow': snowNight512
}

export const iconsNight32: Record<string, string> = {
  Clear: sunnyNight32,
  Overcast: cloudyNight32,
  'Partly cloudy': cloudyNight32,
  Cloudy: cloudyNight32,
  Rain: rainNight32,
  Drizzle: rainNight32,
  Snow: snowNight32,
  Fog: fogNight32,
  Mist: mist32,
  'Light snow': snowNight32
}

export const iconsDay512: Record<string, string> = {
  Clear: sunny512,
  Overcast: overcast512,
  'Partly cloudy': cloudy512,
  Cloudy: cloudy512,
  Rain: rain512,
  Drizzle: rain512,
  Snow: snow512,
  Fog: fog512,
  Mist: mist512,
  'Light snow': snow512
}

export const iconsDay32: Record<string, string> = {
  Clear: sunny32,
  Overcast: overcast32,
  'Partly cloudy': cloudy32,
  Cloudy: cloudy32,
  Rain: rain32,
  Drizzle: rain32,
  Snow: snow32,
  Fog: fog32,
  Mist: mist32,
  'Light snow': snow32
}

export const windDirection: Record<string, string> = {
  E: 'East',
  W: 'West',
  N: 'North',
  S: 'South',
  NE: 'NorthEast',
  NW: 'NorthWest',
  SE: 'SouthEast',
  SW: 'SouthWest'
}
