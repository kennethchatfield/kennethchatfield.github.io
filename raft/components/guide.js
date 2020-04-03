import { htmlToElement } from '../js/utilities.js';

//guide
export default ( props ) => {
    const { name, dob, picture, phone, email, tour, otherPersonalInfo } = props||{}; // guideData
    const fullNameAge = name.first + " " + name.last + ", " + dob.age;
    const originallyFrom = dob.city + " " + dob.state + ", " + dob.nation;
    return htmlToElement(`
    <div class="guide-container">
        <h2 class="guide-name-age">${ fullNameAge }</h2>
        <h3 class="guide-from-originally">${ originallyFrom }</h3>
        <img src="${picture}" alt="${fullNameAge}" />
        <div class="guide-info-container">
            <h4 class="guide-info-label">Additional Info:</h4> 
            <div class="guide-info-value">${ otherPersonalInfo.join("\n") }</div>
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