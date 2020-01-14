
const stylesByClass = {
    "principle-title-container": {
        "box-shadow": "4px 4px 4px rgb(192, 192, 192)"
    }
}

const expandableClasses = [
    "principle-description",
    "principle-example-container",
    "principle-application"
];



const expandableTargetMapping = {
    "principle-title-container": ["principle-description","principle-example-container", "principle-application"],
    "description-title-container": ["principle-description"],
    "example-title-container": ["principle-example-container"],
    "application-title-container": ["principle-application"]
};

const expandableActionClasses = Object.keys(expandableTargetMapping);

const onShowStylesByActionClass = {
    "principle-title-container":{
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
        },
        "description-title-container":{
            "border-top": "none"
        }
    },
    "application-title-container":{
        "application-title-arrow":{
            "transform": "rotate(180deg)"
        }
    }
};

const onHideStylesByActionClass = {
    "principle-title-container":{
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
        },
        "description-title-container":{
            "border-top": "1px solid #dfe1e5"
        }
    },
    "application-title-container":{
        "application-title-arrow":{
            "transform": "none"
        }
    }
};