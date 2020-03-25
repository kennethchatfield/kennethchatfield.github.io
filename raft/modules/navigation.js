const pages = {
    "home":{
        name: "Home"
    },
    "river-guide":{
        name: "River Guide"
    },
    "contact":{
        name: "Contact Information"
    },
    "reservations":{
        name: "Reservations"
    }
}

class Navigation {
    constructor(id, parent ) {
      this.id = id || "nav-menu";
      this.parent = parent || document.body;
    }
  
    create() {
        this.container = document.createElement('div');
        this.container.id = this.id;
        this.element = document.createElement('nav');

        this.createNavList();

        this.container.appendChild(this.element);
        this.parent.appendChild(this.container);

      }

      createNavList(){
        this.listWrapper = document.createElement('ul');
        this.listItems = Object.assign({},
          ...Object.keys( pages ).map( pageId =>{
            const listItem = this.createListItem( pageId, pages[pageId].name );
            this.listWrapper.appendChild( listItem );
            return {
              [ pageId ]: listItem
            }
        })
          );
        this.element.appendChild( this.listWrapper  );
      }
  
      createListItem( pageId, pageName ){
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          const href = `../${pageId}`;
          link.href = href;
          link.innerHTML = pageName;
          listItem.appendChild( link )
          return listItem;
      }
      setActivePage( pageId ){
        this.listItems[ pageId ].classList.add("active");
      }



  }
  
  export { Navigation };
  