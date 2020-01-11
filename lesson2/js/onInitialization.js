const hiddenByDefault = [
    "principle-content-container",
    "principle-description",
    "principle-example-container"
  ];
  
  function hideElement(element){
    element.style.display = 'none';
  
  }
  
  function initHiddenStyles(className){
    const elementsToHide = document.getElementsByClassName(className);
    for (let i = 0; i < elementsToHide.length; i++) {
      hideElement(elementsToHide[i])
    }
  }
  
  function onInitialization(){
    hiddenByDefault.map(initHiddenStyles);
  }
  
  window.onload = onInitialization;