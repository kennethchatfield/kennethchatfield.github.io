console.log('GUIDES');

import generateGuideData from "../modules/guides/generateGuideData.js";

import { MainContent } from '../modules/mainContent.js'
import { Navigation } from '../modules/navigation.js'
import { SiteHeader } from '../modules/siteHeader.js'
import { Guides } from '../modules/guides/index.js';
import { Filter } from '../modules/filter/index.js'

import { filterDefinitions } from "../modules/guides/definitions.js";

const pageId = "river-guide";

const navigation = new Navigation();
navigation.create();
navigation.setActivePage( pageId );

const siteHeader = new SiteHeader(navigation.container);
siteHeader.create();

const mainContent = new MainContent();
mainContent.create();
mainContent.createSiteHeaderScrollEvent(siteHeader);

const guidesData = generateGuideData();

const guides = new Guides( mainContent.element,  guidesData);
guides.create();

const filter = new Filter({
    fullList: guidesData,
    parent: guides.element,
    filterDefinitions: filterDefinitions,
    clearList: ()=>{ guides.clearGuidesList() },
    createList: ( list, createEmpty )=>{ guides.createGuidesList(list, createEmpty); }
});
filter.create();

import { Footer } from '../modules/footer.js'
const footer = new Footer(mainContent.elementContainer);
footer.create();