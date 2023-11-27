//question no.1
var Name = 'john';
console.log(" Hello ".concat(Name, " would you like to learn some typescript today?"));
//question no2
var personNameCases = 'Venisa Sarah';
console.log(personNameCases.toLowerCase());
console.log(personNameCases.toUpperCase());
console.log(personNameCases.charAt(0).toUpperCase() + personNameCases.slice(1).toLowerCase());
//question no.3
var famousQuote = 'dont give up there is no shame in falling down true shame is to not stand up again ';
var author = 'Shintaro Midorima';
console.log("".concat(author, " once said, \"").concat(famousQuote, "\""));
//question no.4
var famousePerson = 'William Shakespeare';
var quote = " ".concat(famousePerson, " once said: All that gliter is not gold.");
console.log(quote);
//question no.5
var personName = " ArianaGrande";
console.log("Ariana\nGrande");
console.log(personName);
var secondName = "MariumAyaz";
console.log("Marium\tAyaz");
console.log(secondName);
//question no.6
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//question no.7
var favoriteName = 7;
console.log("My favorite number is ".concat(favoriteName));
//question no.8
//Program Name: Dinner Invitation 
//My Name: [Vanessa Sarah]
//Date: [11.11.2023]
//Guest List
var dinnerGuests = ['Sonia', 'Sehba', 'Rose'];
//Inviting more 
var additionalGuests = ['Aster', 'Eida', 'Boruto'];
//Printed the invitation message for each guest list
for (var _i = 0, _a = dinnerGuests.concat(additionalGuests); _i < _a.length; _i++) {
    var guest = _a[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
//One guest can't make it
var guestCantMakeIt = dinnerGuests[1];
console.log("Unfortunately, ".concat(guestCantMakeIt, " can't make it."));
//question no.9
var names = ['Angel', 'Samantha', 'Rose'];
for (var _b = 0, names_1 = names; _b < names_1.length; _b++) {
    var name_1 = names_1[_b];
    console.log(name_1);
}
//question no.10
var names = ['Suzaina', 'Aster', 'Farheen'];
for (var _c = 0, names_2 = names; _c < names_2.length; _c++) {
    var name_2 = names_2[_c];
    console.log(name_2);
}
//greetings to all
for (var _d = 0, names_3 = names; _d < names_3.length; _d++) {
    var name_3 = names_3[_d];
    console.log("Hello ".concat(name_3, ", how are you doing? i hope you're doing well."));
}
//question no.11
var transportation = ['car'];
for (var _e = 0, transportation_1 = transportation; _e < transportation_1.length; _e++) {
    var mode = transportation_1[_e];
    console.log(" i will own a bugatti ".concat(mode, " one day."));
}
//question no.12
var DinnerGuest = ['Faiza', 'Shamoun', 'John'];
for (var _f = 0, DinnerGuest_1 = DinnerGuest; _f < DinnerGuest_1.length; _f++) {
    var guest = DinnerGuest_1[_f];
    console.log(" Hello, ".concat(guest, " you are very welcome to the dinner i arrange it for you. "));
}
//question no.13
var GuestsList = ['faiza', 'shamoun', 'john'];
{
    console.log(" Hello, ".concat(guest, " you are very welcome to the dinner i arrange it for you. "));
}
if (Guest_List[1]) {
    console.log("".concat(Guest_List[1], " can't make it."));
    Guest_List[1] = 'Evangeline';
    for (var _g = 0, Guest_List_1 = Guest_List; _g < Guest_List_1.length; _g++) {
        var guest = Guest_List_1[_g];
        console.log("Hello ".concat(guest, ", you are still invited to dinner."));
    }
}
//question no.14
var GuestsList = ['faiza', 'shamoun', 'john'];
for (var _h = 0, GuestsList_1 = GuestsList; _h < GuestsList_1.length; _h++) {
    var guest = GuestsList_1[_h];
    console.log("Hello ".concat(guest, " you are very welcome to the dinner i arrange."));
}
console.log('Great news! I found a better and bigger dinner table.');
GuestsList.unshift('larrisa');
GuestsList.splice(2, 0, 'alan walker');
GuestsList.push('evangeline');
for (var _j = 0, GuestsList_2 = GuestsList; _j < GuestsList_2.length; _j++) {
    var guest = GuestsList_2[_j];
    console.log("Hello ".concat(guest, ", you are invited to the expanded dinner."));
}
//question no.15
var Guest_List = ['faiza', 'shamoun', 'john', 'larrisa', 'alan walker', 'evangeline'];
console.log('Aplogize new dinner table did not arrive in time and we are only able to inite two people. ');
while (Guest_List.length > 2) {
    var removedGuest = Guest_List.pop();
    if (removedGuest) {
        console.log("Pardon, ".concat(removedGuest, ", we can't invite you to the dinner."));
    }
}
for (var _k = 0, Guest_List_2 = Guest_List; _k < Guest_List_2.length; _k++) {
    var remainingGuest = Guest_List_2[_k];
    console.log("Hello ".concat(remainingGuest, ", you are still invited to dinner."));
}
//question no.16
var Places = ['Newyork', 'Italy', 'Swirtzerland', 'Spain', 'Denmark', 'France'];
console.log('original order:', Places);
console.log('Alphabetical order:', [Places].sort());
console.log('Original order still maintain:', Places);
console.log('Reverse alphabetic order:', [Places].sort().reverse());
console.log('orginal order maintain:', Places);
Places.reverse();
console.log('Reversed order :', Places);
Places.reverse();
console.log('Reversed order again:', Places);
Places.sort();
console.log('Sorted in alphabetic order', Places);
Places.sort().reverse();
console.log('sort in reverse alphabetic order:', Places);
//question no.17
var GuestList = ['Faiza', 'Shamoun', 'John', 'Evangeline', 'Alan walker', 'Larrisa'];
console.log("I am inviting  ".concat(GuestList.length, " people to dinner"));
//question no.18
var mountains = ['Himalayas', 'Rockies', 'Andes', 'Denali'];
console.log('Mountains:', mountains);
var River = ['Rio grande', 'Kabul', 'Indus river', 'Yamuna'];
console.log('River:', River);
var Countries = ['England', 'Japan', 'India', 'Finland'];
console.log('countries:', Countries);
var cities = ['Paris', 'London', 'Tokyo', 'Los angelas'];
console.log('Cities:', cities);
var languages = ['Bangoli', 'Spanish', 'Chinese', "Hebrew"];
console.log('Languages:', languages);
//question no.19
var things = {
    Transport: 'bus',
    Food: 'Pasta',
    City: 'London',
    Book: 'how to build a habbit',
};
console.log('things', things);
//question no.20
var aray = [1, 2, 3];
try {
    console.log(aray[3]);
    //Erros intentional 
}
catch (error) {
    console.error('Error:', error.message);
}
//question no.21
var AlienColor = 'Green';
if (AlienColor === 'Green') {
    console.log('Player earned 5 Points');
}
//question no.22
var AlienColor2 = 'red';
if (AlienColor2 === 'Green') {
    console.log('Player earned 5 Points');
}
else {
    console.log('Player got 10 Points!');
}
//question no.23
var AlienColor3 = 'yellow';
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
var age = 19;
if (age < 2) {
    console.log('This person is a child.');
}
else if (age < 4) {
    console.log('This person is a toddler.');
}
else if (age < 13) {
    console.log('This person is a kid.');
}
else if (age < 20) {
    console.log('This person is a teenager.');
}
else if (age < 65) {
    console.log('Ths person is an adult.');
}
else {
    console.log('This person is an older.');
}
//question no.25
var userNames = ['Admin', 'Asma', 'Waqqas', 'Ahmed', 'John', 'Hazel', 'Sarah'];
for (var _l = 0, userNames_1 = userNames; _l < userNames_1.length; _l++) {
    var Name_1 = userNames_1[_l];
    if (Name_1 === 'Admin') {
        console.log('Hello admin, do you want to review status report?');
    }
    else {
        console.log("Hello ".concat(Name_1, ", thanks for loggin ."));
    }
}
//question no.26
var car = 'subaru';
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
var isPakistaniCar = false;
console.log("Is car a oakistani car? I think False.");
console.log(isPakistaniCar || (car == 'honda' || car == 'toyota'));
//predict 7
var isJapaneseCar = true;
console.log("Is car a Japanese car? I think True.");
console.log(isJapaneseCar && (car == 'audi' || car == 'bmw'));
//predict 8
var isRed = false;
console.log("Is the color of the car red? I think False.");
console.log(isRed && car == 'red');
//predict 9
var hasFourDoors = true;
console.log("Does the car have four doors? I think True.");
console.log(hasFourDoors || car == 'sedan');
//predict 10
var isConvertible = false;
console.log("Is the car a convertible? I think False.");
console.log(!isConvertible && (car == 'convertible' || car == 'cabriolet'));
//question no.27
var fruit = 'apple';
//predict 1
console.log("so fruit == 'banana'? I think False.");
console.log(fruit == 'banana');
//predict 2
console.log("fruit != 'orange'? I think True.");
console.log(fruit != 'orange');
var color = 'purple';
//predict3
console.log("Is the lower case of the color == 'green'? I think True.");
console.log(color.toLowerCase() == 'green');
//predict 4
console.log("Is the lower case of the color == 'purple'? I think False.");
console.log(color.toLowerCase() == 'purple');
//Numerical tests
var numberx = 16;
var numbery = 20;
//predict5
console.log("Is numberx > numbery? I think True.");
console.log(numberx > numbery);
//predict 6
console.log("Is numberx <= numbery? I think False.");
console.log(numberx >= numbery);
//predict 7
console.log("Is numberx + numbery == 15? I think True.");
console.log(numberx + numbery == 15);
var workingDay = true;
var weekend = false;
//predict8
console.log("Is it a working day and a weekend? I think False.");
console.log(workingDay && weekend);
//predict 9
console.log("Is it a working day or a weekend? I think True.");
console.log(workingDay || weekend);
//question no.28
var favorite_fruits = ["lichi", "grapes", "mango"];
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
}
else {
    console.log("unfortunetly oranges are not on the list");
}
if (favorite_fruits.indexOf("kiwi") !== -1) {
    console.log("kiwi you love it");
}
else {
    console.log(" either kiwi");
}
//question no.29
var currentUsers = ['USER1', 'USER2', 'USER3', 'ADMIN', 'USER4'];
var Newuserusers = ['user5', 'admin', 'user6', 'user7'];
for (var _m = 0, Newuserusers_1 = Newuserusers; _m < Newuserusers_1.length; _m++) {
    var Newuser = Newuserusers_1[_m];
    if (currentUsers.map(function (u) { return u.toLowerCase(); }).indexOf(Newuser.toLowerCase())) {
        console.log("Pardon, ".concat(Newuser, ", this username is not valid."));
    }
    else {
        console.log(" ".concat(Newuser, " Valid."));
    }
}
//question no.30
var favPizza = ['Cheese', 'Mexicon', 'BBQ chicken'];
for (var _o = 0, favPizza_1 = favPizza; _o < favPizza_1.length; _o++) {
    var pizza = favPizza_1[_o];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("Pizza is one of my favorite snack of all time , whenever i feel hungry i always say pizzza!!!");
//question no.31
var positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _p = 0, positions_1 = positions; _p < positions_1.length; _p++) {
    var number = positions_1[_p];
    var Ending = void 0;
    if (number === 1) {
        Ending = 'st';
    }
    else if (number === 2) {
        Ending = 'nd';
    }
    else if (number === 3) {
        Ending = 'rd';
    }
    else {
        Ending = 'th';
    }
    console.log("".concat(number).concat(Ending));
}
//question no.32
var Pets = ['Dog', 'Cat', 'Hamster'];
for (var _q = 0, Pets_1 = Pets; _q < Pets_1.length; _q++) {
    var animal = Pets_1[_q];
    console.log(" ".concat(animal.toLowerCase(), " will be a great pet."));
}
console.log('All of these will be a great pet because they are really friendly , thats why people make them pets!');
//question no.33
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'this world is cruel'; }
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'BONJOUR');
//question no.34
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'ARIGATO!');
//question no.35
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
//question no.36
var Locatiom = cityCountry("Karachi", "Pakistan");
console.log(Location);
//question no.37
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (option) {
        var _a = Object.entries(option)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { year: 2022 });
console.log("Car Information:");
console.log(carInfo);
var album = {
    artist: artist,
    title: title,
    if: function (tracks) { }
} !== undefined, _r = void 0, album = _r.album, _s = _r["tracks"],  = _s === void 0 ? tracks : _s;
return album;
var album1 = makeAlbum("Ariana Grande ", "7 positions ");
var album2 = makeAlbum("Selena Gomez", "Who says ", 12);
var album3 = makeAlbum("Rahet Feteh Ali", "Dil lagi");
console.log(album1);
console.log(album2);
console.log(album3);
//question no.39
var magicians = ['Chris Angel', 'Doug Henning', 'David Blaine'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
//question no.40
var magicians = ['Chris Angel', 'Doug Henning', 'David Blaine'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
function make_great(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
var greatMagicians = make_great(magicians.slice());
show_magicians(greatMagicians);
//question no.41
var magicians = ['Chris Angel', 'Doug Henning', 'David Blaine'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var greatMagicians = make_great(magicians.slice());
show_magicians(greatMagicians);
var unchanged_Magicians = make_great(magicians.slice());
show_magicians(magicians);
//question no.42
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Your order of sandwich contains');
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
}
order_sandwich('Onion', 'Cheese', 'Tomato');
order_sandwich('Mutton kabab', 'Egg');
order_sandwich('Veggies');
