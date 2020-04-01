import { Image } from './image.js'
import { unique } from '../js/utilities.js';


const fakeDescription = "Lorem ipsum dolor sit amet, has ei case brute laboramus, est eu possit suscipit temporibus, velit assum quaeque quo et. Quo ne inani cotidieque, dicant repudiandae te est, sed et dicant oportere prodesset. His et legere democritum. Mea solet putant appetere ea, cu cum phaedrum complectitur. Pri et iisque expetenda, nominavi copiosae singulis ei usu. Cu posse feugait consectetuer duo. Te essent melius instructior pri, at usu sumo eirmod, consul verear petentium per ei. Sed oporteat tractatos facilisis at. An pro reque clita ignota, error tantas malorum no vis. Rebum utroque pericula ne sed. Ut quo solet rationibus, sea vero explicari ea. Sea cu recusabo molestiae, erant viris feugait ne sea."


const activitiesMap = [
  {
    index: 0,
    name: "Salmon River Lower Rafting Trip",
    adventureType: "raft",
    duration:{
      full: 3.5,
      river: 3,
    },
    skillLevel: "Exciting but not strenuous. No previous white water experience needed.",
    minimumAge: 12,
    price:{
      individual: 49.95,
      group: 39.95
    },
    image: "activity.jpg",
    description: fakeDescription,
    services: [
      "River rafting safety & techniques training",
      "ten miles of action-packed class III-IV white water",
      "Meals: Snack between sections, and a lunch at the Ocoee Wildwater Rafting Center",
      "Here you’ll drop through enormous rapids like Smileys, Slam Dunk, and the double-drop of Humongous",
      "Photography included! While your busy we'll capture action shots in three hot spots along the river",
      "Shuttles to and from the river to Salmon River Adventures"
    ]
  },
  {
    index: 1,
    name: "Salmon River Upper Rafting Trip",
    adventureType: "raft",
    duration:{
      full: 3,
      river: 1.5,
    },
    skillLevel: "Exciting and challenging. No previous white water experience required.",
    minimumAge: 12,
    price:{
      individual: 49.95,
      group: 39.95
    },
    image: "activity.jpg",
    description: fakeDescription,
    services: [
      "River rafting safety & techniques training",
      "ten miles of action-packed class III-IV white water",
      "Meals: Snack between sections, and a lunch at the Ocoee Wildwater Rafting Center",
      "Here you’ll drop through enormous rapids like Smileys, Slam Dunk, and the double-drop of Humongous",
      "Photography included! While your busy we'll capture action shots in three hot spots along the river",
      "Shuttles to and from the river to Salmon River Adventures"
    ]
  },
  {
    index: 2,
    name: "Salmon River Upper & Lower Rafting Trip",
    adventureType: "raft",
    duration:{
      full: 6,
      river: 4,
    },
    skillLevel: "Exciting and challenging, no previous white water experience needed, but encouraged.",
    minimumAge: 14,
    price:{
      individual: 99.95,
      group: 89.95
    },
    image: "activity.jpg",
    description: fakeDescription,
    services: [
      "River rafting safety & techniques training",
      "ten miles of action-packed class III-IV white water",
      "Meals: Snack between sections, and a lunch at the Ocoee Wildwater Rafting Center",
      "Here you’ll drop through enormous rapids like Smileys, Slam Dunk, and the double-drop of Humongous",
      "Photography included! While your busy we'll capture action shots in three hot spots along the river",
      "Shuttles to and from the river to Salmon River Adventures"
    ]
  },
  {
    index: 3,
    name: "Kayak: Salmon River Lower Rafting Trip",
    adventureType: "kayak",
    duration:{
      full: 3.5,
      river: 3,
    },
    skillLevel: "Exciting but not strenuous. No previous white water experience needed.",
    minimumAge: 12,
    price:{
      individual: 49.95,
      group: 39.95
    },
    image: "kayak.jpg",
    description: fakeDescription,
    services: [
      "River rafting safety & techniques training",
      "ten miles of action-packed class III-IV white water",
      "Meals: Snack between sections, and a lunch at the Ocoee Wildwater Rafting Center",
      "Here you’ll drop through enormous rapids like Smileys, Slam Dunk, and the double-drop of Humongous",
      "Photography included! While your busy we'll capture action shots in three hot spots along the river",
      "Shuttles to and from the river to Salmon River Adventures"
    ]
  },
  {
    index: 4,
    name: "Kayak: Salmon River Upper Rafting Trip",
    adventureType: "kayak",
    duration:{
      full: 3,
      river: 1.5,
    },
    skillLevel: "Exciting and challenging. No previous white water experience required.",
    minimumAge: 12,
    price:{
      individual: 49.95,
      group: 39.95
    },
    image: "kayak.jpg",
    description: fakeDescription,
    services: [
      "River rafting safety & techniques training",
      "ten miles of action-packed class III-IV white water",
      "Meals: Snack between sections, and a lunch at the Ocoee Wildwater Rafting Center",
      "Here you’ll drop through enormous rapids like Smileys, Slam Dunk, and the double-drop of Humongous",
      "Photography included! While your busy we'll capture action shots in three hot spots along the river",
      "Shuttles to and from the river to Salmon River Adventures"
    ]
  },
  {
    index: 5,
    name: "Kayak: Salmon River Upper & Lower Rafting Trip",
    adventureType: "kayak",
    duration:{
      full: 6,
      river: 4,
    },
    skillLevel: "Exciting and challenging, no previous white water experience needed, but encouraged.",
    minimumAge: 14,
    price:{
      individual: 99.95,
      group: 89.95
    },
    image: "kayak.jpg",
    description: fakeDescription,
    services: [
      "River rafting safety & techniques training",
      "ten miles of action-packed class III-IV white water",
      "Meals: Snack between sections, and a lunch at the Ocoee Wildwater Rafting Center",
      "Here you’ll drop through enormous rapids like Smileys, Slam Dunk, and the double-drop of Humongous",
      "Photography included! While your busy we'll capture action shots in three hot spots along the river",
      "Shuttles to and from the river to Salmon River Adventures"
    ]
  }
]

const getDetailContents = ( activity ) => {
  return {
    duration:{
      label: "Trip Length",
      text: `Approximately ${activity.duration.full} hours (${activity.duration.river}  hours on the river)`
    },
    minimumAge:{
      label: "Minimum Age",
      text: `${activity.minimumAge} years`
    },
    skillLevel: {
      label: "Skill Level",
      text: activity.skillLevel
    }
  };
}

const filters = {
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
    filter: (item) => ( item.adventureType === item._var.adventureType ),
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
}


class Activities {
    constructor( parent ) {
      this.parent = parent;
    }
  
    create() {
      this.element = document.createElement('div');
      this.element.id = "activities";

      this.createActivities( activitiesMap );

      if( this.parent ) this.parent.append(this.element);
    }
    onFiltersUpdate(){
      this.clearActivities();
      let activityList = activitiesMap;
      if( this.filters ) Object.keys( this.filters ).map( filterId => {
        const filter = filters[ filterId ].filter;
        const activityList_var = activityList.map( listItem => (
          Object.assign({}, listItem, {
            _var: Object.assign({},
              ...Object.keys( this.filters[ filterId ]  ).map( filterInputId =>{
                let inputElementValue = this.filters[ filterId ][ filterInputId ].value;
                const inputType = this.filters[ filterId ][ filterInputId ].type;
                if( inputType === "number" && inputElementValue ) inputElementValue = parseFloat( inputElementValue );
                else if( !inputElementValue ) inputElementValue = undefined;
                return { [filterInputId]: inputElementValue }
              })
              )
          })
        ))
        const filteredActivityList_var = activityList_var.filter( filter );
        activityList = filteredActivityList_var.map( item => {
          if(item._var) delete item["_var"];
          return item;
        })
      })
      this.createActivities( activityList );
    }
    createActivitiesFilter(){
      this.activitiesFilterContainer = document.createElement('div');
      this.activitiesFilterContainer.classList.add("activities-filter-container");
      this.createActivitiesFilterHeader();
      this.createSelectFilterContainer();
      this.element.prepend( this.activitiesFilterContainer );
    }
    createActivitiesFilterHeader(){
      this.activitiesFilterHeaderContainer = document.createElement('div');
      this.activitiesFilterHeader = document.createElement('h2');
      this.activitiesFilterHeaderContainer.classList.add("activities-filter-header-container");
      this.activitiesFilterHeader.classList.add("activities-filter-header");
      this.activitiesFilterHeader.innerHTML = "Adjust Search";

      
      this.activitiesFilterHeaderContainer.appendChild( this.activitiesFilterHeader );

      this.activitiesFilterContainer.appendChild( this.activitiesFilterHeaderContainer );
    }
    createSelectFilterContainer(){
      this.selectFilterContainer = document.createElement('div');
      this.selectFilterContainer.classList.add("select-filter-container");


      this.createSelectFilter();

      this.activitiesFilterHeaderContainer.appendChild( this.selectFilterContainer );
    }
    createSelectFilter(){
      this.selectFilter = document.createElement('select');
      this.selectFilter.classList.add("select-filter");
      
      const placeHolderFilter = { id: "", name: "..." }
      this.selectFilterOptions = [
        this.createSelectFilterOption( placeHolderFilter ),
        ...Object.values( filters ).map( filter => {
          return this.createSelectFilterOption( filter )
        })
      ];

      this.selectFilter.onchange = event => {
        const filterId = event.target.value;
        const filterObj = filters[ filterId ];
        if( filterObj ){
          this.createFilterInputs(filterObj, this.selectFilterContainer)
        }
      }

      this.selectFilterContainer.appendChild( this.selectFilter );
    }
    createSelectOption(optionData, parent, className){
      const {id, name} = optionData;
      const option = document.createElement('option');
      if(className) option.classList.add(className);
      option.value = id;
      option.innerHTML = name;

      if( parent ) parent.appendChild(option)
      return option;
    }
    createSelectFilterOption(filterObj){
      return this.createSelectOption(filterObj, this.selectFilter, "select-filter-option");
    }
    addToInputs(filterId, inputId, element){
      if(!this.filters) this.filters = {};
      if(!this.filters[filterId]) this.filters[filterId] = {};
      this.filters[filterId][inputId] = element;
    }
    createFilterInputs(filter, parent){
      if(filter.inputs){
        
        Object.values( filter.inputs ).map( filterInput => {
          const filterInputContainer = document.createElement('div');
          const filterInputLabel = document.createElement('label');
          const filterInputElement = document.createElement(filterInput.tag);
          if( filterInput.tag === "select" && filterInput.selectOptions ){
            this.createSelectOption({id:"", name: "..."}, filterInputElement, "filter-input-option");
            filterInput.selectOptions.map( optionData => {
              this.createSelectOption(optionData, filterInputElement, "filter-input-option");
            })
          }
          filterInputContainer.classList.add("filter-input-container");
          filterInputLabel.classList.add("filter-input-label");
          filterInputElement.classList.add("filter-input");
          if( filterInput.tag === "input") filterInputElement.type = filterInput.type;
          filterInputElement.id = `filters-${filter.id}-${filterInput.id}`;
          filterInputLabel.forId = filterInputElement.id;
          filterInputLabel.innerHTML = filterInput.name;
          filterInputElement.onchange = (event) => {
            console.log('onchange filter input:::', this.filters[ filter.id ][ filterInput.id ].value);
            this.onFiltersUpdate();
          }
          this.addToInputs( filter.id, filterInput.id, filterInputElement );
          filterInputContainer.appendChild( filterInputLabel );
          filterInputContainer.appendChild( filterInputElement );
          parent.appendChild( filterInputContainer );
        })

      }
    }


    clearActivities(){
      if( this.activitiesHeader ){
        this.element.removeChild( this.activitiesHeader );
        this.activitiesHeader = undefined;
      }
      if(this.activities){
        this.activities.map( activity => {
          this.element.removeChild( activity );
        })
        this.activities = undefined;
      }
    }


    createActivities(activities){
      this.activitiesHeader = document.createElement('h1');
      this.activitiesHeader.classList.add("activities-header");
      this.activitiesHeader.innerHTML = "Featured Activities and Services";
      this.element.appendChild( this.activitiesHeader );
      this.activities = activities.map( activity => {
        return this.createActivity( activity );
      })
    }
    createActivity( activityData ){
      const activity = document.createElement('div');
      activity.classList.add("activity");
      this.createActivityHeader( activityData, activity );
      this.createActivityDetails( activityData, activity );
      this.createActivityServices( activityData, activity );
      this.element.appendChild( activity );
      return activity;
    }
    createActivityHeader( activityData, parent ){
      const activityHeader = document.createElement('div');
      const activityTitle = document.createElement('h2');
      const activityDescription = document.createElement('div');
      activityHeader.classList.add("activity-header");
      activityTitle.classList.add("activity-title");
      activityTitle.innerHTML = activityData.name;
      activityDescription.classList.add("description");
      activityHeader.appendChild( activityTitle )
      const image = new Image(undefined,activityHeader);
      image.create(`../images/${activityData.image}`, activityData.name)
      image.element.classList.add("activity-image");
      activityDescription.innerHTML = activityData.description;
      parent.appendChild( activityHeader );
    }
    createActivityDetails( activityData, parent ){
      const activityDetail = document.createElement('div');
      const detailTitle = document.createElement('h3');
      const detailContents = document.createElement('div');
      activityDetail.classList.add("activity-detail");
      detailTitle.classList.add("detail-title");
      detailContents.classList.add("detail-contents");
      detailTitle.innerHTML = "Details";
      activityDetail.appendChild( detailTitle )
      const activityDetailData = getDetailContents( activityData );
      Object.values(activityDetailData).map( detailData => {
        const detailItem = document.createElement('div');
        const label = document.createElement('span');
        const text = document.createElement('span');
        detailItem.classList.add("detail-item");
        label.classList.add("label");
        text.classList.add("text");
        label.textContent = `${detailData.label}:`;
        text.textContent = detailData.text;
        detailItem.appendChild(label);
        detailItem.appendChild(text);
        detailContents.appendChild( detailItem );
      });
      activityDetail.appendChild( detailContents );
    
      parent.appendChild( activityDetail );
    }


    createActivityServices( activityData, parent ){
      const activityServices = document.createElement('div');
      const servicesTitle = document.createElement('h3');
      const servicesContents = document.createElement('div');
      activityServices.classList.add("activity-services");
      servicesTitle.classList.add("services-title");
      servicesContents.classList.add("services-contents");
      servicesTitle.innerHTML = "Services";
      activityServices.appendChild( servicesTitle );

      activityData.services.map( serviceText => {
        const serviceItem = document.createElement('li');
        serviceItem.classList.add("service-item");
        serviceItem.innerHTML = serviceText;
        activityServices.appendChild(serviceItem)
      })

      this.createActivityPrice( activityData, activityServices);

      parent.appendChild( activityServices );
    }

    createActivityPrice( activityData, parent ){
      const activityPrices = document.createElement('div');
      const priceTitle = document.createElement('h3');
  
      activityPrices.classList.add("activity-prices");
      priceTitle.classList.add("price-title");
      priceTitle.innerHTML = "Pricing";
      
      activityPrices.appendChild( priceTitle )
      this.createPriceTable(activityData, activityPrices );

      parent.appendChild( activityPrices );
    }
    createPriceTable( activityData, parent ){
      const priceTable = document.createElement('div');
      priceTable.classList.add("price-table");

      const days = ["Sunday", "Saturday"];
      const headers = ["Day", "Individual", "Group"]

      let rows = [];
      days.map((day,index) => {
        // if( index === 0 ) rows.push( headers )
        rows.push([day, `$${activityData.price.individual}`, `$${activityData.price.group}`  ])
      })
      headers.map( (headerText, index) => {
        const column = document.createElement('div');
        const header = document.createElement('div');
        column.classList.add("column");
        header.classList.add("table-header");
        header.innerHTML = headerText;
        column.appendChild( header )

        rows.map( row => {
          const cell = document.createElement('div');
          cell.classList.add("cell");
          cell.innerHTML = row[index];
          column.appendChild( cell )
        })

        priceTable.appendChild(column)
      })

      parent.appendChild( priceTable );

      const tableFooter = document.createElement('div');
      tableFooter.classList.add("table-footer");
      tableFooter.innerHTML = "*Prices are per person & don't include taxes & fees.";
      parent.appendChild( tableFooter )
    }
  }
  
  export { Activities };
  