

const fitToContainerWidth = (element, container, padding) => {
    const width = container.offsetWidth - ( (padding||0) * 2 )
    element.style.width = width + 'px'
}

const fitExampleImagesToPrincipleItemContainer = () => {
    const containers = document.getElementsByClassName('principle-item');
    const elements = document.getElementsByClassName('mobile-example-image');
    for (let i = 0; i < elements.length; i++) {
        fitToContainerWidth(elements[i], containers[i], 20)
    }
}

window.onresize = fitExampleImagesToPrincipleItemContainer;

