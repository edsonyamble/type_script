//interface 

interface Person {
	name: string
	age: number
}
const person: Person = {
	name: 'Yauhen',
	age: 30
}
interface food {
	readonly name: string//can not change
	age: number
}
const Person: food = {
	name: 'Yauhen',
	age: 30,
}
Person.name = 'Max'//ошибка неляя изменять readonly

//если хотим расшерять обект из интерфейс потом  
interface fruit {
	name: string
	age: number
	[propName: string]: any
}
const fruit: fruit = {
	name: 'Yauhen',
	age: 30,
	weight: 300
}
//интерфейс работает с классами implements т можно добовить другиз значение 

interface User {	
	name: string
	age: number
	getPass(): string
}
class Yauhen implements User {
	name: string='Yauhen'
	age: number=30
	nickName: string='webDev'
	getPass(): string {
		return 'pass'
	}
}
//separate interface

interface User2 {	
	name: string
	age: number
	getPass(): string
}
interface User3 extends User2 {
	nickName: string
}
interface User4{
	fruit: string
}
class Yauhen2 implements User3, User4 {
	name: string='Yauhen'
	age: number=30
	nickName: string='webDev'
	getPass(): string {
		return 'pass'
	}
	fruit: string='apple'
}
