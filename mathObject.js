// MATH OBJECT (Properties and Methods)
// THe Math Object is a built-in JavaScript Object/Feature that has properties and methods which can be used for completing math related tasks

//  PROPERTIES (Provides different values/numbers that can be used)_
/*
Syntax Example...

Math.propertyName
*/

// PI Property
console.log(Math.PI); // 3.141592653589793

// METHODS  
/*
Syntax Example...

Math.methodName(arguement)
*/

// Min Method (Returns the lowest number)
const minOne = Math.min(1, 2, 3, 4);
console.log(minOne); // 1

const minTwo = Math.min(14, 22, 8);
console.log(minTwo); // 8

const minThree = Math.min(3, -9, 0);
console.log(minThree); // -9

// Max Method (Returns the lowest number) 
const maxOne = Math.max(1, 2, 3, 4);
console.log(maxOne);
    
const maxTwo = Math.max(-9.123, 0, -13);
console.log(maxTwo); // 0

// Round Method ()
const roundNumOne = Math.round(7.7);
console.log(roundNumOne); // 8

const roundNumTwo = Math.round(-1.1);
console.log(roundNumTwo); // -1

const roundNumThree = Math.round(0.5);
console.log(roundNumThree); // 1 (NOTE: .5 will always round up)

// Floor Method (round the number down)
const floorOne = Math.floor(26.2);
console.log(floorOne); // 26

const floorTwo = Math.floor(0.99999);
console.log(floorTwo); // 0

const floorThree = Math.floor(-1.1)
console.log(floorThree); // -2 (NOTE: If the starting number is negative, then the floor method wull round it down to the next negative number (Ex: -1.1 to -2)

const floorFour = Math.floor(-3)
console.log(floorFour); // -3

//  Ceil Method (Rounds the number up)
// 

const ceilOne = math.ceil(1.1)
console.log(ceilOne); // 2

const ceilTwo = math.ceil(-1.1)
console.log(ceilTwo); // -1 (NOTE: Removes the numbers after the decimal on a negative number)

// Random Method (Returns a number from 0 up to 0.99999 (AKA less than 1))
// NOTE: The Random Method does NOT accept an arguement (AKA Nothing inside the parenthesis "()")
let randomNum = Math.random();
console.log(randomNum); // 0 up to less than 1 (AKA 0 up to 0.99999)

randomNum *= 6;
// randomNum = randomNum * 6;
console.log(randomNum); // 0 up to less than 6 (AKA 0 up to 5.9999)

randomNum = math.floor(randomNum);
console.log(randomNum); // 0, 1, 2, 3, 4, OR 5

randomNum ++ ;
console.log(randomNum); // 1, 2, 3, 4, 5 OR 6

//  Random Number usong ceil (Since Math.random()) can possibly be 0 it is best NOT to use math.ceil when creating a random whole number.
let random = math.random();
console.log(randomNum); // 0 up to less than 6 (AKA 0 up to 5.99999)

random = math.ceil(random)
console.log(random); 

warmHugs = warmHugs .replace("like" , "love")
console.log(warmHugs); // Hi, I'm Olaf and I love warm hugs

// 2a
// let beenImpaled = "Oh, look at that. I've been impaled. ";2b
console.log(beenImpaled.slide(18, 36)); // I've been impaled.

// 3a
let dotDotDot = "..."

// 3b 
let skullBones = `I don't hace a skull${dotDotDot} or bones.`

// 4
console.log(Math.PI); // 3.14159265389793

// 5
const randomNumber = Math.random() * 3;
randomNumber = Math.floor(randomNumber) +1;
console.log(randomNumber);