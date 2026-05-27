const characterNames:string[] = ['Gokú', 'Vegeta', 'Trunks'] 


const [ firstCharacter, secondCharacter, thirdCharacter ] = characterNames;
console.log({firstCharacter, secondCharacter, thirdCharacter})

const [,,p3] = characterNames;
console.log({p3})

const returnArrayFn = () => {
    return ['ABC', 123] as const; 
}
const [letters, numbers] = returnArrayFn();

console.log(letters, numbers);

///////////////////////////////////////////

const useState = (value:string) =>{

    return [
        value, (newValue:string)=>{
        console.log(newValue)
    }] as const; 
}

const [name, setName] = useState('Goku');
console.log(name)
setName('vegeta')