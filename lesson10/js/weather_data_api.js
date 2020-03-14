

const htmlToElement = (htmlString) => {
  const template = document.createElement('template');
  htmlString = htmlString.trim();
  template.innerHTML = htmlString;
  return template.content.firstChild;
}

function round_to_precision(x, precision) {
  const y = +x + (precision === undefined ? 0.5 : precision/2);
  const result = y - (y % (precision === undefined ? 1 : + precision ));
  return result;
}

function calculate_wind_chill(params){
  const { temp, speed } = params;
  
  const currentTemp = temp;
  const windSpeed = speed;
  
  
  const windSpeedFactor = Math.pow( windSpeed, 0.16 );
  
  const windChill = 35.74 + (0.6215 * currentTemp) - ( 35.75 * windSpeedFactor ) + ( 0.4275 * currentTemp * windSpeedFactor );
  const roundedWindCHill = round_to_precision( windChill, 0.1 );
  
  if( currentTemp <= 50 && windSpeed > 3 ){
      document.getElementById("current-wind-chill").textContent = roundedWindCHill + "&#176;F";
  } else {
      document.getElementById("current-wind-chill").textContent = "N/A";
  }
}

const getValue = (obj, path) => {
  let object = obj;
  const array =  typeof path === 'string' ? path.split('.') : path;
  array.map(item => {
    object = object[ item ]
  });
  return object;
}

const APIKEY = 'ab77c470222b292dac0b5ace3c31fb06',
  cityId = 5604473,
  targetTime = '18:00:00',
  units = 'imperial',
  date = new Date();

const get_most_recent_item = ({ list }) => list[0];
const getItemByTargetTime = ({ list }) => {

  let item, index = 0;
  while( !item && index < list.length ){
    const dataItem = list[index];
    if( dataItem.dt_txt.includes( targetTime ) ){
      item = dataItem;
    }
    index++
  }
  return item;
}

const get_forecast_items = ( { list } ) => {
  let items = [], index = 0;
  while( index < list.length ){
    const dataItem = list[index];
    if( dataItem.dt_txt.includes( targetTime ) ) items.push( dataItem );
    index++
  }
  return items;
}
const build_forecast = ( forecastItems ) => {
  const container = document.getElementById( "forecast-container-days" );
  const appendToContainer = elementText => {
    const element = htmlToElement( elementText );
    container.appendChild( element );
  }
  build_all = ( forecastItem ) => {
    const elementText = build_forecast_item( forecastItem );
    appendToContainer( elementText );
  }
  return forecastItems.map( build_all )
}
const build_forecast_item = ( forecastItem ) => {
  const { 
    dt_txt,
    main: {
      temp_max
    },
    weather
   } = forecastItem;
   const currentWeather = weather[0];
  const forecastDate = new Date( dt_txt );
  const imagesrc = 'https://openweathermap.org/img/w/' + currentWeather.icon + '.png';
  const desc = currentWeather.description; 
  return (`
    <div class="forecast-day-container">
      <div class="forecast-day">${ days[ forecastDate.getDay() ].slice(0,3) }</div>
      <img class="day-forecast-icon" src=${ imagesrc } alt=${desc}>
      <div class="forecast-temp">${ temp_max } &#176;F</div>
    </div>
  `);
}

const handle_forecast_data = (data) => {
  const forecastItems = get_forecast_items( data );

  build_forecast( forecastItems );
  return data;
}

const get_forecast_data = () => {
  const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=${ cityId }&APPID=${ APIKEY }&units=${ units }`;
    return fetch(apiURL)
      .then((response) => response.json())
}
const get_weather_data = () => {
  const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${ cityId }&APPID=${ APIKEY }&units=${ units }`;
    return fetch(apiURL)
      .then((response) => response.json())
}


const elementIdToFieldNameMap = {
  "current-currently":{
    path: "weather.0.main"
  },
  "current-high-temp": {
    path: "main.temp_max",
    units: String.fromCharCode(176) + " " + "F"
  },
  "current-humidity": {
    path: "main.humidity",
    units: "%"
  },
  "current-wind-speed": {
    path: "wind.speed",
    units: "mph"
  }
};
function set_weather_summary( weatherData ){
  let results = {};
  Object.keys( elementIdToFieldNameMap ).map( elementId => {
    const element = document.getElementById( elementId );
    const value = getValue( weatherData, elementIdToFieldNameMap[ elementId ].path );
    results[ elementId ] = value;
    if( elementIdToFieldNameMap[ elementId ].units ){
      element.textContent = value + " " + elementIdToFieldNameMap[ elementId ].units;
    } else {
      element.textContent = value;
    }
  })
  
  return ( results['current-high-temp'] !== undefined && results['current-wind-speed'] !== undefined ) ? {
    temp: results['current-high-temp'], 
    speed: results['current-wind-speed']
  } : {};
  
}


get_forecast_data()
  .then( handle_forecast_data )
  .then( get_weather_data )
  .then( set_weather_summary )
  .then( calculate_wind_chill )
