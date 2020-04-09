
const getValue = (obj, path) => {
  let object = obj;
  const array =  typeof path === 'string' ? path.split('.') : path;
  array.map(item => {
    object = object[ item ]
  });
  return object;
}


class WeatherSummary {
    constructor( parent ) {
      this.id = "weather-summary-container";
      this.parent = parent;
      this.summary = {
        "currently":{
          id: "currently",
          path: "weather.0.main",
          name: "Currently"
        },
        "high-temp": {
          id: "high-temp",
          path: "main.temp_max",
          units:String.fromCharCode(176) + "F",
          name: "High Temp"
        },
        "humidity": {
          id: "humidity",
          path: "main.humidity",
          units: "%",
          name: "Humidity"
        },
        "wind-speed": {
          id: "wind-speed",
          path: "wind.speed",
          units: "mph",
          name: "Wind Speed"
        }
      }
      this.areaId = 4092267;
      this.APPID = "ab77c470222b292dac0b5ace3c31fb06";
      this.apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${ this.areaId }&APPID=${ this.APPID }&units=imperial`;
    }
  
    create() {
      this.element = document.createElement('div');
      this.element.id = this.id;

      this.createWidget();

      this.parent.append(this.element);
      this.fetchWeatherData();
    }
    
    createWidget(){
      this.widget = document.createElement('div');
      this.widget.classList.add("widget")
      const caption = document.createElement('h3');
      caption.innerHTML = "Weather Summary";
      caption.classList.add("caption");

      this.createTable();

      this.widget.appendChild( caption );
      this.widget.appendChild( this.table );
      this.element.appendChild( this.widget );

    }
    createTable(){
      this.table = document.createElement('div');
      this.table.classList.add("table");
      const fieldColumn = document.createElement('div');
      fieldColumn.classList.add("column");
      const valueColumn = document.createElement('div');
      valueColumn.classList.add("column");
      Object.values(this.summary).map( info => {
        const fieldCell = document.createElement('div');
        fieldCell.classList.add("cell");
        fieldCell.classList.add("field");
        fieldCell.innerHTML = info.name;
        fieldColumn.appendChild( fieldCell );
        const valueCell = document.createElement('div');
        valueCell.classList.add("cell");
        valueCell.classList.add("value");
        valueCell.innerHTML = info.value || "N/A";
        if(info.value !== undefined && info.units ){
          const units = document.createElement("span");
          units.classList.add("units")
          units.textContent = info.units;
          valueCell.appendChild( units );
        }
        this.summary[info.id].element = valueCell;
        valueColumn.appendChild( valueCell );
      } )
      this.table.appendChild( fieldColumn );
      this.table.appendChild( valueColumn );
    }
    fetchWeatherData() {
      return fetch(this.apiURL)
      .then((response) => response.json())
      .then( weatherData => {
        Object.values( this.summary ).map( summaryItem => {
          const value = getValue( weatherData, summaryItem.path );
          this.summary[ summaryItem.id ].value = value;
          summaryItem.element.innerHTML = value;
          if(summaryItem.value !== undefined && summaryItem.units ){
            const units = document.createElement("span");
            units.classList.add("units")
            units.textContent = summaryItem.units;
            summaryItem.element.appendChild( units );
          }

        })
      })
    }

  }
  
  export { WeatherSummary };
  