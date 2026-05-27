function greet (name:string):string {
    return `Hola, ${name}`;
}

const greet2 = (name:string):string =>{
    return `Hola, ${name}`; 
} 

const message = greet('Carlos')
const message2 = greet2('David')
console.log(message)
console.log(message2)

interface User {
    uid: string;
    username: string;
}


function getUser(): User { // Función tradicional
    return{
        uid: 'ABC-123',
        username: 'el_papinta123' 
    }
}

const getUser2 = (): User =>{ // Función =>
    return {
        uid: 'DEF-456',
        username: 'la_maminta123'
    }
}

const getUser3 = (): User =>({ // return implicito cuando se pone los ()
        uid: 'GHI-789',
        username: 'el_churringuis123'
    });

// const user = getUser();
const user2 = getUser2(); 
const user3 = getUser3(); 
console.log(getUser())
console.log(user2)
console.log(user3)

const myNumber: number[] = [1,2,3,4,5];

// myNumber.forEach(function(value){
//     console.log({value})
// })

// myNumber.forEach((value) =>{
//     console.log(value)
// })
myNumber.forEach(console.log)