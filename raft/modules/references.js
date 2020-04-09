import referencesComponent from "../components/references.js";

class References {
  constructor( parent, id ) {
    this.id = id || "references-list";
    this.parent = parent;
  }

  create() {
    this.element = referencesComponent();
    if( this.id ) this.element.id = this.id;
    if( this.parent ) this.parent.appendChild( this.element );
  }

}

export { References };
