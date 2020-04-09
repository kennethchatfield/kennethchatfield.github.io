

class SiteHeader {
  constructor( parent, id ) {
    this.id = id || "site-header";
    this.parent = parent || document.body;
  }

  create() {
    this.element = document.createElement('div');
    this.element.id = this.id;

    this.visible = true;
    this.addSiteName("Salmon River Adventures")

    if( this.parent ) this.parent.prepend(this.element);
  }
  addSiteName( name ){
    this.siteName = document.createElement('h1');
    this.siteName.classList.toggle("site-name");
    this.siteName.innerHTML = name;
    this.element.appendChild( this.siteName );
  }
  toggleVisibility(){
    this.element.classList.toggle("collapsed");
    if( this.visible ) {
      document.body.style.gridTemplateRows = "auto auto";
      setTimeout(()=>{
        document.body.style.gridTemplateRows = "60px auto";
      }, 300);
      this.visible = false;
    } else {
      document.body.style.gridTemplateRows = "auto auto";
      setTimeout(()=>{
        document.body.style.gridTemplateRows = "310px auto";
      }, 300);
      this.visible = true;
    }
  }

  setVisibility( visible ){
    this.visible = visible;
    if( this.visible && !this.element.classList.contains("collapsed") ) this.element.classList.add("collapsed");
    if( !this.visible && this.element.classList.contains("collapsed") ) this.element.classList.remove("collapsed");
  }


}

export { SiteHeader };
