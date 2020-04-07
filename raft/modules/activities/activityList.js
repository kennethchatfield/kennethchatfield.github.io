import {Image} from "../image.js";
import { VisibilityButton } from '../visibilityButton.js';
import { Form } from "../form.js";

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
};

export function clearActivities(){
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
export function createActivitiesHeader(headerText){
    if( headerText ){
        this.activitiesHeader = document.createElement('h1');
        this.activitiesHeader.classList.add("activities-header");
        this.activitiesHeader.innerHTML = headerText;
        this.element.prepend( this.activitiesHeader );
    }

}
export function createActivities(activities, createEmpty){
    this.list = activities;
    if(activities.length > 0){
        this.activities = activities.map( activity => {
            return this.createActivity( activity );
        });
    } else {
        createEmpty(this.element);
    }

}
export function createActivity( activityData ){
    const activity = document.createElement('div');
    activity.classList.add("activity");
    this.createActivityHeader( activityData, activity );
    this.createActivityDetails( activityData, activity );
    this.createActivityServices( activityData, activity );
    this.element.appendChild( activity );
    return activity;
}
export function createActivityHeader( activityData, parent ){
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
export function createActivityDetails( activityData, parent ){
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
export function createActivityServices( activityData, parent ){
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
        servicesContents.appendChild(serviceItem)
    });
    activityServices.appendChild(servicesContents);


    this.createActivityPrice( activityData, activityServices);

    parent.appendChild( activityServices );
}
export function createActivityPrice( activityData, parent ){
    const activityPrices = document.createElement('div');
    const priceTitle = document.createElement('h3');

    activityPrices.classList.add("activity-prices");
    priceTitle.classList.add("price-title");
    priceTitle.innerHTML = "Pricing";

    activityPrices.appendChild( priceTitle );
    this.createPriceTable(activityData, activityPrices );
    this.createBookAdventureButton( activityData, activityPrices );
    parent.appendChild( activityPrices );
}
export function createPriceTable( activityData, parent ){
    const priceTable = document.createElement('div');
    priceTable.classList.add("price-table");

    const days = ["Weekend", "Weekday"];
    const headers = ["Day", "Individual", "Group"];

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
        column.appendChild( header );

        rows.map( row => {
            const cell = document.createElement('div');
            cell.classList.add("cell");
            cell.innerHTML = row[index];
            column.appendChild( cell )
        });

        priceTable.appendChild(column)
    });

    parent.appendChild( priceTable );

    const tableFooter = document.createElement('div');
    tableFooter.classList.add("table-footer");
    tableFooter.innerHTML = "*Prices are per person & don't include taxes & fees.";
    parent.appendChild( tableFooter )
}

export function createBookAdventureButton( activityData, parent ){
    this.bookAdventureButton = document.createElement('input');
    this.bookAdventureButton.type = "submit";
    this.bookAdventureButton.value = "Book an Adventure Today";
    this.bookAdventureButton.classList.add("book-adventure-button");
    this.visibilityButton = new VisibilityButton( parent );
    this.adventureForm = new Form();
    this.adventureForm.createReservationsForm(activityData, this.parent );
    this.adventureForm.element.classList.add("activities-form");

    this.visibilityButton.create( this.bookAdventureButton,  this.adventureForm.element)

}