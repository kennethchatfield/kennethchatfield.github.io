console.log('HOME.js')

import { MainContent } from '../modules/mainContent.js'
import { Navigation } from '../modules/navigation.js'
import { Footer } from '../modules/footer.js'
import { SiteHeader } from '../modules/siteHeader.js'
import { WeatherSummary } from './modules/weatherSummary.js';
import { Activities } from '../modules/activities/index.js';

const pageId = "home";
import activitiesMap from "../modules/activities/activitiesMap.js";

const navigation = new Navigation();
navigation.create();
navigation.setActivePage( pageId );

const siteHeader = new SiteHeader(navigation.container);
siteHeader.create();

const mainContent = new MainContent();
mainContent.create( );
mainContent.addTitle("Adventure Awaits! Call: 555.555.5555");
mainContent.createSiteHeaderScrollEvent(siteHeader);

const weatherSummary = new WeatherSummary(mainContent.element);
weatherSummary.create();


const featuredActivities = [ activitiesMap[0], activitiesMap[1], activitiesMap[4] ];

const activities = new Activities( mainContent.element, featuredActivities );
activities.create();
activities.createActivitiesHeader( "Featured Activities and Services" );

const footer = new Footer(mainContent.elementContainer);
footer.create();
