function round_to_precision(x, precision) {
    var y = +x + (precision === undefined ? 0.5 : precision/2);
    return y - (y % (precision === undefined ? 1 : +precision));
}


const currentTemp = parseFloat( document.getElementById("current-high-temp").textContent );
const windSpeed = parseFloat( document.getElementById("wind-speed").textContent );

const windSpeedFactor = Math.pow( windSpeed, 0.16 );

const windChill = 35.74 + (0.6215 * currentTemp) - ( 35.75 * windSpeedFactor ) + ( 0.4275 * currentTemp * windSpeedFactor );
const roundedWindCHill = round_to_precision( windChill, 0.1 );

if( currentTemp <= 50 && windSpeed > 3 ){
    document.getElementById("wind-chill").innerHTML = `${roundedWindCHill} &#176;F`;
}

