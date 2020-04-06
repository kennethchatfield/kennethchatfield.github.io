import { createSelectOptions } from '../js/utilities.js';
import { getActivityNameOptions, getActivityTypeOptions } from "./activities/definitions.js";


class Form {
  constructor( parent, id ) {
    this.id = id;
    this.parent = parent;
  }

  create() {
    this.element = document.createElement('form');
    this.element.classList.add("site-form");
    if( this.id ) this.element.id = this.id;


    if( this.parent ) this.parent.appendChild(this.element);
  }
  addToFormInputs(name, input, label){
    if(!this.inputs) this.inputs = {};
    const formInputContainer = this.createFormInputContainer( input, label );
    this.inputs[name] = {
      name,
      element: input,
      label,
      container: formInputContainer
    };
    this.element.appendChild( formInputContainer );
    return this.inputs[name];
  }
  createFormInputContainer( input, label ){
    const formInputContainer = document.createElement("div");
    formInputContainer.classList.add("form-input-container");
    formInputContainer.appendChild(label);
    formInputContainer.appendChild(input);
    return formInputContainer;
  }
  createLabel(labelText, forId){
    const label = document.createElement("label");
    label.classList.add("form-label");
    label.innerHTML = labelText;
    if( forId ) label.htmlFor = forId;
    return label;
  }
  createTextArea( name ){
    const textarea = document.createElement("textarea");
    if( name ) {
      textarea.name = name;
      textarea.id = name + this.formCount;
    }
    textarea.classList.add(`form-input`);
    return textarea;
  }
  createInput( type, name ){
    const input = document.createElement("input");
    if( name ) {
      input.name = name;
      input.id = name + this.formCount;
    }
    input.type = type;
    input.classList.add(`form-input`);
    return input;
  }
  createSelect( name, options ){
    const select = document.createElement("select");
    if( name ) {
      select.name = name;
      select.id = name + this.formCount;
    }
    if( options ) this.createSelectOptions(options, select);
    select.classList.add(`form-input`);
    return select;
  }
  createAdventureName(){
    const name = "adventure-name";
    const select = this.createSelect(name, getActivityNameOptions("Select Activity Name"));
    const label = this.createLabel("Activity Name:", select.id);

    return this.addToFormInputs(name, select, label);
  }
  createAdventureType(){
    const name = "adventure-type";
    const select = this.createSelect(name, getActivityTypeOptions("Select Activity Type"));
    const label = this.createLabel("Activity Type:", select.id);

    return this.addToFormInputs(name, select, label);
  }
  createFullName(){
    const name = "full-name-input";
    const input = this.createInput( "text", name );
    const label = this.createLabel("Full Name:", input.id);
    return this.addToFormInputs(name, input, label);
  }
  createEmail(){
    const name = "email-input";
    const input = this.createInput( "email", name );
    const label = this.createLabel( "Email:", input.id );
    return this.addToFormInputs(name, input, label);
  }
  createPhone(){
    const name = "phone-input";
    const input = this.createInput( "phone", name );
    const label = this.createLabel( "Phone Number:", input.id );
    return this.addToFormInputs(name, input, label);
  }
  createAdventureSelection(){}
  createStartDate(){
    const name = "start-input";
    const input = this.createInput( "calendar", name );
    const label = this.createLabel( "Start Date:", input.id );
    return this.addToFormInputs(name, input, label);
  }
  createComment(){
    const name = "comment-input";
    const textarea = this.createTextArea( name );
    const label = this.createLabel( "Contact/Questions", textarea.id );
    return this.addToFormInputs(name, textarea, label);
  }
  setInputAttribute(name, attributeName, attributeValue){
    if( this.inputs[name] ){
      this.inputs[name].element[attributeName] = attributeValue
    }
  }

  createFormSubmitButton(){

  }

  createReservationsForm( activity ){
    this.formCount = activity.index;
    this.create();
    const adventureNameInput = this.createAdventureName();
    adventureNameInput.element.value = activity.index;
    adventureNameInput.element.disabled = true;
    const adventureTypeInput =this.createAdventureType();
    adventureTypeInput.element.value = activity.adventureType;
    adventureTypeInput.element.disabled = true;
    adventureTypeInput.container.classList.add("section-end");
    const fullNameInput = this.createFullName();
    fullNameInput.container.classList.add("section-start");
    this.createPhone();
    const emailInput = this.createEmail();
    emailInput.container.classList.add("section-end");
    const startDateInput = this.createStartDate();
    startDateInput.container.classList.add( "section-start" );
    const commentInput = this.createComment();
    commentInput.container.classList.add("column");
  }
}

Form.prototype.createSelectOptions = createSelectOptions;

export { Form };