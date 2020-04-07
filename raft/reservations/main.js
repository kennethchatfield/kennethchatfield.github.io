console.log('RESERVATIONS.js')

import { MainContent } from '../modules/mainContent.js'
import { Navigation } from '../modules/navigation.js'
import { Footer } from '../modules/footer.js'
import { SiteHeader } from '../modules/siteHeader.js'
import { Activities } from '../modules/activities/index.js';
import { Filter } from '../modules/filter/index.js';

import { filterDefinitions } from '../modules/activities/definitions.js';
import activitiesMap from "../modules/activities/activitiesMap.js";

const pageId = "reservations";

const navigation = new Navigation();
navigation.create();
navigation.setActivePage( pageId );

const siteHeader = new SiteHeader(navigation.container);
siteHeader.create();

const mainContent = new MainContent();
mainContent.create();
// mainContent.addTitle("Find an adventure that fits you!");
mainContent.createSiteHeaderScrollEvent(siteHeader);



const activities = new Activities( mainContent.element, activitiesMap );
activities.create();
// activities.createActivitiesFilter();

// parent, id, filterDefinitions, fullList, clearList, createList
const filter = new Filter({
    fullList: activitiesMap,
    parent: activities.element,
    filterDefinitions: filterDefinitions,
    clearList: activities.clearActivities.bind(activities),
    createList: activities.createActivities.bind(activities)
});
filter.create();

const footer = new Footer(mainContent.elementContainer);
footer.create();
