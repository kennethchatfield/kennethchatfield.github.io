const targetMapping = {
    "principle-title": "principle-content-container",
    "desciption-title": "principle-description",
    "example-title": "principle-example-container"
  }
  
  function toggleDisplay(className, index){
    const targetClass = targetMapping[className];
    console.log({targetClass,index});
    const targetElement = document.getElementsByClassName(targetClass)[index];
    console.log(targetElement);
    let display = targetElement.style.display;
    if( targetElement.style.display === "none"){
      targetElement.style = {}
    } else {
      targetElement.style = {
        display: "none"
      };
    }
  
  }