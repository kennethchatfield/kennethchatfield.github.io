






const handleData = data => {
    console.table( data.prophets )

    const { prophets } = data;

    for (let i = 0; i < prophets.length; i++ ) {
        const {
            name,
            lastname,
            imageurl,
            birthdate,
            birthplace,
            order
        } = prophets[i];
        const fullName = name + ' ' + lastname;
        let card = document.createElement('section'),
            h2 = document.createElement('h2'),
            birthDayDiv = document.createElement('div'),
            birthPlaceDiv = document.createElement('div'),
            image = document.createElement('img');


        birthDayDiv.className = "birth-date"
        birthPlaceDiv.className = "birth-place"

        h2.textContent = fullName;
        image.setAttribute('src', imageurl);
        image.setAttribute('alt', `${fullName} - ${ order }`);
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
            console.log('response::',response);
            throw new Error(`Response failed with Status Code: ${ response.status }`)
        }
    })
    .then( handleData )
    .catch( err => {
        console.log("err::", err);
    })