const myArray: (string|number)[] = [1,2,3,'4',5];

const myArray2 = [...myArray];
myArray2.push('0');

console.log(myArray);

for (const myNumber of myArray){
    console.log(myNumber + ': algo')
}