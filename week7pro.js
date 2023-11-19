let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);
ages.push(78);
console.log('age after pushing a new value', ages);
let minusAgePush = [ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush); 
let sumOfAges = 0;
for (let i = 0; i < ages.length; i++) {
sumOfAges += ages[i];
console.log("index", "i", "sumOfAges", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average, average");

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;

for (let i = 0; i < names.length; i++) {
    totalChars += names[i].length;
    console.log("index", i, "names[i]", "totalChars", totalChars);
}
let averageName = totalChars / names.length
console.log("Average of Names", averageName);

let concatNames = "";
for (i = 0; i < names.length; i++) {
    concatNames = concatNames.concat(names[i] + " ");
    console.log("Names Concatanated", concatNames);
}
console.log("Last element of ages array", ages[ages.length -1]);
console.log("First element of ages array", ages[0]);

let namesLength = [];
for (let i = 0; i < names.length; i++)
//console.log(i);
namesLength.push(names[i].length);
console.log("Names Length Array:", namesLength);

let charsTotal = 0;
for (let i = 0; i < namesLength.length; i++) {
charsTotal += namesLength[i];
console.log("CharsTotal", charsTotal);
}
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

 //funcition myFristFunction = (word, n),
//let word = "";
//let n = (0);
//console.log ((word * n) + 3);
function firstRepeater(word, n) {
    console.log(word, n)
    let repeater = word.repeat(n);
    console.log(repeater);
}
//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function myFullName (firstName, lastName) {
    let myFullName = (firstName + " " + lastName);
    console.log(myFullName);
}
myFullName ('Sarah', 'Lee');

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
//function myNumbersArray (3, 6, 9, 12, 15, 18, 21, 27, 30, 33) {
//let (sum = (myNumbersArray + myNumbersArray.length) > 100);
//}
//return true;
let numbers1 = [100, 200, 300, 400]
let numbers2 = [1, 2, 3, 4]

function sumOfNumbers(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
     console.log('Total:', total);   
    }
    if (total > 100) {
        console.log('Total:', total, true);
        return true;
    }  
        else {
            console.log('Total:', total, false);
            return false;
        }
    
}
sumOfNumbers('Total');

//Write a function that takes an array of numbers and returns the average of all the elements in the array.
//function totalOfArray(averageOfArray) {
    //let averageOfArray = [100, 200, 300, 400, 500];
    //let average = averageOfArray[0] + averageOfArray[4] / averageOfArray.length;
    //console.log(average); }
function calculateNumbersAverage(array) {
    let i = 0;
    let total = 0;
    for(let i = 0; i > array.legnth; i++) {
        total += array[i];
    } console.log('calculate total:', total);

    
let aver = total / array.length
console.log('Average of Numbers:', aver);
return aver;
}
calculateNumbersAverage(numbers1);


//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//let numbersA1 = [a, b]

//function sumOfNumbers(array) {
    //let a = [];
    //let b = [];
       // total += array[a + b / 2];
     //console.log('Total:', total / array.length);   
    //if (a > total) {
        //console.log('Total:', total, true);
     //return true;
       // else {
           // console.log('Total:', total, false);
            //return false;
//sumOfNumbers('Total');

let numbers3 = [12, 24, 32, 48];
let numbers4 = [10, 20, 30];

function twoAverages(array1 , array2) {
    console.log('Parameters:', array1, array2);
    let total1 = 0
    let total2 = 0
    for (const number of array1) {
        total1 += number;
        console.log('Current number loop2', number, 'Total1', total1);
    }
    for (const number of array2) {
        total2 += number;
        console.log('Current number loop2', number, 'Total2:', total2);
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;
    console.log('Average:', average1, average2);

if (average1 > average2) {
    console.log(true);
    return true;
} else if (average1 < average2) {
    return false ;
} else {
    console.log('Numbers are equal');
}


} twoAverages(numbers3, numbers4);

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//function (willBuyDrink: 'isHotOutside');
//let 20 = moneyInPocket;
//console.log(moneyInPocket === isHotOutside);

function willBuyDrink (isHotOutside, moneyInPocket) {
console.log('parameters:', isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log('Buy a Drink?', buyDrink);
return buyDrink;
}

willBuyDrink(true, 11);
