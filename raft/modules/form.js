





class Form {
  constructor( parent, id ) {
    this.id = id;
    this.parent = parent || document.body;
  }

  create() {
    this.element = document.createElement('form');
    if( this.id ) this.element.id = this.id;


    if( this.parent ) this.parent.appendChild(this.element);
  }
  addToFormInputs(id, input, label){
    if(!this.inputs) this.inputs = {};
    this.inputs[id] = {
      id,
      element: input,
      label
    }
    const formInputContainer = this.createFormInputContainer( input, label );
    this.element.appendChild( formInputContainer );
  }
  createFormInputContainer( input, label ){
    const formInputContainer = document.createElement("div")
    formInputContainer.classList.add("form-input-container");
    formInputContainer.appendChild(label);
    formInputContainer.appendChild(input);
    return formInputContainer;
  }
  createLabel(labelText, forId){
    const label = document.createElement("label")
    label.classList.add("form-label");
    label.innerHTML = labelText;
    if( forId ) label.htmlFor = forId;
    return label;
  }
  createTextArea( id ){
    const textarea = document.createElement("textarea")
    if( id ) input.id = id;
    textarea.type = type;
    textarea.classList.add(`form-input`);
    return textarea;
  }
  createInput( type, id ){
    const input = document.createElement("input")
    if( id ) input.id = id;
    input.type = type;
    input.classList.add(`form-input`);
    return input;
  }
  createFullName(){
    const id = "full-name-input";
    const input = this.createInput( "text", id );
    const label = this.createLabel("Full Name", id);
    this.addToFormInputs(id, input, label);
  }
  createEmail(){
    const id = "email-input";
    const input = this.createInput( "text", id );
    const label = this.createLabel( "Email", id );
    this.addToFormInputs(id, input, label);
  }
  createPhone(){
    const id = "phone-input";
    const input = this.createInput( "phone", id );
    const label = this.createLabel( "Phone Number", id );
    this.addToFormInputs(id, input, label);
  }
  createAdventureSelection(){}
  createStartDate(){
    const id = "phone-input";
    const input = this.createInput( "phone", id );
    const label = this.createLabel( "Phone Number", id );
    this.addToFormInputs(id, input, label);
  }
  createComment(){
    const id = "comment-input";
    const textarea = this.createTextArea( id );
    const label = this.createLabel( "Contact/Questions", id );
    this.addToFormInputs(id, textarea, label);
  }
  createReservationsForm(){
    this.create();
    this.createFullName();
    this.createEmail();
    this.createPhone();
    this.createAdventureSelection();
    this.createStartDate();
    this.createComment();
  }
}

export { Form };