
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
}