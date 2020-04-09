
  
  class VisibilityButton {
    constructor( parent, id ) {
      this.id = id;
      this.parent = parent || document.body;
      this.display = false;
    }
  
    create(button, content, initialDisplay) {
      if( initialDisplay ) this.display = initialDisplay;
      this.element = document.createElement('div');
      if( this.id ) this.element.id = this.id;
      this.button = button;
      this.content = content;

      this.button.onclick = () => {
          if( this.display ) this.element.removeChild( this.content );
          else this.element.appendChild( this.content );
          this.display = !this.display;
      }

      this.element.appendChild(this.button);
      if( this.display ) this.element.appendChild( this.content );
      this.parent.appendChild( this.element );
    }
  
  }
  
  export { VisibilityButton };