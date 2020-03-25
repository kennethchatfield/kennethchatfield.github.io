

class Image {
    constructor(id, parent ) {
      this.id = id;
      this.parent = parent;
    }
  
    create( src, alt ) {
        this.picture = document.createElement('picture');
        this.element = document.createElement('img');
        this.element.id = this.id;
        this.element.src = src;
        this.element.alt = alt;

        this.picture.appendChild( this.element )

        if( this.parent ) this.parent.append(this.picture);

      }

  }
  
  export { Image };
  