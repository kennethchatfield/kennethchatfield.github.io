import { htmlToElement } from '../js/utilities.js';

//form-submission
export default ( props ) => {
    const { formData } = props||{}; // guideData
    return htmlToElement(`
    <div class="form-submission-container">
        <h1> Thanks ${ formData["full-name-input"] }, for your submission!</h1>
    </div>
    `)
};