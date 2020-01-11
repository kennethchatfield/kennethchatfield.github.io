const hiddenByDefault = [
    "principle-content-container",
    "principle-description",
    "principle-example-container"
];

const stylesByClass = {
    "principle-title": {
        "box-shadow": "4px 4px 4px rgb(192, 192, 192)"
    }
}
  
function hideElement(className, element){
    console.log('hideElement',{className, element})
    if(hiddenByDefault.includes(className)){
     element.style.display = 'none';
    }
}
function addStylesByClass( className, element ) {
    if(stylesByClass[className]){
    Object.keys(stylesByClass[className]).map(styleAttr => {
        element.style[styleAttr] = stylesByClass[className][styleAttr]
    })
    }
}
  
function initStyles(className){
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        hideElement(className,elements[i]);
        addStylesByClass(className,elements[i]);
    }
}
  
function onInitialization(){
    [...hiddenByDefault, ...Object.keys(stylesByClass)].map(initStyles);
}
  
  window.onload = onInitialization;