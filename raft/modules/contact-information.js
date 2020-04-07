


class ContactInformation {
  constructor( parent, id ) {
    this.id = id || "contact-information-container";
    this.parent = parent;
  }

  create() {
    this.element = document.createElement('div');
    if( this.id ) this.element.id = this.id;

    this.createHeader();
    this.createMap();

    if( this.parent ) this.parent.prepend(this.element);
  }


}

export { ContactInformation };
