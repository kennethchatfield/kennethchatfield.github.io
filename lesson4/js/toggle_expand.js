
function toggleExpand(){
    const menuToggleElement = document.getElementById("nav-menu-toggle-label");
    const classNameString = menuToggleElement.className;
    let classNames = classNameString === "" ? [] : classNameString.split(" ");

    if( classNames.includes("expand")){
        classNames = classNames.filter( className => className !== "expand");
    } else {
        classNames.push( "expand" );
    }

    menuToggleElement.className = classNames.join(" ");
}