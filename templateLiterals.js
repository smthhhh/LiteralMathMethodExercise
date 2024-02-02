// TEMPLATE LITERALS
// New way to create or concatenate strings

// Example of a Template Literal
// Template Literals use back-ticks (``) instead of quotes ("" or '')
const example = `This is a Template Literal`;
console.log(example); // This is a Template Literal

// Template Literals recognize line breaks 
// Example of a line break in a regular string
const linesOnes =  "First Line\nSecond Line";
console.log(linesOnes);
// Example of a line break in a Template Literal
const linesTwo = 'First Line\nSecond Line';
console.log(linesTwo);

// Concatentatoin with Template Literals 
const myName = "Mr." + "Riley";
// Example of Concatenation with regular strings
console.log(myName); // Mr. Riley 

// Ecample of Concatentation with Template Literals
// ${} instead of a plus sign +
const fullName = `Matthew${` `}Riley`;
console.log(fullName); // Matthew Riley

const middle = `John`;
fullName = `Matthew ${middle} Riley`;
console.log(fullName); // Matthew John Riley

// Using number (AKA Adding number) into Template Literals
const nameAge1 = `My name is Mr. Riley and I am ${2023 - 1987} years old`;
console.log(nameAge1);
console.log( nameAge1); // My name is Mr. Riley and I am 36 years old