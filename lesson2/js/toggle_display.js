

function executeActionClassReaction(actionClassReaction, index){
    const targets = Object.keys(actionClassReaction);
    targets.map(targetCls => {
        const targetElem = document.getElementsByClassName(targetCls)[index];
        const stylesUpdate = actionClassReaction[targetCls]
        const styleAttrs = Object.keys(stylesUpdate);
        styleAttrs.map( attr => {
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
    action
}){
    let actionClassReaction;
    if( action === 'show'){
        actionClassReaction = onShowStylesByActionClass[actionClass];
        onShow(targetElement)
    } else if( action === 'hide'){
        actionClassReaction = onHideStylesByActionClass[actionClass];
        onHide(targetElement)
    }
    if( actionClassReaction ){
        executeActionClassReaction(actionClassReaction, index)
    }
}

function onShow(targetElement){
    targetElement.style = {};
}
function onHide(targetElement){
    targetElement.style.display = "none";
}

function toggleDisplayAll(action){
    console.log('action',action)
    console.log('expandableActionClasses',expandableActionClasses)
    if( action ){
        const principleItemElements = document.getElementsByClassName('principle-item');
        for (let i = 0; i < principleItemElements.length; i++) {
            expandableActionClasses.map( actionCls => toggleDisplay(actionCls, i, action))
        }
    }
}

function toggleDisplay(className, index, action){
    const actionElement = document.getElementsByClassName(className)[index];
    const targetClasses = expandableTargetMapping[className];
    targetClasses.map( targetClass =>{
        const targetElement = document.getElementsByClassName(targetClass)[index];
        if(!action ){
            if( targetElement.style.display === "none") action = 'show'; 
            else action = 'hide';
        }
        if( action ){
            executeInternalEvent({
                targetElement,
                actionElement,
                targetClass,
                actionClass: className,
                index,
                action
            })
        }
    })
    

}