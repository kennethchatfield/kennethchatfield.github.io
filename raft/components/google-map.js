import { htmlToElement } from '../js/utilities.js';

//google-map
export default ( props ) => {
    const { height, width } = props||{};
    return htmlToElement(`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8773.960959797123!2d-116.33315763973285!3d45.416177010251566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a6c56c1512fddf%3A0x407c0aae7488dd90!2s1127%20S%20Main%20St%2C%20Riggins%2C%20ID%2083549!5e0!3m2!1sen!2sus!4v1586220156912!5m2!1sen!2sus" 
            width="${ width || 600 }"
            height="${ height || 450 }" 
            frameborder="0" 
            style="border:0;"
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0">
    </iframe>
    `)
};