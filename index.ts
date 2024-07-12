//massiv array type
let list: number[] = [1, 2, 3]
let lst: Array<number> = [1, 2, 3] //generic type

//если есть сстрока и цифри
//tuple type
//multiple line
let x: [string, number]
x = ['hello', 10]
//one line
let y: [string, number] = ['hello', 20]
//any type  если есть много разных типов перемены в массив
let yo: [any, any] = [1, 'hello']
let ya: Array<any> = ['hello', 30]
//enum
enum Directions {
	Up,
	Down,
	Left,
	Right,
}
Directions.Up //0
Directions.Down //1
Directions.Left //2
Directions.Right //3
//enum on peut changer index

enum Direction {
	Up = 10,
	Down = 3,
	Left = 4,
	Right = 1,
}
//never type  work only    function return error or function infinit working
//function return error
const msg: string = 'hello'
const error = (msg: string): never => {
	throw new Error(msg)
}
//function infinite loop
const infiniteLoop = (): never => {
	while (true) {}
}
//object
const create = (o: object | null): void => {}
// create(1) error
create({ object: 1 })
//multiple types for one values  permet de changer les variable
let id: number | string
id = 10
id = 'hello'
//type on appelle les variable on peut l utilise  pour nommer une variable
type Name = string
let id0: Name
id0 = 'hello'
