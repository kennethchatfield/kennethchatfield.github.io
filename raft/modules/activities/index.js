

import {
  clearActivities,
  createActivitiesHeader,
  createActivities,
  createActivity,
  createActivityHeader,
  createActivityDetails,
  createActivityServices,
  createActivityPrice,
  createPriceTable,
    createBookAdventureButton
} from './activityList.js';







class Activities {
    constructor( parent, activitiesMap, filterDefinitions ) {
      this.fullList = activitiesMap;
      this.list = activitiesMap;
      this.filterDefinitions = filterDefinitions;
      this.parent = parent;
    }
  
    create(headerText) {
      this.element = document.createElement('div');
      this.element.id = "activities";
      
      if( headerText ) this.createActivitiesHeader( headerText );
      this.createActivities( this.list );

      if( this.parent ) this.parent.append(this.element);
    }

  };




Activities.prototype.createBookAdventureButton = createBookAdventureButton;
Activities.prototype.clearActivities = clearActivities;
Activities.prototype.createActivitiesHeader = createActivitiesHeader;
Activities.prototype.createActivities = createActivities;
Activities.prototype.createActivity = createActivity;
Activities.prototype.createActivityHeader = createActivityHeader;
Activities.prototype.createActivityDetails = createActivityDetails;
Activities.prototype.createActivityServices = createActivityServices;
Activities.prototype.createActivityPrice = createActivityPrice;
Activities.prototype.createPriceTable = createPriceTable;
  
export { Activities };
  