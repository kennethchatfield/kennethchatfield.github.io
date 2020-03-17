
const get_active_town = ({ towns }) => {
    if( towns ){
        return towns.filter( town => town.name === options.name )[0]
    }

}

const get_town_info = () => {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    return fetch(requestURL)
        .then((response) => {
            if( response.status === 200 ){
                return response.json()
            } else {
                throw new Error(`Response failed with Status Code: ${ response.status }`)
            }
        })
        .then( get_active_town )
};

const parse_town_events = ({events}) => events;

const get_town_events = () => {
    return get_town_info()
        .then( parse_town_events )
}