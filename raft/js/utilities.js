
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