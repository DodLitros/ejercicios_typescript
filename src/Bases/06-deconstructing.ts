const person: Hero = {
    name: 'Tony',
    age: 45,
    key: 'Ironman', 
}
// const name = person.name;
// const age = person.age;
// const key = person.key;
const { name: ironmanName, key, age: ironmanAge } = person; // Lo mismo que lo de arriba


console.log({ironmanName, key, ironmanAge})

interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string
}

const useContext = ( {key, name, age, rank}: Hero ) => {

    return{
        keyName: key,
        user: {
            name,
            age
        },
        rank: rank
    }
}
const { rank, keyName, user: {name, age} } = useContext(person); 

console.log(rank)
console.log({keyName})
console.log(name)
console.log(age)
// const context = useContext(person);
// console.log(context.user)