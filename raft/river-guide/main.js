console.log('GUIDES');

import generateGuideData from "../modules/guides/generateGuideData.js";

import { MainContent } from '../modules/mainContent.js'
import { Navigation } from '../modules/navigation.js'
import { SiteHeader } from '../modules/siteHeader.js'
import { Guides } from '../modules/guides/index.js';
import { Filter } from '../modules/filter/index.js'

import guidesFilterDefinition from "../modules/guides/guidesFilterDefinition.js";

const pageId = "river-guide";

const navigation = new Navigation();
navigation.create();
navigation.setActivePage( pageId )

const siteHeader = new SiteHeader(navigation.container);
siteHeader.create();

const mainContent = new MainContent();
mainContent.create();
mainContent.elementContainer.onscroll = () => {
    const scrollTop = mainContent.elementContainer.scrollTop;
    if( scrollTop > 0 && siteHeader.visible || scrollTop === 0 && !siteHeader.visible ) { 
        siteHeader.toggleVisibility(); 
    }
};
const guidesData = generateGuideData();

const guides = new Guides( mainContent.element,  guidesData);
guides.create();

const filter = new Filter({
    fullList: guidesData,
    parent: guides.element,
    filterDefinitions: guidesFilterDefinition,
    clearList: ()=>{ guides.clearGuidesList() },
    createList: ( list )=>{ guides.createGuidesList(list); }
});
filter.create();

import { Footer } from '../modules/footer.js'
const footer = new Footer(mainContent.elementContainer);
footer.create();