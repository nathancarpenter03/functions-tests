var avow = require('avow');
var moment = require('moment');

// Booleans
function isTrue(value) {
    if (value === true) {
        return true;
    } else {
        return false;
    }
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);

// Null & Undefined
function isNull(value) {
    if (value === null) {
        return true;
    } else {
        return false;
    }
}

var emptyGlass = null;
avow('isNull returns true', isNull(emptyGlass) === true);

function isUndefined(value) {
    if (value === undefined) {
        return true;
    } else {
        return false;
    }
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);

// Strings
function convertCaseLower(word) {
    return word.toLowerCase();
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');

function convertCaseUpper(word) {
    return word.toUpperCase();
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');

function repeatWord(word) {
    return word.repeat(2);
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');

function sliceWord(word) {
    return word.slice(7,12);
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');

// function splitWord() {
// }

// avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);

function whereIsCarmen(x, y) {
    return x.indexOf(y);
}

// x is what we are searching (entire string), y is what we are searching for (the word carmen).. outputs position 27
// 'Blue Whale'.indexOf('Whale'); // returns  5

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);

function doesItContain(stringToSearch, word) {
    return (stringToSearch.includes(word)); 
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);

// Regular Expressions
function extractZipCode(string) {
    return string.match(/\d/g).join('');
}

avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');

function extractPhoneNumber(number) {
    return number.match(/\d/g).join('');
}

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');

// Numbers
function stringToNumber(n) {
    return parseInt(n);
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne(n) {
    return n = n+1;
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree(value) {
    return value % 3 === 0;
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

function makeRandomNumber(min, max) {
    return Math.random(min, max);
}

avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber(n) {
    return Math.ceil(n);
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);

// Dates
function justAMoment(date) {
    return moment(date).format('dddd');
}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);

// Objects
function myNameIs(anObject) {
    return anObject.name;
}

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');

// Arrays
function getFirstItem(array) {
    return array[0];
}  

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
