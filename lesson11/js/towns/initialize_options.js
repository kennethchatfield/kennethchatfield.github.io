const activePage = (document.querySelector("#nav-items a.active-page")||{}).id;

const optionsByPage = {
  "preston-page":{
    cityId: 5604473,
    name: "Preston"
  },
  "soda-springs-page": {
    cityId: 5604473,
    name: "Soda Springs"
  },
  "fish-haven-page": {
    cityId: 5604473,
    name: "Fish Haven"
  }
}

const defaultOptions = {
  APIKEY: "ab77c470222b292dac0b5ace3c31fb06",
  targetTime: '18:00:00',
  units: 'imperial'
}

const options = Object.assign({}, defaultOptions, optionsByPage[activePage]);