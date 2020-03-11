
const cardsContainer = document.querySelector('div.town-cards');

const getTownImg = ({ photo }) => {
    const imgPath = `images/${ photo }`;
    let image = document.createElement('img'),
        picture = document.createElement('picture');
    image.className = "town-photo"
    image.setAttribute('data-src', imgPath);
    image.setAttribute('src', 'images/placeholder-image.jpg');
    image.setAttribute('alt', photo.replace(".jpg", " town photo"));
    image.onload = windowSize;
    picture.appendChild(image);
    return picture;
}
const getTownHeader = ({name, motto, ...townData}) => {
    let townHeader = document.createElement('div'),
        nameElem = document.createElement('h2'),
        mottoElem = document.createElement('p');

    townHeader.className = 'town-header';
    nameElem.className = 'town-name';
    mottoElem.className = 'town-motto';

    nameElem.textContent = name;
    mottoElem.innerHTML = motto;


    const townInfo = getTownInfo(townData);
    townHeader.appendChild(nameElem);
    townHeader.appendChild(mottoElem);
    townHeader.appendChild(townInfo);

    return townHeader;
}

const bodyAttributesLabels = {
    yearFounded: "Year Founded",
    currentPopulation: "Population",
    averageRainfall: "Annual Rain Fall"
};
const getTownInfo = ( townData ) => {
    let townInfo = document.createElement('div');
    townInfo.className = 'town-info';
    const infoItems = Object.keys( bodyAttributesLabels ).map( infoField => {
        let infoItem = document.createElement('div'),
            itemLabel = document.createElement('div'),
            itemValue = document.createElement('div');
        infoItem.className = "info-item";
        itemLabel.className = "info-label";
        itemValue.className = "info-value";
        itemLabel.innerHTML = bodyAttributesLabels[ infoField ] + ":";
        itemValue.innerHTML = townData[ infoField ];
        infoItem.appendChild(itemLabel);
        infoItem.appendChild(itemValue);
        return infoItem;
    });
    infoItems.map( element => townInfo.appendChild( element ) )
    return townInfo;
}
const getTownBody = (townData) => {
    let townBody = document.createElement('div');
    townBody.className = "town-body";
    const townImg = getTownImg( townData );
    townBody.appendChild( townImg );
    return townBody;
}

const getTownMarkUp = townData => {
    let card = document.createElement('div');
    card.className = "town-card";
    const cardHeader = getTownHeader( townData );
    const cardBody = getTownBody( townData );
    card.appendChild( cardHeader );
    card.appendChild( cardBody );
    return card;
}

const appendToCards = cardElement => cardsContainer.appendChild(cardElement);


const displayTowns = [
    "Fish Haven",
    "Soda Springs",
    "Preston"
];

const handleData = data => {
    const { towns } = data;

    towns.filter( ({name}) => displayTowns.includes(name))
        .map( getTownMarkUp )
        .map( appendToCards );

}



const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then((response) => {
        if( response.status === 200 ){
            return response.json()
        } else {
            throw new Error(`Response failed with Status Code: ${ response.status }`)
        }
    })
    .then( handleData )
    .then( progressiveLoad )
    .catch( err => {
        console.error(err)
    })


const windowSize = ( ) => {
    
        const imgHeight = document.querySelectorAll("img.town-photo")[0].offsetHeight;
        document.querySelectorAll("div.town-header").forEach( element => {
            if( window.innerWidth < 600 || window.innerWidth > 899 ){
                element.style.height = imgHeight + "px"
            } else {
                element.style.removeProperty("height");
            }
            
        })
}

window.onresize = windowSize;
window.onload = windowSize;
    