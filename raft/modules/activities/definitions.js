
import activitiesMap from "./activitiesMap.js";

export const activityTypes = [ "Kayak", "Raft" ];
export const minimumAges = [
    {id: 12, name: 12 },
    {id: 12, name: 12 },
    {id: 14, name: 14 },
    {id: 16, name: 16 },
    {id: 18, name: "18+" }
    ];
export const selectOptionSeeds = {
    activityTypes,
    minimumAges
};

export const getActivityMinAgeOptions = defaultText => {
    return [
        { id: "", name: defaultText },
        ...minimumAges
    ];
}

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
    },
    minimumAge:{
        id: "minimumAge",
        name: "Minimum Age",
        filter: (item) => {
            if(!item._var.minimumAge) return item;
            return ( item.minimumAge < (item._var.minimumAge !== "" ? parseFloat(item._var.minimumAge) : 1000 ) )
        },
        inputs: {
            minimumAge: {
                id: 'minimumAge',
                name: 'Minimum Age',
                tag: 'select',
                type: 'text',
                selectOptions: getActivityMinAgeOptions()
            }
        }
    }
};