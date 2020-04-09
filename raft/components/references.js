import { htmlToElement } from '../js/utilities.js';

//references
export default ( ) => {
    return htmlToElement(`
    <div class="references-container">
        <h1>References</h1>
        <h3> By Page Name </h3>
        <div class="reference-page-container">
            <h2> Home </h2>
            <div class="reference-item-container column">
                <div class="reference-item-container" >
                    <h5 class="reference-label">Name</h5>
                    <div class="reference-item">OpenWeather</div>
                </div>
                <div class="reference-item-container">
                    <h5 class="reference-label">Purpose</h5>
                    <div class="reference-item"> Used to generate the data in the weather summary </div>
                </div>
                <div class="reference-item-container" >
                    <h5 class="reference-label">URL</h5> 
                    <div class="reference-item"> 
                        <a href="https://openweathermap.org/" > www.openweathermap.org </a>
                    </div>
                </div>
            </div>
            <div class="reference-item-container column">
                <div class="reference-item-container" >
                    <h5 class="reference-label">Name</h5>
                    <div class="reference-item"> Pexels </div>
                </div>
                <div class="reference-item-container">
                    <h5 class="reference-label">Purpose</h5>
                    <div class="reference-item"> Rafting and kayaking pictures in featured activities section </div>
                </div>
                <div class="reference-item-container" >
                    <h5 class="reference-label">URL</h5> 
                    <div class="reference-item"> 
                        <a href="https://www.pexels.com/" > www.pexels.com </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="reference-page-container">
            <h2> Guides </h2>
            <div class="reference-item-container column">
                <div class="reference-item-container" >
                    <h5 class="reference-label">Name</h5>
                    <div class="reference-item"> BoredomBusted </div>
                </div>
                <div class="reference-item-container">
                    <h5 class="reference-label">Purpose</h5>
                    <div class="reference-item"> Used list of hobbies to generate guide hobbies </div>
                </div>
                <div class="reference-item-container" >
                    <h5 class="reference-label">URL</h5> 
                    <div class="reference-item"> 
                        <a href="https://www.boredombusted.com/" > www.boredombusted.com </a>
                    </div>
                </div>
            </div>
            <div class="reference-item-container column">
                <div class="reference-item-container" >
                    <h5 class="reference-label">Name</h5>
                    <div class="reference-item"> Random User API </div>
                </div>
                <div class="reference-item-container">
                    <h5 class="reference-label">Purpose</h5>
                    <div class="reference-item"> Used to seed guide list item properties; gender, name, start, picture, dob </div>
                </div>
                <div class="reference-item-container" >
                    <h5 class="reference-label">URL</h5> 
                    <div class="reference-item"> 
                        <a href="https://randomuser.me/" > www.randomuser.me </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="reference-page-container">
            <h2> Activities </h2>
            <div class="reference-item-container column">
                <div class="reference-item-container" >
                    <h5 class="reference-label">Name</h5>
                    <div class="reference-item"> Pexels </div>
                </div>
                <div class="reference-item-container">
                    <h5 class="reference-label">Purpose</h5>
                    <div class="reference-item"> Rafting and kayaking pictures in activities list </div>
                </div>
                <div class="reference-item-container" >
                    <h5 class="reference-label">URL</h5> 
                    <div class="reference-item"> 
                        <a href="https://www.pexels.com/" > www.pexels.com </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
};