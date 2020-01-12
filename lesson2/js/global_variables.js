
const stylesByClass = {
    "principle-title-container": {
        "box-shadow": "4px 4px 4px rgb(192, 192, 192)"
    }
}

const expandableClasses = [
    "principle-content-container",
    "principle-description",
    "principle-example-container"
];



const expandableTargetMapping = {
    "principle-title-container": "principle-content-container",
    "description-title-container": "principle-description",
    "example-title-container": "principle-example-container"
};

const expandableActionClasses = Object.keys(expandableTargetMapping);

const onShowStylesByActionClass = {
    "principle-title-container":{
        "principle-title-container":{
            "box-shadow": "none"
        },
        "principle-title-arrow":{
            "transform": "rotate(180deg)"
        }
    },
    "description-title-container":{
        "description-title-arrow":{
            "transform": "rotate(180deg)"
        }
    },
    "example-title-container":{
        "example-title-arrow":{
            "transform": "rotate(180deg)"
        }
    }
};

const onHideStylesByActionClass = {
    "principle-title-container":{
        "principle-title-container":{
            "box-shadow": "4px 4px 4px rgb(192, 192, 192)"
        },
        "principle-title-arrow":{
            "transform": "none"
        }
    },
    "description-title-container":{
        "description-title-arrow":{
            "transform": "none"
        }
    },
    "example-title-container":{
        "example-title-arrow":{
            "transform": "none"
        }
    }
};