//example function
//age can be in the function number or string
const createPassword = (name: string, age: number | string) => {
	;`My name is ${name} and I am ${age} years old`
}
createPassword('Edson', 31)

//default parameter
const createPassword = (name: string = 'Edson', age: number | string = 31) => {
	;`My name is ${name} and I am ${age} years old`
}
createPassword()

//optional parameter
const createSecondPassword = (name: string, age?: number) => {
	;`My name is ${name} and I am ${age} years old`
}
createSecondPassword('Edson') //age is optional тоже не обязательно
//rest type
const createThirdPassword = (name: string, ...rest: number[]) => {
	;`My name is ${name} and I am ${rest} years old`
}
createThirdPassword('Edson', 31, 32, 33) //my name is Edson and I am 31,32,33 years old
//rest type
const createfourPassword = (name: string, ...rest: Array<string | number>) => {
	;`My name is ${name} and I am ${rest} years old`
}
createfourPassword('Edson', '31', 32, 'five') //my name is Edson and I am 31,32,five years old

//return type string number or object
const createdPassword = (name: string, age: number | string): string | number | object => {
	return `My name is ${name} and I am ${age} years old`
}
createPassword('Edson', 31)

//return string
const creatednumPassword = (name: string, age: number | string): string => {
	return `${name} and I am ${age} years old`
}
createPassword('Edson', 31)
//return number
const creatednumoPassword = (name: number, age: number): number => age+name

//return object
const createdobjectPassword = (name: string, age: number): object => {
	return {
		name:name,
		age:age
	}
}
//ничего не возвращать
const creatednothingPassword = (name: string, age: number): void => {
	
}//это void

//ошибка возращаемого типа
const msg = "hello"
const error = (msg: string): never => {
	throw new Error(msg)
}
//функция выполняеться постоянно
const infinite = (): never => {
	while(true) {}
}

//fuunction variable 
let functio: (name: string) => void;

function oldFunctio(name: string): void {
	console.log(`hello ${name}`)
}
functio = oldFunctio 