





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
  createInput( type ){
    const input = document.createElement("input")
    input.type = type;
    input.classList.add(`form-input`);
    return input;
  }
  createFullName(){}
  // email, phone, adventure selection, start date selection, and a question/comment
  createEmail(){}
  createPhone(){}
  createAdventureSelection(){}
  createStartDate(){}
  createComment(){}
}

export { Form };