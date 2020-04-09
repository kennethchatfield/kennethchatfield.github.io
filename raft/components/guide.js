import { htmlToElement, groupByCategory } from '../js/utilities.js';
import { interestsByCategory } from "../modules/guides/definitions.js";
//guide
export default ( props ) => {
    const { name, dob, picture, phone, email, tour, interests, start } = props||{}; // guideData

    const groupedInterests = groupByCategory( interests, interestsByCategory );

    const fullNameAge = name.first + " " + name.last + ", " + dob.age;
    const originallyFrom = dob.city + " " + dob.state + ", " + dob.nation;

    const interestsCategoriesHtmlString = (`
        <div class="personal-interests">
            ${Object.keys(groupedInterests).map( category => (`
                <h5>${ category.replace(/_/g, " ") }</h5>
                ${groupedInterests[ category ].map( categoryItem => (
                    `<div>${categoryItem}</div>`
                )).join("")}
            `)).join("")}
        </div>
    `);
    return htmlToElement(`
    <div class="guide-container">
        <h2 class="guide-name-age">${ fullNameAge }</h2>
        <h3 class="guide-from-originally">${ originallyFrom }</h3>
        <img src="${picture}" alt="${fullNameAge}" />
        <div class="guide-info-container column section-end">
            <h4 class="guide-info-label">Interests:</h4> 
            <div class="guide-info-value">${ interestsCategoriesHtmlString }</div>
        </div>
        <div class="guide-info-container section-start">
            <h4 class="guide-info-label">Phone:</h4> 
            <div class="guide-info-value">${ phone }</div>
        </div>
        <div class="guide-info-container column section-end">
            <h4 class="guide-info-label">Email:</h4> 
            <div class="guide-info-value">${ email }</div>
        </div>
        <div class="guide-info-container section-start">
            <h4 class="guide-info-label">Years of Experience:</h4> 
            <div class="guide-info-value">${ start.age + ' yrs' }</div>
        </div>
        <div class="guide-info-container">
            <h4 class="guide-info-label">Tours Guided:</h4> 
            <div class="guide-info-value">${ tour.count }</div>
        </div>
        <div class="guide-info-container column section-end">
            <h4 class="guide-info-label">Rivers Guided:</h4> 
            <div class="guide-info-value">${ tour.rivers.join(", ") }</div>
        </div>
        
    </div>
    `)
};