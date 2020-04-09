
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
const getCurrentDayOfWeek = () => {
  let date = new Date();
  return days[ date.getDay() ];
}
const getCurrentDateText = () => {
  let currentDateObject = new Date();

  const dayString = days[ currentDateObject.getDay() ];
  const dateString = currentDateObject.getDate();
  const monthString = months[ currentDateObject.getMonth() ];
  const yearString = currentDateObject.getUTCFullYear();


  return [
    dayString + ",",
    dateString,
    monthString,
    yearString
  ].join(" ");
}


class Footer {
  constructor( parent ) {
    this.id = "site-footer";
    this.parent = parent || document.body;
    this.footerTextPortions = [
      "© Salmon River Adventures",
      "references",
      "Created by Kenneth R. Chatfield",
      getCurrentDateText()
    ];
  }

  create() {
    this.element = document.createElement('footer');
    this.element.id = this.id;

    this.footerTextPortions.map(( footerText, index ) => {
      const footerTextElement = document.createElement('div');
      footerTextElement.classList.add("footer-text");
      if( footerText !== "references" ) footerTextElement.innerHTML = footerText;
      else footerTextElement.innerHTML = `<a href="../references">External References</a>`

      this.element.appendChild( footerTextElement );
      if( index < this.footerTextPortions.length - 1 ){
        const vertRod = document.createElement('div');
        vertRod.classList.add("vertical-rod");
        vertRod.innerHTML = "|";
        this.element.appendChild( vertRod );
      }
    });

    if( this.parent ) this.parent.appendChild(this.element);
  }

}

export { Footer };