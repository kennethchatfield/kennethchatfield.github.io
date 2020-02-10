


const getActiveElement = () => {
    const idActiveElement = document.getElementById('active-element').value;
    return document.getElementById(idActiveElement);
}
const getActiveIndex = () => {
    const idActiveElement = document.getElementById('active-element').value;
    const activeIndexStr = idActiveElement.split("-")[1];
    return parseInt( activeIndexStr );
}

const getActiveByType = ( type ) => {
    const activeIndex = getActiveIndex();
    const activeId = `${type}-${activeIndex}`;
    const activeElement = document.getElementById(activeId);
    return activeElement;
}

const updateTrackMessage = (text, color) => {
    color = color || "black";
    const messageContainer = document.getElementById("track-message-container");
    const message = document.getElementById("track-message");
    messageContainer.style.display = "block";
    message.style.color = color;
    message.innerHTML = text;
    
}

const isWinner = (lane, car) => {
    const laneBounds = lane.getBoundingClientRect();
    const carBounds = car.getBoundingClientRect();
    if(carBounds.right >= laneBounds.width - 10 ){
        const winnerName = car.getAttribute("name");
        updateTrackMessage(`${winnerName} is the Winner!`, "green")
    }
};
const onChangeAttributes = () => {
    const activeCar = getActiveByType("car");
    const activeLane = getActiveByType("lane");
    isWinner(activeLane, activeCar);
}


// document.forms["attribute"] === this.form
// background-color => backgroundColor
const changeAttr = (form) => {

    const formName = form.name;
    const attrName = form.attribute_name.value;
    const attrValue = form.attribute_value.value;
    const activeElement = getActiveElement();

    if( formName === 'style'){
        const camelizedAttrName = camelize(attrName);
        activeElement.style[camelizedAttrName] = attrValue;
    } else {
        activeElement.setAttribute(attrName, attrValue);
    }
    onChangeAttributes();
}