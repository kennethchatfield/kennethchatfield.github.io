
export const htmlToElement = (htmlString) => {
    const template = document.createElement('template');
    htmlString = htmlString.trim();
    template.innerHTML = htmlString;
    return template.content.firstChild;
};

export const unique = (items) => {
    let array = [];
    items.map( item => {
        if( !array.includes(item)) array.push(item);
    })
    return array;
};

export function createSelectOption(optionData, parent, className){
    const {id, name} = optionData;
    const option = document.createElement('option');
    if(className) option.classList.add(className);
    option.value = id;
    option.innerHTML = name;

    if( parent ) parent.appendChild(option);
    return option;
}

export function createSelectOptions(options, parent, className){
    return options.map( option => {
        return createSelectOption( option, parent, className );
    });
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export const groupByCategory = ( list, listByCategory ) =>  (
    list.reduce( (results, interest ) => {
        Object.keys( listByCategory ).map( categoryId => {
            if( listByCategory[ categoryId ].includes( interest ) ){
                if( !results[ categoryId ] ) results[ categoryId ] = [];
                results[ categoryId ].push( interest );
            }
        });
        return results;
    }, {})
);

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomItem = (list) => list[Math.floor(Math.random() * list.length)];
export const getRandomItems = ( list, count ) => {
    let random = [];
    for(let i = 0; i< count; i++){
        let randomItem = getRandomItem( list );
        while ( random.includes( randomItem ) ){
            randomItem = getRandomItem( list );
        }
        random.push( randomItem )
    }
    return random;
};

export const getRandomPhoneNumber = () => formatPhoneNumber( Math.floor(100000000 + Math.random() * 900000000) + '' );
export const formatPhoneNumber = ( num ) => (
    num.split("").reduce((results, number, index) => {
        if( num.length > 10 ){
            if( index > 0 && index < 9 && (index + 2) % 3 === 0  ) results += "-";
        } else {
            if( index > 0 && index < 7 && index % 3 === 0  ) results += "-";
        }
        results += number;
        return results;
    }, '')
);