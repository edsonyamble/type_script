//namespace  and module  пространство и модуль
namespace User {
	const name = 'Yauhen'
	const age = 31
	function getAll(name: string, age: number) {
		const user = console.log(name, age)
		return user
	}
	export const getall =  getAll(name, age)//export потом можно его получить в шлобаны видимости 
}
User.getall
//все что внутри данного пространства и модуля называется пространством и модулем и вссе эти премен доступные только внцтри данного пространства и модуля


//исползовать  модул  и без использования пространство
// export const user = "Yauhen"
// file customer.js
//import { user } from './user'
//console.log(user)
