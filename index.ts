//decorators in typescript это возможно тайпскрипт по добовление анотации для обявленя класс и функции
//decorator это класс  который можно применять к любому обьекту и модифицировать его

class User {
	constructor(public name: string, public age: number) {}
	getPass() {
		return `user ${this.name} with age ${this.age}`
	}
}
//base decorators  parametre constructor
//4 тип decorator
//тип класс 
const logClass = (constructor: Function,) => {
	console.log(constructor)
}
//apply decorator for class
@logClass
class User1 {
	constructor(public name: string, public age: number) {}
	getPass() {
		return `user ${this.name} with age ${this.age}`
	}
}
//тип свойство 
const logProperty = (target: Object, propertyKey: string | symbol) => {
	console.log(target)
	console.log(propertyKey)
}
//apply decorator for property

class User2 {
 @logProperty
 secret:number 
	constructor(public name: string, public age: number,secret:number) {this.secret=secret}
	getPass() {
		return `user ${this.name} with age ${this.age}`
	}
}
//тип метод
const logMethod = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
	// console.log(target)
	console.log(propertyKey)
	// console.log(descriptor)
}
//apply decorator for method

class User3 {
	constructor(public name: string, public age: number) {}
	@logMethod
	public getPass(): string {
		return `user ${this.name} with age ${this.age}`
	}
}
//getter and setter
const logAccessor = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
	// console.log(target)
	console.log(propertyKey)
	// console.log(descriptor)
}

class User4 {
	constructor(public name: string, public age: number) {}
	@logAccessor
	set getPass(age: number) {
		this.age = age
	}
}
//factory decorator 

const logFactory = (value:any) => {//factory
return function (target: any) {//decorator
	console.log(target)//decorator logic
}
}
//apply decorator for factory
const enumerable = (value: boolean) => {
	return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
	descriptor.enumerable = value
	}
	
}

class User5 {
	constructor(public name: string, public age: number) {}
	@enumerable(false)//apply decorator for factory 
	public getPass(): string {
		return `user ${this.name} with age ${this.age}`
	}
}

