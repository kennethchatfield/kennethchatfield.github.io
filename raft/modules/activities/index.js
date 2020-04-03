// import filters from './activitiesFilterDefinition.js';
import {
  onFiltersUpdate,
  createFilterList,
  removeActiveFilterFromOptions,
  addNewFilter,
  createAddFilterButton,
  createActivitiesFilter,
  createActivitiesFilterHeader,
  createSelectFilterContainer,
  clearActiveInputs,
  createSelectFilter,
  createSelectOption,
  createSelectFilterOption,
  addToInputs,
  createFilterInputs,
  updateListCounter,
  createListCounter
} from './filter.js';
import {
  clearActivities,
  createActivitiesHeader,
  createActivities,
  createActivity,
  createActivityHeader,
  createActivityDetails,
  createActivityServices,
  createActivityPrice,
  createPriceTable
} from './activityList.js';
// import activitiesMap from "./activitiesMap.js";







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
      
      if( headerText ) this.createActivitiesHeader( headerText )
      this.createActivities( this.list );

      if( this.parent ) this.parent.append(this.element);
    }




  };

Activities.prototype.onFiltersUpdate = onFiltersUpdate;
Activities.prototype.createFilterList = createFilterList;
Activities.prototype.removeActiveFilterFromOptions = removeActiveFilterFromOptions;
Activities.prototype.addNewFilter = addNewFilter;
Activities.prototype.createAddFilterButton = createAddFilterButton;
Activities.prototype.createActivitiesFilter = createActivitiesFilter;
Activities.prototype.createActivitiesFilterHeader = createActivitiesFilterHeader;
Activities.prototype.createSelectFilterContainer = createSelectFilterContainer;
Activities.prototype.clearActiveInputs = clearActiveInputs;
Activities.prototype.createSelectFilter = createSelectFilter;
Activities.prototype.createSelectOption = createSelectOption;
Activities.prototype.createSelectFilterOption = createSelectFilterOption;
Activities.prototype.addToInputs = addToInputs;
Activities.prototype.createFilterInputs = createFilterInputs;
Activities.prototype.updateListCounter = updateListCounter;
Activities.prototype.createListCounter = createListCounter;



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
  