//question no.1

let Name = 'john' ;
console.log( ` Hello ${Name} would you like to learn some typescript today?`);


//question no2
let personNameCases = 'Venisa Sarah';
console.log(personNameCases.toLowerCase());
console.log(personNameCases.toUpperCase());
console.log(personNameCases.charAt(0).toUpperCase() + personNameCases.slice(1).toLowerCase());


//question no.3
let famousQuote = 'dont give up there is no shame in falling down true shame is to not stand up again ' ;
let author = 'Shintaro Midorima';
console.log(`${author} once said, "${famousQuote}"`);


//question no.4
let famousePerson = 'William Shakespeare';
let quote = ` ${famousePerson} once said: All that gliter is not gold.`;
console.log (quote);


//question no.5
let personName = " ArianaGrande";
console.log("Ariana\nGrande");
console.log(personName);
let secondName ="MariumAyaz" ;
console.log("Marium\tAyaz");
console.log(secondName);


//question no.6
console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);


//question no.7
let favoriteName = 7;
console.log(`My favorite number is ${favoriteName}`);


//question no.8


 //Program Name: Dinner Invitation 
 //My Name: [Vanessa Sarah]
 //Date: [11.11.2023]

 //Guest List
let dinnerGuests = ['Sonia', 'Sehba', 'Rose'];

 //Inviting more 
let additionalGuests = ['Aster', 'Eida', 'Boruto'];

 //Printed the invitation message for each guest list
for (let guest of dinnerGuests.concat(additionalGuests)) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

 //One guest can't make it
let guestCantMakeIt = dinnerGuests[1];
console.log(`Unfortunately, ${guestCantMakeIt} can't make it.`);


//question no.9

let names= ['Angel', 'Samantha', 'Rose'];
for (let name of names) {
    console.log(name);
}

//question no.10

let names =['Suzaina','Aster','Farheen' ];
for (let name of names ) {
    console.log(name);
}
 //greetings to all
for (let name of names ) {
    console.log (`Hello ${name}, how are you doing? i hope you're doing well.`);
}

//question no.11

let transportation =['car'];
for (let mode of transportation) {
    console.log(` i will own a bugatti ${mode} one day.`);
}


//question no.12
let DinnerGuest = ['Faiza', 'Shamoun','John'];
for (let guest of DinnerGuest ) {
    console.log(` Hello, ${guest} you are very welcome to the dinner i arrange it for you. `);

}


//question no.13
let GuestsList  = ['faiza', 'shamoun', 'john'];
{
    console.log(` Hello, ${guest} you are very welcome to the dinner i arrange it for you. `);
}
if (Guest_List[1]) 
{
    console.log(`${Guest_List[1]} can't make it.`);
    Guest_List[1] = 'Evangeline';
    for (let guest of Guest_List) 
    {
        console.log(`Hello ${guest}, you are still invited to dinner.`);
    } 
}

//question no.14

let GuestsList  = ['faiza', 'shamoun', 'john'];
for (let guest of GuestsList)
 {
  console.log(`Hello ${guest} you are very welcome to the dinner i arrange.`)
}

console.log('Great news! I found a better and bigger dinner table.');
GuestsList.unshift('larrisa');
GuestsList.splice(2, 0, 'alan walker');
GuestsList.push('evangeline');
for (let guest of GuestsList)
  {
    console.log(`Hello ${guest}, you are invited to the expanded dinner.`);
}

//question no.15

let Guest_List = ['faiza', 'shamoun', 'john', 'larrisa', 'alan walker', 'evangeline' ];

console.log('Aplogize new dinner table did not arrive in time and we are only able to inite two people. ');

while (Guest_List.length > 2) {
    let removedGuest = Guest_List.pop();
    if (removedGuest) {
        console.log(`Pardon, ${removedGuest}, we can't invite you to the dinner.`);
    }
}
for (let remainingGuest of Guest_List)
 {
    console.log(`Hello ${remainingGuest}, you are still invited to dinner.`);
}


//question no.16
let Places = ['Newyork', 'Italy', 'Swirtzerland', 'Spain', 'Denmark', 'France'];
console.log('original order:', Places);
console.log('Alphabetical order:', [Places]. sort());
console.log('Original order still maintain:', Places);
console.log('Reverse alphabetic order:', [Places].sort().reverse());
console.log('orginal order maintain:', Places);
Places.reverse();
console.log('Reversed order :', Places);
Places.reverse();
console.log ('Reversed order again:',Places);
Places.sort();
console.log('Sorted in alphabetic order',Places);
Places.sort().reverse();
console.log('sort in reverse alphabetic order:', Places);

//question no.17

let GuestList = ['Faiza', 'Shamoun', 'John', 'Evangeline', 'Alan walker', 'Larrisa'];
console.log(`I am inviting  ${GuestList.length} people to dinner` );


//question no.18
let mountains= ['Himalayas', 'Rockies','Andes', 'Denali']
console.log('Mountains:', mountains);
let River = ['Rio grande', 'Kabul', 'Indus river', 'Yamuna'];
console.log('River:', River);
let Countries= ['England', 'Japan', 'India','Finland'];
console.log('countries:', Countries);
let cities =['Paris', 'London','Tokyo','Los angelas'];
console.log('Cities:', cities);
let languages = ['Bangoli', 'Spanish', 'Chinese',"Hebrew"];
console.log('Languages:', languages);

//question no.19
let things = {
  Transport : 'bus',
  Food : 'Pasta',
  City: 'London',
  Book: 'how to build a habbit',

};
console.log('things', things);

//question no.20

let aray = [1, 2, 3];
try {
    console.log(aray[3]); 
     //Erros intentional 
} catch (error) {
    console.error('Error:', error.message);
}


//question no.21
let AlienColor = 'Green';
if (AlienColor === 'Green') {
    console.log('Player earned 5 Points');
}


//question no.22
let AlienColor2 = 'red';
if (AlienColor2 === 'Green') {
    console.log('Player earned 5 Points');
}
else {
    console.log('Player got 10 Points!');
}


//question no.23
let AlienColor3 = 'yellow' ;
if (AlienColor3 === 'Green') {
    console.log('Player earned 5 Points');
}
else if (AlienColor3 === 'yellow') {
    console.log('Player got 10 Points!');
}
else if (AlienColor3 === 'red') {
    console.log('Player got 15 Points!');
}


//question no.24
let age = 19;
if (age < 2) {
    console.log('This person is a child.');
} else if (age < 4) {
    console.log('This person is a toddler.');
} else if (age < 13) {
    console.log('This person is a kid.');
} else if (age < 20) {
    console.log('This person is a teenager.');
} else if (age < 65) {
    console.log('Ths person is an adult.');
} else {
    console.log('This person is an older.');
}


//question no.25
let userNames = ['Admin', 'Asma', 'Waqqas', 'Ahmed', 'John', 'Hazel','Sarah'];
for (let Name of userNames) {
    if (Name === 'Admin') {
        console.log('Hello admin, do you want to review status report?');
    } else {
        console.log(`Hello ${Name}, thanks for loggin .`);
    }
}
//question no.26

let car = 'subaru';

 //predict 1
console.log("Is car == 'subaru'? I think True.");
console.log(car == 'subaru');

 //predict 2
console.log("Is car == 'honda'? I think False.");
console.log(car == 'honda'); 

 //predict 3
console.log("Is car != 'toyota'? I think True.");
console.log(car != 'toyota');

 //predict 4
console.log("Is car === 'Subaru'? I think False.");
console.log(car === 'Subaru'); 

 //predict 5
console.log("Is car !== 'subaru'? I thinkFalse.");
console.log(car !== 'subaru'); 

 //predict 6
let isPakistaniCar= false;
console.log("Is car a oakistani car? I think False.");
console.log(isPakistaniCar || (car == 'honda' || car == 'toyota')); 

  //predict 7
let isJapaneseCar = true;
console.log("Is car a Japanese car? I think True.");
console.log(isJapaneseCar && (car == 'audi' || car == 'bmw')); 

  //predict 8
let isRed = false;
console.log("Is the color of the car red? I think False.");
console.log(isRed && car == 'red'); 

  //predict 9
let hasFourDoors = true;
console.log("Does the car have four doors? I think True.");
console.log(hasFourDoors || car == 'sedan'); 

  //predict 10
let isConvertible = false;
console.log("Is the car a convertible? I think False.");
console.log(!isConvertible && (car == 'convertible' || car == 'cabriolet')); 




//question no.27
let fruit = 'apple';

 //predict 1
console.log("so fruit == 'banana'? I think False.");
console.log(fruit == 'banana'); 

 //predict 2
console.log("fruit != 'orange'? I think True.");
console.log(fruit != 'orange'); 

let color= 'purple';

 //predict3
console.log("Is the lower case of the color == 'green'? I think True.");
console.log(color.toLowerCase() == 'green'); 

 //predict 4
console.log("Is the lower case of the color == 'purple'? I think False.");
console.log(color.toLowerCase() == 'purple'); 

 //Numerical tests
let numberx = 16;
let numbery = 20;

 //predict5
console.log("Is numberx > numbery? I think True.");
console.log(numberx > numbery); 

//predict 6
console.log("Is numberx <= numbery? I think False.");
console.log(numberx >= numbery); 

 //predict 7
console.log("Is numberx + numbery == 15? I think True.");
console.log(numberx + numbery == 15); 

let workingDay = true;
let weekend= false;

//predict8
console.log("Is it a working day and a weekend? I think False.");
console.log(workingDay && weekend); 

 //predict 9
console.log("Is it a working day or a weekend? I think True.");
console.log(workingDay || weekend);

//question no.28

let favorite_fruits = ["lichi", "grapes", "mango"];

if (favorite_fruits.indexOf("lichi") !== -1) {
    console.log("You love lichi!!!");
}

if (favorite_fruits.indexOf("grapes") !== -1) {
    console.log("Grapes are also you favorites");
}

if (favorite_fruits.indexOf("strawberry") !== -1) {
    console.log("Strawberries are on your list too!");
}

if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("Oranges are also");
} else {
    console.log("unfortunetly oranges are not on the list");
}

if (favorite_fruits.indexOf("kiwi") !== -1) {
    console.log("kiwi you love it");
} else {
    console.log(" either kiwi");
}

//question no.29
let currentUsers = ['USER1', 'USER2', 'USER3', 'ADMIN', 'USER4'];
let Newuserusers  = ['user5', 'admin', 'user6', 'user7'];
for (let Newuser of Newuserusers ) {
    if (currentUsers.map(u => u.toLowerCase()).indexOf(Newuser.toLowerCase())) {
        console.log(`Pardon, ${Newuser}, this username is not valid.`);
    } else {
        console.log(` ${Newuser} Valid.`);
    }
}


//question no.30

let favPizza = ['Cheese', 'Mexicon', 'BBQ chicken'];
for (let pizza of favPizza) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("Pizza is one of my favorite snack of all time , whenever i feel hungry i always say pizzza!!!");

//question no.31
let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of positions) {
    let Ending ;
    if (number === 1) {
        Ending = 'st';
    } else if (number === 2) {
        Ending = 'nd';
    } else if (number === 3) {
        Ending = 'rd';
    } else {
        Ending = 'th';
    }
    console.log(`${number}${Ending}`);
}
//question no.32
let Pets = ['Dog', 'Cat', 'Hamster'];
for (let animal of Pets) {
    console.log(` ${animal.toLowerCase()} will be a great pet.`);
}
console.log('All of these will be a great pet because they are really friendly , thats why people make them pets!');

//question no.33
function make_shirt(size = 'Large', message = 'this world is cruel')
 {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}

make_shirt();
make_shirt('Medium');
make_shirt('Small', 'BONJOUR');

//question no.34

function make_shirt(size = 'Large', message = 'I love TypeScript')
 {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}

make_shirt(); 
make_shirt('Medium'); 
make_shirt('Small', 'ARIGATO!');

//question no.35

function cityCountry(city: string, country: string): string 
{
    return `${city}, ${country}`;

}


//question no.36
const Locatiom = cityCountry("Karachi", "Pakistan");
console.log(Location);


//question no.37
function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
   const car: { manufacturer: string; model: string; [key: string]: any } = {
     manufacturer,
      model,
    };
  

    options.forEach((option) => {
      const [key, value] = Object.entries(option)[0];
      car[key] = value;
    });
  
  return car;
 }
  

 const carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { year: 2022 });
  

 console.log("Car Information:");
console.log(carInfo);



//question no.38

function makeAlbum(artist: string, title: string, tracks?: number): object
 
  const album = 
  {
    artist: artist,
   title: title,
  
  if (tracks !== undefined) {
  album['tracks'] = tracks;
 }

  return album;
}
const album1 = makeAlbum("Ariana Grande ", "7 positions ");
const album2 = makeAlbum("Selena Gomez", "Who says ", 12);
const album3 = makeAlbum("Rahet Feteh Ali", "Dil lagi");
console.log(album1);
console.log(album2);
console.log(album3);

//question no.39

let magicians = ['Chris Angel', 'Doug Henning', 'David Blaine'];
function show_magicians(magicians) 
 {
    for (let magician of magicians)
     {
        console.log(magician);
    }
}
show_magicians(magicians);



//question no.40

let magicians = ['Chris Angel', 'Doug Henning', 'David Blaine'];
function show_magicians(magicians) 
 {
    for (let magician of magicians)
     {
        console.log(magician);
    }
}
show_magicians(magicians);       

function make_great(magicians)
{
    return magicians.map(magician => `The Great ${magician}`);
}
let greatMagicians = make_great(magicians.slice()); 
show_magicians(greatMagicians);



//question no.41
let magicians = ['Chris Angel', 'Doug Henning', 'David Blaine'];
function show_magicians(magicians) 
 {
    for (let magician of magicians)
     {
        console.log(magician);
    }
}
show_magicians(magicians);        function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
let greatMagicians = make_great(magicians.slice()); 
show_magicians(greatMagicians);

let unchanged_Magicians = make_great(magicians.slice()); 
show_magicians(magicians); 


//question no.42

function order_sandwich(...items)
 {
    console.log('Your order of sandwich contains');
    for (let item of items) {
        console.log(`- ${item}`);
    }
}
order_sandwich('Onion', 'Cheese', 'Tomato');
order_sandwich('Mutton kabab', 'Egg');
order_sandwich('Veggies');

