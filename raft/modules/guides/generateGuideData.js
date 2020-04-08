import { getRandomInt } from "../../js/utilities.js";

const rivers = [
    "Kootenai River - Montana",
    "Koyuk River - Alaska",
    "Colorado River, Arizona",
    "Salmon River, Idaho",
    "Chattooga River, South Carolina/Georgia",
    "Gauley River, West Virginia",
    "Arkansas River, Colorado",
    "Nahatlatch River, British Columbia",
    "Kennebec River and Dead River, Maine",
    "Youghiogheny, Maryland and Pennsylvania",
    "Tuolumne River, California",
    "Rio Santa Maria, Mexico"
];

const getRandomRiver = () => rivers[Math.floor(Math.random() * rivers.length)];

const getRandomRivers = ( count ) => {
    let randomRivers = [];
    for(let i = 0; i< count; i++){
        let randomRIver = getRandomRiver();
        while ( randomRivers.includes(randomRIver) ){
            randomRIver = getRandomRiver();
        }
        randomRivers.push( randomRIver )
    }
    return randomRivers;
};

const source = [
    {
        gender: "male",
        name: {
            first: "Jose",
            last: "Santos"
        },
        dob: {
            date: "1976-03-07T00:58:14.867Z",
            age: 44
        },
        start: {
            date: "2002-06-23T00:22:42.509Z",
            age: 18
        },
        otherPersonalInfo: ["Baking, Bartending"]
    },
    {
        gender: "female",
        name: {
            first: "Ella",
            last: "Davies"
        },
        dob: {
            date: "1978-03-19T14:40:24.148Z",
            age: 42
        },
        start: {
            date: "2002-06-15T04:51:37.464Z",
            age: 18
        },
        otherPersonalInfo: ["Wine Making"]
    },
    {
        gender: "male",
        name: {
            first: "Majid",
            last: "Spigt"
        },
        dob: {
            date: "1960-04-16T10:54:58.148Z",
            age: 60
        },
        start: {
            date: "2017-09-30T02:10:39.449Z",
            age: 3
        },
        otherPersonalInfo: ["Playing The Stock Market"]
    },
    {
        gender: "male",
        name: {
            first: "Cory",
            last: "Pierce"
        },
        dob: {
            date: "1965-04-04T12:30:42.604Z",
            age: 55
        },
        start: {
            date: "2019-06-25T11:54:03.720Z",
            age: 1
        },
        otherPersonalInfo: ["Beekeeping"]
    },
    {
        gender: "female",
        name: {
            first: "Ahlam",
            last: "Lervik"
        },
        dob: {
            date: "1968-11-21T10:02:53.160Z",
            age: 52
        },
        start: {
            date: "2010-10-04T00:54:29.437Z",
            age: 10
        },
        otherPersonalInfo:[ "Programming"]
    },
    {
        gender: "female",
        name: {
            first: "Morgane",
            last: "Bourgeois"
        },
        dob: {
            date: "1960-08-15T21:47:17.159Z",
            age: 60
        },
        start: {
            date: "2017-12-15T12:39:13.583Z",
            age: 3
        },
        otherPersonalInfo: ["Tattoo Artist"]
    },
    {
        gender: "female",
        name: {
            first: "Yara",
            last: "Moussa"
        },
        dob: {
            date: "1995-05-20T20:33:13.178Z",
            age: 25
        },
        start: {
            date: "2017-11-25T04:35:48.152Z",
            age: 3
        },
        otherPersonalInfo: ["Performing Stand Up Comedy"]
    },
    {
        gender: "male",
        name: {
            first: "Wayne",
            last: "Ray"
        },
        dob: {
            date: "1957-05-18T09:08:02.289Z",
            age: 63
        },
        start: {
            date: "2003-10-22T13:05:31.498Z",
            age: 17
        },
        phone: "03-0500-2950",
        otherPersonalInfo: ["Plays the guitar"]
    },
    {
        gender: "male",
        name: {
            first: "Ritthy",
            last: "Parker"
        },
        dob: {
            date: "1970-06-28T08:37:49.003Z",
            age: 50
        },
        start: {
            date: "2003-08-09T17:29:28.342Z",
            age: 17
        },
        phone: "07-4387-5093",
        otherPersonalInfo: ["Motor Head"]
    },
    {
        gender: "male",
        name: {
            first: "Lachlan",
            last: "Wood"
        },
        dob: {
            date: "1963-07-17T18:19:08.041Z",
            age: 57
        },
        start: {
            date: "2014-08-22T03:37:06.266Z",
            age: 6
        },
        phone: "(535)-620-5059",
        otherPersonalInfo: ["Financial Planning"]
    },
    {
        gender: "female",
        name: {
            first: "Daniela",
            last: "Cruz"
        },
        dob: {
            date: "1998-07-12T14:32:37.476Z",
            age: 22
        },
        start: {
            date: "2015-11-15T08:25:46.713Z",
            age: 5
        },
        phone: "992-739-518",
        otherPersonalInfo: ["Photography"]
    },
    {
        gender: "male",
        name: {
            first: "Christoffer",
            last: "Hansen"
        },
        dob: {
            date: "1980-07-29T14:49:38.650Z",
            age: 40
        },
        start: {
            date: "2012-04-18T09:27:32.865Z",
            age: 8
        },
        phone: "25078584",
        otherPersonalInfo: ["Youtube channel all about rapids! Check me out!"]
    },
    {
        gender: "male",
        name: {
            first: "Elias",
            last: "Maki"
        },
        dob: {
            date: "1994-05-22T06:48:42.563Z",
            age: 26
        },
        start: {
            date: "2008-04-06T12:29:33.560Z",
            age: 12
        },
        phone: "03-200-056",
        otherPersonalInfo:[ "Fitness Instructor"]
    },
    {
        gender: "female",
        name: {
            first: "Ellen",
            last: "Burns"
        },
        dob: {
            date: "1996-06-08T06:07:54.892Z",
            age: 24
        },
        start: {
            date: "2008-01-29T23:31:25.676Z",
            age: 12
        },
        phone: "(789)-026-0857",
        otherPersonalInfo: [" Becoming A Fitness Instructor"]
    }
];

export default ( ) => {


    return source.map( (sourceItem, index) => {
        const { name, gender, dob, start, phone, otherPersonalInfo, tour } = sourceItem;
        const picture = `https://randomuser.me/api/portraits/${ gender === "male" ? "men" : "women" }/${8+index}.jpg`;
        const riverCount = getRandomInt(2,4);
        return {
            gender,
            name,
            start,
            phone: phone || "011-962-7516",
            picture,
            email: `${name.first}.${name.last}@example.com`,
            dob: Object.assign({}, { date: "1993-07-20T09:44:18.674Z", age: 26, state: "California", city: "Lotus", nation: "USA"}, dob ),
            tour: tour || {
                count: riverCount * getRandomInt(25, 45) + getRandomInt(0,1),
                rivers: getRandomRivers( riverCount )
            },
            otherPersonalInfo:  otherPersonalInfo || [
                "Only has eight toes!"
            ]
        }
    })
};






//example
// {
//     name:{
//         first: "James",
//             last: "Matthews",
//     },
//     gender: "male",
//         email: "guide-email@example1.com",
//     dob: {
//     date: "1993-07-20T09:44:18.674Z",
//         age: 26,
//         state: "California",
//         city: "Lotus"
// },
//     start: {
//         date: "2002-05-21T10:59:49.966Z",
//             age: 17
//     },
//     phone: "011-962-7516",
//         picture: "https://randomuser.me/api/portraits/men/75.jpg",
//     tour:{
//     count: 40,
//         rivers: [
//         "South Fork American River",
//         "Salmon River"
//     ]
// },
//     otherPersonalInfo: [
//         "Only has eight toes!"
//     ]
// }