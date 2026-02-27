interface person {
    firstName: string,
    lastName: string,
    age: number,
    address: address,
}

interface address {
        postalCode: string,
        city: string
    }



// const spiderman = {
//     firstName: 'Carlos',
//     lastName: 'Beltran',
//     age: 20
// };

// // se pueden cambiar las propiedades  
// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker'; 
// // Pero no el objeto en literal
// spiderman = {123, 2, carlos} ¡No se puede!

///////////////////////////////////

const ironman: person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 42,
    address: {
        postalCode: '050025',
        city: 'Medellín'
    }
}

const spiderman = ironman; // Spiderman básicamente apunta a la misma memoria de ironman

spiderman.firstName = 'Peter'; // si hago esto cambia en ambos objetos

//Para duplicar el objeto se usa el operador spread

const ironManCopy = {...ironman};
ironManCopy.firstName = 'Carlos';
ironManCopy.lastName = 'Beltran';
ironManCopy.age = 27;
ironManCopy.address.city = 'Nueva York'; // Como los objetos se pasan literales esto cambia la ciudad del objeto ironman

// Para clonar profundamente se usa la funcion reservada structuredClone()
 const realCopy = structuredClone(ironman);
realCopy.firstName = 'Carlos';
realCopy.lastName = 'Beltran';
realCopy.age = 27;    
realCopy.address.city = 'Medellín';


console.log(ironman, spiderman, ironManCopy, realCopy);