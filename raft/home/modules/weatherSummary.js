

class WeatherSummary {
    constructor( parent ) {
      this.id = "weather-summary-container";
      this.parent = parent;
      this.summary = {
        "currently":{
          id: "currently",
          path: "weather.0.main",
          name: "Currently",
          value: 5
        },
        "high-temp": {
          id: "high-temp",
          path: "main.temp_max",
          units:String.fromCharCode(176) + "F",
          name: "High Temp",
          value: 5
        },
        "humidity": {
          id: "humidity",
          path: "main.humidity",
          units: "%",
          name: "Humidity",
          value: 5
        },
        "wind-speed": {
          id: "wind-speed",
          path: "wind.speed",
          units: "mph",
          name: "Wind Speed",
          value: 5
        }
      }
    }
  
    create() {
      this.element = document.createElement('div');
      this.element.id = this.id;

      this.createWidget();

      this.parent.append(this.element);
    }
    
    createWidget(){
      this.widget = document.createElement('div');
      this.widget.classList.add("widget")
      const caption = document.createElement('div');
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

  }
  
  export { WeatherSummary };
  