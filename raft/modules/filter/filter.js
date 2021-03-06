



export function onFiltersUpdate(){
    this.clearList();
    let list = this.fullList;
    if( this.filters ) Object.keys( this.filters ).map( filterId => {
        const filter = this.filterDefinitions[ filterId ].filter;
        const list_var = list.map( listItem => (
            Object.assign({}, listItem, {
                _var: Object.assign({},
                    ...Object.keys( this.filters[ filterId ]  ).map( filterInputId =>{
                        let inputElementValue = this.filters[ filterId ][ filterInputId ].value;
                        const inputType = this.filters[ filterId ][ filterInputId ].type;
                        if( inputType === "number" && inputElementValue ) inputElementValue = parseFloat( inputElementValue );
                        else if( !inputElementValue ) inputElementValue = undefined;
                        return { [filterInputId]: inputElementValue }
                    })
                )
            })
        ));
        const filteredList_var = list_var.filter( filter );
        list = filteredList_var.map( item => {
            if(item._var) delete item["_var"];
            return item;
        })
    });
    if( this.activeInputsReady && !this.addFilterButton ){
        this.createAddFilterButton()
    } else if( !this.activeInputsReady && this.addFilterButton ){
        this.filtersContainer.removeChild( this.addFilterButton );
        delete this.addFilterButton;
    }
    if( this.emptyResultsContainer ){
        this.listParent.removeChild( this.emptyResultsContainer );
        delete this.emptyResultsContainer;
    }
    this.verifyFilterHeaderText();
    this.createList( list, this.createEmptyResults.bind(this) );
    this.list = list;
    this.updateListCounter();
}

export function createEmptyResults( parent ){
    this.emptyResultsContainer = document.createElement('div');
    this.listParent = parent;
    const emptyResultsHeader = document.createElement('h2');
    const clearFiltersButton = document.createElement('input');
    this.emptyResultsContainer.classList.add("empty-results-container");
    emptyResultsHeader.classList.add("empty-results-header");
    clearFiltersButton.classList.add("clear-filters-button");
    emptyResultsHeader.innerHTML = "Empty Results";
    clearFiltersButton.type = "submit";
    clearFiltersButton.value = "Clear Filters";
    clearFiltersButton.onclick = () => {
        this.clearActiveInputs(true);
        this.element.innerHTML = "";
        this.create();
        this.onFiltersUpdate();
        parent.removeChild( this.emptyResultsContainer );
    };
    this.emptyResultsContainer.appendChild(emptyResultsHeader);
    this.emptyResultsContainer.appendChild(clearFiltersButton);
    parent.appendChild( this.emptyResultsContainer );
}

export function createFilterList(){
    this.filterList = document.createElement('div');
    this.filterList.classList.add("filter-list");
    this.filterHeaderContainer.appendChild( this.filterList  );
}
export function removeActiveFilterFromOptions(){
    const activeSelectFilterOption = this.selectFilterOptions[ this.activeFilterId ];
    this.selectFilterOptions.default.innerHTML = "Select Filter...";
    this.selectFilter.removeChild( activeSelectFilterOption );
}
export function clearActiveInputs( hardRemove ){
    this.activeInputsReady = false;
    if( this.addFilterButton ){
        this.filtersContainer.removeChild( this.addFilterButton );
        delete this.addFilterButton;
    }
    if( this.activeFilterInputs ){
        this.selectFilterContainer.removeChild( this.activeFilterInputs );
        delete this.activeFilterInputs;
        if( this.filters[ this.activeFilterId ] ){
            delete this.filters[ this.activeFilterId ];
            if(Object.keys( this.filters ).length === 0){
                delete this.filters;
            }
        }
        if( hardRemove ){
            this.filterDefinitions[ this.activeFilterId ].inputs = Object.assign({},
                ...Object.values( this.filterDefinitions[ this.activeFilterId ].inputs ).map( inputDef => {
                    if( inputDef.value !== undefined ) delete inputDef.value;
                    return {
                        [ inputDef.id ]: inputDef
                    }
                })
            )
        }
        this.activeFilterId = "";
    }
}
export function addNewFilter(){
    const activeFilter = this.filterDefinitions[ this.activeFilterId ];
    this.removeActiveFilterFromOptions();
    this.clearActiveInputs();
    const filterInputElements = this.createFilterInputs( activeFilter, this.filterList, true );
    this.selectFilter.value = this.activeFilterId;
}
export function createAddFilterButton(){
    this.addFilterButton = document.createElement('input');
    this.addFilterButton.classList.add("add-filter-button");
    this.addFilterButton.value = "+ Add Filter";
    this.addFilterButton.type = "submit";
    this.addFilterButton.onclick = () => {
        this.addNewFilter();
    };
    this.filtersContainer.prepend( this.addFilterButton );
}
export function addToInputs(filterId, inputId, element){
    if(!this.filters) this.filters = {};
    if(!this.filters[filterId]) {
        this.filters[filterId] = {};
    }
    this.filters[filterId][inputId] = element;
}


export function createFilter(){
    this.filtersContainer = document.createElement('div');
    this.filtersContainer.classList.add("filters-container");
    this.createFilterHeader();
    this.createSelectFilterContainer();
    this.createFilterList();
    this.createListCounter();
    this.element.prepend( this.filtersContainer );
}
export function updateListCounter(){
    if( this.listCounterContainer ){
        this.listCurrentCount.innerHTML = this.list.length + "";
        this.listFullCount.innerHTML = this.fullList.length + "";
    }
}
export function createListCounter() {
    this.listCounterContainer = document.createElement('div');
    this.listCurrentCount = document.createElement('div');
    this.listFullCount = document.createElement('div');
    this.counterDivider = document.createElement('div');
    this.listCounterContainer.classList.add("list-counter-container");
    this.listCurrentCount.classList.add("list-counter-current");
    this.listFullCount.classList.add("list-counter-full");
    this.counterDivider.classList.add("counter-divider");
    this.counterDivider.innerHTML = "/";

    this.listCounterContainer.appendChild( this.listCurrentCount );
    this.listCounterContainer.appendChild( this.counterDivider );
    this.listCounterContainer.appendChild( this.listFullCount );

    this.filtersContainer.appendChild( this.listCounterContainer );
    this.updateListCounter();
}
export function verifyFilterHeaderText() {
    if( !this.addFilterButton && !this.filtersHeader ){
        this.filtersHeader = document.createElement('h2');
        this.filtersHeader.classList.add("filters-header");
        this.filtersHeader.innerHTML = "Active Filters";
        this.filtersContainer.prepend( this.filtersHeader );
    } else if( this.addFilterButton && this.filtersHeader ){
        this.filtersContainer.removeChild( this.filtersHeader );
        delete this.filtersHeader;
    }

}
export function createFilterHeader(){
    this.filterHeaderContainer = document.createElement('div');
    this.filterHeaderContainer.classList.add("filter-header-container");

    this.verifyFilterHeaderText();

    this.filtersContainer.appendChild( this.filterHeaderContainer );
}
export function createSelectFilterContainer(){
    this.selectFilterContainer = document.createElement('div');
    this.selectFilterContainer.classList.add("select-filter-container");


    this.createSelectFilter();

    this.filterHeaderContainer.appendChild( this.selectFilterContainer );
}
export function createSelectFilter(){
    this.selectFilter = document.createElement('select');
    this.selectFilter.classList.add("select-filter");

    const placeHolderFilter = { id: "", name: "Display All" };
    this.selectFilterOptions = {
        default: this.createSelectFilterOption( placeHolderFilter ),
        ...Object.assign({},
            ...Object.values( this.filterDefinitions ).map( filter => {
                return {[filter.id]:this.createSelectFilterOption( filter )}
            })
        )
    };

    this.selectFilter.onchange = event => {
        const filterId = event.target.value;
        const filterObj = this.filterDefinitions[ filterId ];
        this.clearActiveInputs( true );
        if( filterObj ){
            this.activeFilterInputs = this.createFilterInputs(filterObj, this.selectFilterContainer)
        }
        this.activeFilterId = filterId;
        this.onFiltersUpdate();
    }

    this.selectFilterContainer.appendChild( this.selectFilter );
    // this.onFiltersUpdate();
}


export function createSelectFilterOption(filterObj){
    return this.createSelectOption(filterObj, this.selectFilter, "select-filter-option");
}
export function createFilterInputs(filter, parent, addLabel){
    if(filter.inputs){
        const filterInputsContainer = document.createElement('div');
        filterInputsContainer.classList.add("filter-inputs-container");

        if( addLabel ){
            const filterInputsLabel = document.createElement('div');
            filterInputsLabel.classList.add("filter-inputs-label");
            filterInputsLabel.innerHTML = filter.name + ":";
            filterInputsContainer.appendChild( filterInputsLabel );
        }

        Object.values( filter.inputs ).map( filterInput => {
            const filterInputContainer = document.createElement('div');
            const filterInputLabel = document.createElement('label');
            const filterInputElement = document.createElement(filterInput.tag);
            if( filterInput.tag === "select" && filterInput.selectOptions ){
                filterInput.selectOptions.map( optionData => {
                    this.createSelectOption(optionData, filterInputElement, "filter-input-option");
                })
            }
            filterInputContainer.classList.add("filter-input-container");
            filterInputLabel.classList.add("filter-input-label");
            filterInputElement.classList.add("filter-input");
            if( filterInput.tag === "input") {
                filterInputElement.type = filterInput.type;
                filterInputElement.addEventListener('input', function(){
                    if( this.value.length < 5 ) this.style.width = '5ch';
                    else if( this.value.length < 15 ){
                        this.style.width = this.value.length + 1 + "ch";
                    }

                });
            }
            filterInputElement.id = `filters-${filter.id}-${filterInput.id}`;
            filterInputLabel.forId = filterInputElement.id;
            filterInputLabel.innerHTML = filterInput.name;
            if( filterInput.value !== undefined ) filterInputElement.value = filterInput.value;
            filterInputElement.onchange = (event) => {
                const value = event.target.value;
                if( filter.id === this.activeFilterId ){
                    if(!this.activeInputsReady && value !== "" && value !== undefined ){
                        this.activeInputsReady = true;
                    }
                    if( this.activeInputsReady && value === ""){
                        const missingAllInputs = !this.filters[ this.activeFilterId ] ? true : Object.values( this.filters[ this.activeFilterId ] ).every( inputElement => (
                            inputElement.value === "" || inputElement.value === undefined
                        ));
                        if( missingAllInputs ) this.activeInputsReady = false;
                    }
                }

                this.filterDefinitions[ filter.id ].inputs[ filterInput.id ].value = value;
                this.onFiltersUpdate();
            };
            this.addToInputs( filter.id, filterInput.id, filterInputElement );
            if(Object.keys(filter.inputs).length > 1) filterInputContainer.appendChild( filterInputLabel );
            filterInputContainer.appendChild( filterInputElement );
            filterInputsContainer.appendChild( filterInputContainer );
        });
        parent.appendChild( filterInputsContainer );
        return filterInputsContainer;
    }
}