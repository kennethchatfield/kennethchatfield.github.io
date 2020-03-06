





const getProphetImg = ({ imageurl, fullName, order }) => {

    let image = document.createElement('img'),
        picture = document.createElement('picture');
    image.className = "prophet-photo"
    image.setAttribute('data-src', imageurl);
    image.setAttribute('src', '../lesson7/images/placeholder-image.jpg');
    image.setAttribute('alt', `${fullName} - ${ order }`);
    picture.appendChild(image);
    return picture;
}

const handleData = data => {
    const { prophets } = data;

    for (let i = 0; i < prophets.length; i++ ) {
        const {
            name,
            lastname,
            imageurl,
            birthdate,
            birthplace,
            order,
            photo
        } = prophets[i];
        const fullName = name + ' ' + lastname;
        let card = document.createElement('section'),
            h2 = document.createElement('h2'),
            birthDayDiv = document.createElement('div'),
            birthPlaceDiv = document.createElement('div'),
            image = getProphetImg({ ...prophets[i], fullName});


        birthDayDiv.className = "birth-date"
        birthPlaceDiv.className = "birth-place"

        h2.textContent = fullName;
        birthDayDiv.innerHTML = `Date of Birth: ${ birthdate }`;
        birthPlaceDiv.innerHTML = `Place of Birth: ${ birthplace }`;

        card.appendChild(h2);
        card.appendChild(birthDayDiv);
        card.appendChild(birthPlaceDiv);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
};



const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

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