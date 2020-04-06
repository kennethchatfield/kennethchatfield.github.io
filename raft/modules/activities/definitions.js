
import activitiesMap from "./activitiesMap.js";

export const activityTypes = [ "Kayak", "Raft" ];

export const getActivityTypeOptions = defaultText => {
    return [
        { id: "", name: defaultText },
        ...activityTypes.map( activityType => ({
            id: activityType.toLowerCase(),
            name: activityType
        }))
    ]
};


export const getActivityNameOptions = defaultText => {
    return [
        { id: "", name: defaultText },
        ...activitiesMap.map( ({ name },index) => ({
            id: index, name
        }))
    ]
};

//filters
export const filterDefinitions = {
    price:{
        id: "price",
        name: "Price",
        filter: (item) => (
            (item._var.max||1000) > item.price.individual && item.price.individual > (item._var.min||0)
        ),
        inputs: {
            min: {
                id: 'min',
                name: 'Min',
                tag: 'input',
                type: 'number'
            },
            max: {
                id: 'max',
                name: 'Max',
                tag: 'input',
                type: 'number'
            }
        }
    },
    adventureType:{
        id: "adventureType",
        name: "Adventure Type",
        filter: (item) => ( item.adventureType === item._var.adventureType || (item._var.adventureType||"") === "" ),
        inputs: {
            adventureType: {
                id: 'adventureType',
                name: 'Adventure Type',
                tag: 'select',
                type: 'text',
                selectOptions: getActivityTypeOptions()
            }
        }
    }
};