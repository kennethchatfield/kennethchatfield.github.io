

class MainContent {
    constructor(id, parent ) {
      this.id = id || "main-content";
      this.parent = parent || document.body;
    }
  
    create() {
      this.elementContainer = document.createElement('div');
      this.element = document.createElement('main');
      this.element.id = this.id;
      this.elementContainer.id = "main-content-container";
      this.elementContainer.appendChild( this.element )
      this.parent.append( this.elementContainer );
    }

    addTitle( title ){
        this.title = document.createElement('h1');
        this.title.classList.add("page-title");
        this.title.innerHTML = title;
        this.element.prepend( this.title );
    }

    addBreaks( limit ){
      for(let index = 0; index < limit; index++){
        let br = document.createElement("br");
        this.element.appendChild( br );
      }
    }

  }
  
  export { MainContent };
  