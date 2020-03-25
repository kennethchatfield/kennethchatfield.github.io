console.log('CONTACT');

import { MainContent } from '../modules/mainContent.js'
import { Navigation } from '../modules/navigation.js'

const mainContent = new MainContent();
const navigation = new Navigation();

const pageId = "home";

navigation.create();
mainContent.create();

const div = document.createElement("div");
div.innerHTML = "CONTACT";

mainContent.element.appendChild(div);