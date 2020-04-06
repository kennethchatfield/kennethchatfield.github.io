

import guideComponent from '../../components/guide.js';

class Guides {
    constructor(parent, guidesData ) {
        this.id = "guides-list-container";
        this.parent = parent;
        this.guidesData = guidesData;
        this.guidesDataFull = guidesData;
    }

    create( ) {
        this.element = document.createElement('div');
        if(this.id) this.element.id = this.id;
        // this.guidesData.map( guidData => {
        //     this.element.innerHTML += JSON.stringify(guidData, null, 4).split('\n').join("<br/> &nbsp") + "<br/>"
        // });
        this.createGuidesList( this.guidesData );


        this.parent.append(this.element );
    }
    clearGuidesList(){
        this.element.removeChild(this.guidesList);
        delete this.guidesList;
        delete this.guideElements;
    }
    createGuidesList( guidesData ){
        this.guidesList = document.createElement('div');
        this.guidesList.classList.add("guides-list");
        this.guideElements = guidesData.map( (guidData) => {
            const guideElement = this.createGuide( guidData );
            this.guidesList.appendChild( guideElement );
            return guideElement;
        });
        this.element.appendChild(this.guidesList);
    }
    createGuide( guidData ){
        const guideContainer = guideComponent( guidData );

        return guideContainer;
    }

}

export { Guides };
