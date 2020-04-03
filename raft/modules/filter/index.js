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
import {Activities} from "../activities";

class Filter {
    constructor({parent, id, filterDefinitions, fullList, clearList, createList}) {
        this.id = id||"filter-container";
        this.parent = parent;
        this.filterDefinitions = filterDefinitions;
        this.list = fullList;
        this.fullList = fullList;
        this.clearList = clearList;
        this.createList = createList;
    }

    create( parent ) {
        this.parent = parent || this.parent;
        this.element = document.createElement('div');
        if(this.id) this.element.id = this.id;


        this.parent.append(this.element );
    }
}

Filter.prototype.onFiltersUpdate = onFiltersUpdate;
Filter.prototype.createFilterList = createFilterList;
Filter.prototype.removeActiveFilterFromOptions = removeActiveFilterFromOptions;
Filter.prototype.addNewFilter = addNewFilter;
Filter.prototype.createAddFilterButton = createAddFilterButton;
Filter.prototype.createActivitiesFilter = createActivitiesFilter;
Filter.prototype.createActivitiesFilterHeader = createActivitiesFilterHeader;
Filter.prototype.createSelectFilterContainer = createSelectFilterContainer;
Filter.prototype.clearActiveInputs = clearActiveInputs;
Filter.prototype.createSelectFilter = createSelectFilter;
Filter.prototype.createSelectOption = createSelectOption;
Filter.prototype.createSelectFilterOption = createSelectFilterOption;
Filter.prototype.addToInputs = addToInputs;
Filter.prototype.createFilterInputs = createFilterInputs;
Filter.prototype.updateListCounter = updateListCounter;
Filter.prototype.createListCounter = createListCounter;

export { Filter };
