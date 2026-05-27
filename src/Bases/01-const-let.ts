
const firstName: string = 'Carlos'; // If we want to let the data type as string
const secondName = 'David'; // If we want to let the data type as the value (David)
// You can hover the variable and see whay data type is each constant or variable in general

let diceNumber = 5;
// error: diceNumber= '3';
// correct: diceNumber= 3 Like this we can change the variable value

console.log(firstName + ' ' + secondName)

const containsLetterA = firstName.includes('a');

console.log({containsLetterA, diceNumber, firstName, secondName}) 