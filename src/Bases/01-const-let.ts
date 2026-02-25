
const firstName: string = 'Carlos'; // If we want to let the data type as string
const secondName = 'David'; // If we want to let the data type as the value (David)
let diceNumber = 5;
// error: diceNumber= '3'; 

console.log(firstName + ' ' + secondName)

const containsLetterA = firstName.includes('a');

console.log({containsLetterA, diceNumber, firstName, secondName})