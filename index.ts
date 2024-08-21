//generic или обшый тип данных
// это обозначение типов в обшей вид
//example fur use any type
const getter = (data: any): any => data
getter(10) //10
getter('test') //'test'
getter(10).length // undefined    // Property 'length' does not exist on type '10' number
getter('test').length // 4
//чтобы такие ошибки не были исползуем generic

const gettto = <T>(data: T): T => data
gettto(10).lenght //Property 'lenght' does not exist on type '10' то есть получаес сразу  ошибку с generic
//можно с помощью дженерикой  менять типы пр вызоз
const gettto = <T>(data: T): T => data
gettto<number>(10).lenght //Property 'lenght' does not exist on type '10' то есть получаес сразу  ошибку с generic

// class generic
class gettto<T> {
	data: T
	constructor(data: T) {
		this.data = data
	}
}
// но типы одиноковые 
class gettto2<T> {
	constructor(public name: T, public age: T) {
	}

	getAge(): string {
		return `my age is ${this.name} my age ${this.age}`
	}
}
const gettto3 = new gettto2('Edson', "31")
const gettto4 = new gettto2(21, 31)
//терерь разных типы 
class gettto7<T,K> {
	constructor(public name: T, public age: K) {}

	getAge(): string {
		return `my age is ${this.name} my age ${this.age}`
	}
}
const gettto8 = new gettto7('Edson', 31)//теперь можно разные типы 
//generic сделать чтобы  конретно параметр был конкретно тип 
class gettto9<T, K extends number> {
	constructor(public name: T, public age: K) {}

	getAge(): string {
		return `my age is ${this.name} my age ${this.age}`
	}
}
const gettto10 = new gettto9('Edson', 31)