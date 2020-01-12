const targetMapping = {
    "principle-title": "principle-content-container",
    "desciption-title": "principle-description",
    "example-title": "principle-example-container"
  }



const onShowStylesByActionClass = {
    "principle-title":{
        "principle-title":{
            "box-shadow": "none"
        }
    }
}
const onHideStylesByActionClass = {
    "principle-title":{
        "principle-title":{
            "box-shadow": "4px 4px 4px rgb(192, 192, 192)"
        }
    }
}

function executeActionClassReaction(actionClassReaction, index){
    const targets = Object.keys(actionClassReaction);
    targets.map(targetCls => {
        const targetElem = document.getElementsByClassName(targetCls)[index];
        const stylesUpdate = actionClassReaction[targetCls]
        const styleAttrs = Object.keys(stylesUpdate);
        styleAttrs.map( attr => {
            console.log('targetElem::',targetElem)
            targetElem.style[attr] = stylesUpdate[attr];
        })
    })
}

function executeInternalEvent({
    targetElement, 
    actionElement, 
    targetClass, 
    actionClass, 
    index,
    nextEvent
}){
    let actionClassReaction;
    if( nextEvent === 'onShow'){
        actionClassReaction = onShowStylesByActionClass[actionClass];
        onShow(targetElement)
    } else if( nextEvent === 'onHide'){
        actionClassReaction = onHideStylesByActionClass[actionClass];
        onHide(targetElement)
    }
    console.log('actionClassReaction:::',actionClassReaction)
    if( actionClassReaction ){
        executeActionClassReaction(actionClassReaction, index)
    }
}

function onShow(targetElement, actionElement, targetClass, actionClass, index){
    targetElement.style = {};
    // const actionClassStyles = onShowStylesByActionClass[actionClass];
    // console.log('actionClassStyles::',actionClassStyles)
    // if(actionClassStyles){
    //     const targets = Object.keys(actionClassStyles);
    //     targets.map(targetCls => {
    //         const targetElem = document.getElementsByClassName(targetCls)[index];
    //         const stylesUpdate = actionClassStyles[targetCls]
    //         const styleAttrs = Object.keys(stylesUpdate);
    //         styleAttrs.map( attr => {
    //             console.log('targetElem::',targetElem)
    //             targetElem.style[attr] = stylesUpdate[attr];
    //         })
    //     })
    // }
}
function onHide(targetElement, actionElement, targetClass, actionClass, index){
    targetElement.style.display = "none";
    // const actionClassStyles = onHideStylesByActionClass[actionClass];
    // if(actionClassStyles){
    //     const targets = Object.keys(actionClassStyles);
    //     targets.map(targetCls => {
    //         const targetElem = targetCls === actionClass ? actionElement :document.getElementsByClassName(targetCls)[index];
    //         const stylesUpdate = actionClassStyles[targetCls]
    //         const styleAttrs = Object.keys(stylesUpdate);
    //         styleAttrs.map( attr => {
    //             targetElem.style[attr] = stylesUpdate[attr];
    //         })
    //     })
    // }
}
function toggleDisplay(className, index){
    const actionElement = document.getElementsByClassName(className)[index];
    const targetClass = targetMapping[className];
    console.log({targetClass,index});
    const targetElement = document.getElementsByClassName(targetClass)[index];
    console.log(targetElement);
    console.log('targetElement.style.display', targetElement.style.display);
    if( targetElement.style.display === "none"){
        // targetElement.style = {};
        executeInternalEvent({
            targetElement,
            actionElement,
            targetClass,
            actionClass: className,
            index,
            nextEvent: 'onShow'
        })
        // onShow(targetElement,actionElement,targetClass,className,index)
    } else {
        executeInternalEvent({
            targetElement,
            actionElement,
            targetClass,
            actionClass: className,
            index,
            nextEvent: 'onHide'
        })
        // onHide(targetElement,actionElement,targetClass,className,index)
        // targetElement.style.display = "none"
    }

}