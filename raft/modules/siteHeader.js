

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
    this.siteName.classList.toggle("site-name")
    this.siteName.innerHTML = name;
    this.element.appendChild( this.siteName );
  }
  toggleVisibility(){

    if( this.visible ) this.visible = false;
    else this.visible = true;

    this.element.classList.toggle("collapsed")
  }


}

export { SiteHeader };
