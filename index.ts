//class
class Person {
	name: string
	age: number
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
}

const yauhen = new Person('Yauhen', 31)

console.log(yauhen)
//модификаторы public, private, protected, readonly
class User {
	public name: string//публичное свойство
	private age: number//закрытое свойство только для данного класса
	protected price: number //закрытое свойство только для данного класса и наследников
	readonly color: string //закрытое свойство только для данного класса  только для чтения
	constructor(name: string, age: number , price: number, color: string) {
		this.name = name
		this.age = age
		this.price = price
		this.color = color
	}
}
const yauhen2 = new User('Yauhen', 31, 1000, 'red')
yauhen2.price 
yauhen2.color
yauhen2.name
yauhen2.age
//default значение
class tel {
	color: string 
	name: string = 'samsung'
	price: number=128827727
	constructor(color: string) {
		this.color = color
	}
}
const telUser = new tel("red")
telUser
//минимальное количество свойств
class User1 {
	constructor(
		public name: string, 
		private age: number, 
		protected price: number, 
		private color: string
	) {}
}
//get access to private property
class User2 {
	private age2: number
	constructor(
		public name: string, 
		protected price: number, 
		private color: string
	) {}
	setAge(age: number) {	
		this.age2 = age
	}
}
const yauhen3 = new User2('Yauhen', 31, 'red')

yauhen3.setAge(10)//10