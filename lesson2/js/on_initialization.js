
  
function hideElement(className, element){
    if(expandableClasses.includes(className)){
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
        console.log('initStyles',{className, element: elements[i]})
        hideElement(className,elements[i]);
        addStylesByClass(className,elements[i]);
    }
}
  
function onInitialization(){
    [...expandableClasses, ...Object.keys(stylesByClass)].map(initStyles);
}
  
window.onload = fitExampleImagesToPrincipleItemContainer;