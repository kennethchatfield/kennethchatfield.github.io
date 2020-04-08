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
    const input = this.createInput( "tel", name );
    input.pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
    input.onkeyup = event => {
      const value = event.target.value;
      let num = value.replace(/-/g,'');
      let result = '';
      if( num.length > 10 ) input.pattern = "[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}";
      num.split("").map((number,index) => {
        if( num.length > 10 ){
          if( index > 0 && index < 9 && (index + 2) % 3 === 0  ) result += "-";
        } else {
          if( index > 0 && index < 7 && index % 3 === 0  ) result += "-";
        }
        result += number;
      });
      input.value = result;
    };
    const label = this.createLabel( "Phone Number:", input.id );
    return this.addToFormInputs(name, input, label);
  }
  createAdventureSelection(){}
  createStartDate(){
    const name = "start-input";
    const input = this.createInput( "date", name );
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
  createSubmitButton( ){
    const input = document.createElement("input");
    input.type = "submit";
    input.classList.add(`form-submit`);
    return input;
  }
  getFormInputValues(){
    return Object.assign({},
        ...Object.values(this.inputs).map( input => ({
          [input.name]: input.element.value
        }))
    );
  }
  getViewOnlyForm(){
    const fieldSet = document.createElement('fieldset');
    fieldSet.classList.add("submission-results");
    fieldSet.disabled = true;
    Object.values(this.inputs).map(inputObj => {
      fieldSet.appendChild( inputObj.container )
    });
    const readOnlyForm = document.createElement('form');
    readOnlyForm.classList.add("site-form");
    readOnlyForm.appendChild(fieldSet);
    return readOnlyForm;
  }
  createReservationsFormSubmitButton( mainContent ){
    const submitButton = this.createSubmitButton();
    this.element.onsubmit = () => {
      const readOnlyForm = this.getViewOnlyForm();
      const title = document.createElement('h1');
      title.classList.add("page-title");
      title.innerHTML = "Submission Successful! Review Below.";
      mainContent.innerHTML = "";
      mainContent.prepend( title );
      mainContent.appendChild( readOnlyForm );
    };
    this.element.appendChild( submitButton );
  }

  createReservationsForm( activity, mainContent ){
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
    fullNameInput.element.required = true;
    const phoneInput = this.createPhone();
    phoneInput.element.required = true;
    const emailInput = this.createEmail();
    emailInput.container.classList.add("section-end");
    emailInput.element.required = true;
    const startDateInput = this.createStartDate();
    startDateInput.element.required = true;
    startDateInput.container.classList.add( "section-start" );
    const commentInput = this.createComment();
    commentInput.container.classList.add("column");
    this.createReservationsFormSubmitButton( mainContent );
  }

  createContactForm( mainContent ){
    this.formCount = "";
    this.create();
    const fullNameInput = this.createFullName();
    fullNameInput.container.classList.add("section-start");
    fullNameInput.element.required = true;
    const phoneInput = this.createPhone();
    phoneInput.element.required = true;
    const emailInput = this.createEmail();
    emailInput.container.classList.add("section-end");
    emailInput.element.required = true;
    const commentInput = this.createComment();
    commentInput.container.classList.add("section-start");
    commentInput.container.classList.add("column");
    this.createReservationsFormSubmitButton( mainContent );
  }
}

Form.prototype.createSelectOptions = createSelectOptions;

export { Form };