import { getRandomItems, groupByCategory } from "../../js/utilities.js";

export const rivers = [
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


export const getRandomRivers = ( count ) => getRandomItems(rivers, count);
export const getRandomInterests = ( count ) => getRandomItems(interestList, count);
export const Fitness = [
    "Running",
    "Personal Trainer",
    "Yoga",
    "Climbing",
    "Lifting Weights",
    "Mountain Biking",
    "Longboarding",
    "Skateboarding",
    "Swimming",
    "Camping"
];
export const Culinary = [
    "Baking",
    "Bartender"
];
export const Arts_and_Crafts = [
    "Tattoo Artist",
    "Acting",
    "Airbrushing",
    "Blacksmith",
    "Book Restoration",
    "Book-binding",
    "Building Dollhouses",
    "Cabaret",
    "Calligraphy",
    "Candle making",
    "Cartooning",
    "Ceramics",
    "Coloring",
    "Crocheting",
    "Cross-Stitch",
    "Digital Arts",
    "Digital Photography",
    "Drawing",
    "Embroidery",
    "Fashion",
    "Felting",
    "Glassblowing",
    "Graffiti",
    "Gunsmith",
    "Handwriting Analysis",
    "Illusion",
    "Impersonations",
    "Jewelry making",
    "Knitting",
    "Knotting",
    "Lace-making",
    "Lapidary",
    "LARPing",
    "Letter-boxing",
    "Needlepoint Art",
    "Origami",
    "Painting",
    "Paper mache",
    "Paper-making",
    "Photography",
    "Pottery",
    "Puppetry",
    "Quilting",
    "Scrap-booking",
    "Sewing",
    "Singing",
    "Sketching",
    "Soap-making",
    "String Figures",
    "Tatting",
    "Taxidermy",
    "Textiles",
    "Topiary",
    "Whittling",
];
export const Miscellaneous = [
    "Action Figures",
    "Amateur Radio",
    "Antiquing",
    "Antiquities",
    "Chess",
    "Crossword puzzles",
    "Cryptography",
    "Dolls",
    "Dominoes",
    "Electronics",
    "Gymnastics",
    "History",
    "Home Theater",
    "Hula Hooping",
    "Inventing",
    "Janggi (Korean Chess)",
    "Jigsaw puzzles",
    "Juggling",
    "Laser Tag",
    "Lego building",
    "Lock-picking",
    "Machining",
    "Magic",
    "Mahjong",
    "Marbles",
    "Meditation",
    "Metalworking",
    "Meteorology",
    "Puzzles",
    "R/C Boats",
    "R/C Cars",
    "R/C Helicopters",
    "R/C Planes",
    "Reading Books",
    "Reading to Children",
    "Reading to the Elderly",
    "Robotics",
    "Role-playing games",
    "Shortwave listening",
    "Speed-cubing (Rubik's cube)",
    "Stand-up Comedy",
    "Sudoku",
    "Table football",
    "Tesla Coils",
    "Tutoring Children",
    "TV watching",
    "Video Games",
    "Watching movies",
    "Watching sporting events",
    "Woodcarving",
    "Woodworking",
    "World-building",
    "Xiangqi (Chinese Chess)"
];
export const Video_Games = [
    "War-hammer",
    "League of Legends",
    "Tetris",
];
export const interestsByCategory = {
    Fitness,
    Culinary,
    Arts_and_Crafts,
    Miscellaneous,
    Video_Games
};
export const interestList = Object.values( interestsByCategory ).reduce( ( results, categoryListItems ) => {
    categoryListItems.map( ( item ) => results.push( item ) );
    return results;
},[]);

export const groupInterestsByCategory = interests => groupByCategory(interests, interestsByCategory);

//filterDefinition
export const filterDefinitions = {
    gender:{
        id: "gender",
        name: "Gender",
        filter: (item) => ( item.gender === item._var.gender || (item._var.gender||"") === "" ),
        inputs: {
            gender: {
                id: 'gender',
                name: 'Gender',
                tag: 'select',
                type: 'text',
                selectOptions:[
                    { id: "", name: "All Genders"},
                    { id: "male", name: "Male"},
                    { id: "female", name: "Female"}
                ]
            }
        }
    },

};