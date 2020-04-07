import contactInformationComponent from '../components/contact-information.js';
import googleMapComponent from '../components/google-map.js';
import { Form } from "./form.js";

class Contact {
  constructor( parent, id ) {
    this.id = id || "contact-container";
    this.parent = parent;
  }

  create() {
    this.element = document.createElement('div');
    if( this.id ) this.element.id = this.id;

    this.createContactInformation();
    this.createAddressMap();

    if( this.parent ) this.parent.appendChild(this.element);
  }

  createContactInformation(){
    this.contactInformationContainer = document.createElement('div');
    this.contactInformationContainer.classList.add("contact-information-container");
    this.contactInformation = contactInformationComponent();
    this.contactInformationContainer.appendChild( this.contactInformation );
    this.createContactForm();
    this.element.appendChild( this.contactInformationContainer );
  }

  createContactFormHeader(headerText){
    this.contactFormHeader = document.createElement('h2');
    this.contactFormHeader.innerHTML = headerText || "Contact Form";
    this.contactFormContainer.prepend( this.contactFormHeader );
  }

  createContactForm(){
    this.contactFormContainer = document.createElement('div');
    this.contactFormContainer.classList.add("contact-form-container");
    this.createContactFormHeader( );
    this.contactForm = new Form(this.contactFormContainer);
    this.contactForm.createContactForm( this.parent );
    this.contactFormContainer.appendChild( this.contactForm.element );
    this.contactInformationContainer.appendChild( this.contactFormContainer );
  }
  createAddressMap(){
    this.addressMapContainer = document.createElement('div');
    this.addressMapContainer.classList.add("address-map-container");
    this.addressMapHeader = document.createElement('h2');
    this.addressMapHeader.innerHTML = "Lodge Map";
    this.addressMapContainer.prepend( this.addressMapHeader );
    this.addressMap = googleMapComponent({width:'100%'});
    this.addressMapContainer.appendChild( this.addressMap );
    this.element.appendChild( this.addressMapContainer )
  }

}

export { Contact };
