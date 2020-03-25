console.log('RIVER GUIDE ')

import { MainContent } from '../modules/mainContent.js'
import { Navigation } from '../modules/navigation.js'

const mainContent = new MainContent();
const navigation = new Navigation();

navigation.create();
mainContent.create();

const div = document.createElement("div");
div.innerHTML = "RIVER GUIDE";

mainContent.element.appendChild(div);