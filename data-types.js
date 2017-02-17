// Truly empty data type
// var emptyGlass = null;

// Truly endefined data type
// var outspace; 

// Truly true aka boolean type
// var truth= true;
// var news = false;

// // Truthy stuff
// if (2) {
//     console.log('truthy');
// }

// Numbers
// 2;
// 10.22;
// 0.19;
// -23;
// '2' not a number, a string

// console.log('2' + '2') concatenates to a string
// console.log(2*'2') multiplies to a number, why?!

// Every input field on a form is actually a string value, so you might need to convert those to Numbers

// Math
// var cosmos = Math.random() * 100;
// console.log(cosmos);

// var cosmos = Math.ceil()

// Strings

// var doubleQuotedString= "Hello";
// var singleQuotedString= '\'World\'s Best\''; // escaping strings
// var multilineString = `Hey
// Everyone`;

// doubleQuotedString + singleQuotedString + multilineString;

// var iAmWhispering = 'I AM WHISPERING';
// iAmWhispering.toLowerCase();
// iAmWhispering = iAmwhispering.toLowerCase();

// console.log(iAmWhispering);

// var word = 'Hat';
// console.log(word.lenth);

// word = word.slice(1,2);
// console.log(word);

// console.log(word.length);

// function iCap(headLine) {
//     var FirstLetter = headLine.slice(0,1).toUpperCase();
//     headLine = firstLetter + headLine.slice(1);
//     return headLine;
// }

// console.log(iCap('spring is coming soon we hope'));

// var userInput = '    Nathan  ';
// userInput = userInput.trim(); // trims user input down!

// varSayitAgain = 'Hacked';
// sayItAgain = sayItAgain.repeat(500);

// console.log(sayItAgain);


// var address = '34124 Main Street';

// var hasStreet = address.includes('Street');

// console.log(hasStreet);


// var phoneNumber = '(888) 123 . 1234';
// var isCorrectPhoneNumber = phoneNumber.match(/\d/g).length === 10;

// console.log(isCorrectPhoneNumber); // OR USE A LIBRARY... LOL

// var greeting = 'hey world';
// greeting = greetig.replace('hey', 'hello');
// console.log(greeting);


// Dates
Date.now();
console.log(Date.now);

moment().format('MMM Do YYYY'); // or whatever format you want on momentjs.com

// Currency
// account.js

// Arrays
var listOfThings = ['Cheese', 'Pepperoni']
console.log(listOfThings[0]);
console.log(listOfThings.reverse); // aka sorting items on website

console.log('a sentence of characters')

//  Object

var anObject = {
    name: 'Nathan';
};

anObject.name;
anObject['name'];

console.log(JSON.stringify)





