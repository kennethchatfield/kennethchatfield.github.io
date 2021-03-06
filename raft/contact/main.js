
import { MainContent } from '../modules/mainContent.js'
import { Navigation } from '../modules/navigation.js'
import { SiteHeader } from '../modules/siteHeader.js'
import { Footer } from '../modules/footer.js'
import { Contact } from "../modules/contact.js";

const pageId = "contact";

const navigation = new Navigation();
navigation.create();
navigation.setActivePage( pageId )

const siteHeader = new SiteHeader(navigation.container);
siteHeader.create();

const mainContent = new MainContent();
mainContent.create();
// mainContent.elementContainer.onscroll = () => {
//     const scrollTop = mainContent.elementContainer.scrollTop;
//     if( scrollTop > 0 && siteHeader.visible || scrollTop === 0 && !siteHeader.visible ) {
//         siteHeader.toggleVisibility();
//     }
// };
mainContent.createSiteHeaderScrollEvent(siteHeader);

const contact = new Contact( mainContent.element );
contact.create();

const footer = new Footer(mainContent.elementContainer);
footer.create();