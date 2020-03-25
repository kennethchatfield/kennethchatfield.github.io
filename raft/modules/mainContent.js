

class MainContent {
    constructor(id, parent ) {
      this.id = id || "main-content";
      this.parent = parent || document.body;
    }
  
    create() {
        this.element = document.createElement('main');
        this.element.id = this.id;
        this.parent.append(this.element);
    }

    addTitle( title ){
        this.title = document.createElement('h1');
        this.title.classList.add("page-title");
        this.title.innerHTML = title;
        this.element.prepend( this.title );
    }

  }
  
  export { MainContent };
  