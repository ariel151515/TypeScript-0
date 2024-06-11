// TIPADOS  *******************************************

// (Anotacion de tipos)
//function saludar(name: string){
//    console.log(`Hola ${name}`);
//}

//saludar(34)

// Forma 1 de tipar objetos (Anotacion de tipos)
//function saludar({name, age}, {name: string, age: number}){
//    console.log(`Hola ${name} y tienes ${age} años`);
//}

// Forma 2 de tipar objetos (Anotacion de tipos)
//function saludar2(persona: {name: string, age: number}){
//    const {name, age} = persona; // es necesario extraer las variables 
//    console.log(`Hola ${name} y tienes ${age} años`);
//}



// Pasandole una funcion como parametro (void si no iteresa que devuelva )
//const satHiFromFunction = (fn: (name: string) => void) => {
//    fn('Miguel');
//}

//const sayHi = (name: string) => {
//    console.log(`Hola ${name}`);
//    return 
//}

//satHiFromFunction(sayHi);


// Forma 1 de tipar funciones flecha 
//const sumar = (a: number, b: number) => {
//    return a + b;
//}

// Forma 2 de tipar funciones flecha 
//const restar: (a: number, b: number) => number = (a, b) => {
//    return a - b;
//}

// Con never le indicamos que nuca va a devolver nada 
//function throwError(message: string): never {
//    throw new Error(message);
//}

// never nunca devuelve un valor y void podria devolver un valor o no


// Inferencias funciones anonimas segun el contexto
// const avengers = ["Spidey, "Hulk", "Avengers"]

//avengers.forEach(function(avengers){
//    console.log(avengers);
//})


// Type Alias *******************************************

// Definimos un type propio
//type Hero = {
//   readonly id?:number // con readonly indicamos que no s epuede sobrescribir
//   name: string
//   age: number
//   isActive?: boolean  //? indica que no es obligatorio, es opcional
//}

// Le indicamos que hero es un Hero
//let hero: Hero = {
//    name:'thor',
//    age:1500
//}

// con :Hero Le indicamos que devuelve el Hero
//function createHero(hero: Hero): Hero{
//    const {name, age } = hero;
//    return { name, age, isActive: true }
//}

//const thor = createHero({name: 'Thorn', age:1500})




// Template union types  *******************************************
//type HexadecimalColor = `#${string}` 

//const color: HexadecimalColor = '0033ff'   // No es correcto porque not inene #
//const color2: HexadecimalColor = '#0033ff' // Si es correcto


// Union types (uniendo los dos tipos, puede ser uno o el otro)  *******************************************
//let annn: number | string 
//annn = true



// Intersection types  *******************************************
//type HeroBasico ={
//   name: string
//   age: number
//}

//type HeroProperties = {
//    readonly id?: HeroId,
//    isActive?:boolean,
//    powerScale?: HeroPowerScale
//}

// crea un nuevo tipo uniendo los dos tipos anteriores
//type Hero = HeroBasico & HeroProperties

// Type Indexing
type HeroProperties = {
    isActive: boolean,
    address: {
        planet: string
        city: string
    }
}

const addressHero : HeroProperties['address'] = {
  planet:'Earth',
  city: 'New York'
 }



 // Arrays
 const lenguajes: string[] = [] // Le decimos que queremos un arrays de string
 lenguajes.push('Javascript')

 const lenguajes: Array<string> = [] // Le decimos que queremos un arrays de string
 lenguajes.push('Javascript')

 // Seria un array de string o un arrays de numeros
 const lenguajes: (string | number)[] = [] // Le decimos que queremos un arrays de string
 lenguajes.push('Javascript')


/*
  ['x, '0', 'x']
  ['0, 'x', '0']
  ['x, '', 'x']
*/

// Definimos nuestro propio typo para tipar el array de arrays
type CellValue = 'x' | '0' | ''

// una tupla tiene un limite fijado de posiciones
type GameBoard = [ 
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: CellValue[][] = [['x, '0', 'x'], ['0, 'x', '0'],['x, '', 'x']]


// Mas ejemplos de tupla (se definen tres posiciones y son de tipo numeros)
type RGB = [number, number, number]
const rgb: RGB = [1,2,3]


