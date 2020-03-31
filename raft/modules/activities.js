import { Image } from './image.js'


const fakeDescription = "Lorem ipsum dolor sit amet, has ei case brute laboramus, est eu possit suscipit temporibus, velit assum quaeque quo et. Quo ne inani cotidieque, dicant repudiandae te est, sed et dicant oportere prodesset. His et legere democritum. Mea solet putant appetere ea, cu cum phaedrum complectitur. Pri et iisque expetenda, nominavi copiosae singulis ei usu. Cu posse feugait consectetuer duo. Te essent melius instructior pri, at usu sumo eirmod, consul verear petentium per ei. Sed oporteat tractatos facilisis at. An pro reque clita ignota, error tantas malorum no vis. Rebum utroque pericula ne sed. Ut quo solet rationibus, sea vero explicari ea. Sea cu recusabo molestiae, erant viris feugait ne sea."


const activitiesMap = [
  {
    index: 0,
    name: "Salmon River Lower Rafting Trip",
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


class Activities {
    constructor( parent ) {
      this.parent = parent;
    }
  
    create() {
      this.element = document.createElement('div');
      this.element.id = "activities";

      this.createActivities();

      if( this.parent ) this.parent.append(this.element);
    }
    createActivities(){
      const activitiesHeader = document.createElement('h1');
      activitiesHeader.classList.add("activities-header");
      activitiesHeader.innerHTML = "Featured Activities and Services";
      this.element.appendChild( activitiesHeader );
      activitiesMap.map( activity => {
        this.createActivity( activity );
      })
    }
    createActivity( activityData ){
      const activity = document.createElement('div');
      activity.classList.add("activity");
      this.createActivityHeader( activityData, activity );
      this.createActivityDetails( activityData, activity );
      this.createActivityServices( activityData, activity );
      this.element.appendChild( activity );
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
  