

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
      this.elementContainer.appendChild( this.element );
      this.parent.append( this.elementContainer );
    }
    createSiteHeaderScrollEvent( siteHeader ){
        const onScrollHandler = () => {
            const scrollTop = this.elementContainer.scrollTop;
            if( scrollTop > 5 && siteHeader.visible ){
                siteHeader.toggleVisibility();
                siteHeader.visibleTick = 0;
            } else if(scrollTop < 1 && !siteHeader.visible ) {
                if( siteHeader.visibleTick > 1 ){
                    siteHeader.toggleVisibility();
                } else if( siteHeader.visibleTick < 10 ) {
                    this.elementContainer.scrollTop = 1;
                    siteHeader.visibleTick++;
                }
            }
        };

        this.elementContainer.onscroll = onScrollHandler;
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
  