

//guidesFilterDefinition
export default {
    gender:{
        id: "gender",
        name: "Gender",
        filter: (item) => ( item.gender === item._var.gender || (item._var.gender||"") === "" ),
        inputs: {
            gender: {
                id: 'gender',
                name: 'Gender',
                tag: 'select',
                type: 'text',
                selectOptions:[
                    { id: "", name: "All Genders"},
                    { id: "male", name: "Male"},
                    { id: "female", name: "Female"}
                ]
            }
        }
    },

};