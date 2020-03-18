//Erstellen wir also für jeden Kartentyp ein Array, 
// das die Objekte enthält, die jede Karte repräsentieren.
//  Diese Arrays sollten als suspectsArray, weaponsArray,
//   roomsArray benannt werden.


// const suspectsArra =
//     [
//         firstName = 'Jacob',
//         lastName = 'Green',
//         occupation = 'Entrepreneur',




//         firstName = "Anna",
//         lastName = "Black",
//         occupation = "Designer"

//     ]


// console.log(suspectsArra)

// document.getElementById("demo").innerHTML = suspectsArra;

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"

    },
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"


    },
    {
        firstName: "Victor",
        lastName: "Plum occupation: Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"
    },
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue"
    },
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
];
console.log(suspectsArray)


const weaponsArray = [
    {
        name: "rope",
        weight: 10

    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: "candlestick",
        weight: 2

    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    }




]
const roomArray = [

    "Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge",
    "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"]

const randomroom = roomArray[Math.floor(Math.random() * roomArray.length)];
console.log("randomroom", randomroom)
console.log(roomArray)

console.log(weaponsArray)
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const randomperson = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];

console.log("random person", randomperson);

const randomweapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
console.log("randomweapon", randomweapon)


// const weaponsArray = [{ name: "pistole", "gewicht 300gr"},]{

// }

// var fruits, text;
// fruits = ["Banana", "Orange", "Apple", "Mango"];

// text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";
// document.getElementById("demo").innerHTML = text;