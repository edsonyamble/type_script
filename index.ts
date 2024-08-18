//object
//типизация
let obj: { name: string; city: string; popularty: string } = {
	name: 'edson',
	city: 'newyork',
	popularty: '1000000000',
}
console.log(obj)
//obj типизация
let obje: any = {
	name: 'edson',
	city: 'newyork',
	popularty: '1000000000',
}

console.log(obje)

//2 обект который одинокого типа
let obje2: { name: string; city: string; popularty: string } = {
	name: 'edson',
	city: 'newyork',
	popularty: '1000000000',
}
console.log(obje2)

let obje3: { name: string; city: string; popularty: string } = {
	name: 'edson',
	city: 'newyork',
	popularty: '1000000000',
}
console.log(obje3)
//обект одинокого тип  dry  dont repeat yourself
type user = { name: string; city: string; popularty: string }
let obje4: user = {
	name: 'edson',
	city: 'newyork',
	popularty: '1000000000',
}
console.log(obje4)

let obje5: user = {
	name: 'edson',
	city: 'newyork',
	popularty: '1000000000',
}
console.log(obje5)
//2 обект одинокого типа примерно
type usero = { name: string; city: string; popularty: string ;age?:number;color?: string}
let obje6: usero = {
	name: 'edson',
	city: 'newyork',
	popularty: '1000000000',
	age: 31,
}
console.log(obje6)

let obje7: usero = {
	name: 'edson',
	city: 'newyork',
	popularty: '1000000000',
	color: 'blue',
}
console.log(obje7)