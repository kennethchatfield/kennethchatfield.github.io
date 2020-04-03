

//filters
export default {
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
                selectOptions:[
                    { id: "raft", name: "Raft"},
                    { id: "kayak", name: "Kayak"}
                ]
            }
        }
    }
};