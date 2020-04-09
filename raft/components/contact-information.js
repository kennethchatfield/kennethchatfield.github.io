import { htmlToElement } from '../js/utilities.js';

//contact-information
export default ( ) => {
    return htmlToElement(`
    <div class="contact-information">
        <h2> Contact Information </h2>
        <div class="contact-info-item section-start">
            <h4 class="contact-info-label"> Address: </h4>
            <div class="contact-info-value"> 1127 S Main St Riggins, ID 83549 </div>
        </div>
        <div class="contact-info-item section-end">
            <h4 class="contact-info-label"> Lodge Hours: </h4>
            <div class="contact-info-value"> 8am - 8pm </div>
        </div>
        <div class="contact-info-item section-start">
            <h4 class="contact-info-label"> Phone: </h4>
            <div class="contact-info-value"> (555) 555-5555 </div>
        </div>
        <div class="contact-info-item">
            <h4 class="contact-info-label"> Email: </h4>
            <div class="contact-info-value"> SalmonRiverAdventures@adventures.com </div>
        </div>
    </div>
    `)
};