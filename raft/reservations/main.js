console.log('RESERVATIONS.js')

import { MainContent } from '../modules/mainContent.js'
import { Navigation } from '../modules/navigation.js'
import { Footer } from '../modules/footer.js'
import { SiteHeader } from '../modules/siteHeader.js'
import { Activities } from '../modules/activities.js';

const pageId = "reservations";

const navigation = new Navigation();
navigation.create();
navigation.setActivePage( pageId )

const siteHeader = new SiteHeader(navigation.container);
siteHeader.create();

const mainContent = new MainContent();
mainContent.create();
mainContent.addTitle("Find an adventure that fits you!");
mainContent.elementContainer.onscroll = () => {
    const scrollTop = mainContent.elementContainer.scrollTop;
    if( scrollTop > 0 && siteHeader.visible || scrollTop === 0 && !siteHeader.visible ) { 
        siteHeader.toggleVisibility(); 
    }
}

const activities = new Activities( mainContent.element );
activities.create();

const footer = new Footer(mainContent.elementContainer);
footer.create()
