
const toTitleCase = (str) => {
    return (str||"")
    .replace("-"," ")
    .replace(
      /\w\S*/g,
      function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  };
const camelize = (str) => {
    return toTitleCase(str).replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  };