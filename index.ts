
//utility их 16 не все будем смотреть 
//1 readonly только для чичение 
// interface User {
// 	name: string
// }

// const user:Readonly<User> = {
// 	name: 'Yauhen'
// }
// user.name = 'Max'//ошибкуа будет потому что только для читение 
//2 Required<T> все поля будут обязательными
// interface User {
// 	name: string
// 	age: number
// }

// const user:Required<User> = {
// 	name: 'Yauhen',
// }
//ошибкуа не будет потому что все поля обязательны
//3 Partial<T> все поля будут опциональными то есть не обязателным 
// interface User {
// 	name: string
// 	age: number
// }

// const user:Partial<User> = {
// 	name: 'Yauhen',
// }
// user.name = 'Max'
// //4 Records<T> создание словарей
// interface PageInfo {
// 	title: string
// }

// type Page = 'home' | 'about' | 'contact'

// const x:Record<Page, PageInfo> = {
// 	about: {title: 'about'},
// 	home: {title: 'home'},
// 	contact: {title: 'contact'},
// }
//5 Pick<T, K>
// interface PageInfo {
// 	title: string
// 	description: string
// 	completed: boolean
// }

// type Page =  Pick<PageInfo, 'title' | 'completed'>

// const pageinfo:Page = {
// 	title: 'about',
// 	completed: false
// }
//6 Omit<T, K> это без какие то данных 
// interface PageInfo {
// 	title: string
// 	description: string
// 	completed: boolean
// }

// type Page = Omit<PageInfo, 'title' | 'completed'>

// const pageinfo: Page = {
// 	description: 'about'
// }
//7 exclude<T, U> удаляет дублированные данные
// type PageInfo = Exclude< "title" | 'completed' | 'description', 'description'>//title | completed
// //8 Extract<T, U> получаем дублированные данные
// type Page = Extract< "title" | 'completed' | 'description', 'title' | 'completed'>//title | completed
// //9 NonNullable<T> получаем не null и не undefined
// type Page2 = NonNullable< "title" | 'completed' | 'description' | null | undefined>//title | completed | description
//10 Return type  получение тип  function 
// declare function f(): {
// 	a: number;
// 	b: string;
// };
// type T0 = ReturnType<typeof f>;//{a: number, b: string}
// type T1 = ReturnType<() => string>;//string
// type T2 = ReturnType<any>;//any
// type T3 = ReturnType<never>;//never
//11 InstanceType<T> получение типа class 
class c {
	a: number
	b: string
}
type T0 = InstanceType<typeof c>;//c
type T1 = InstanceType<new () => c>;//c
type T2 = InstanceType<any>;//any
type T3 = InstanceType<never>;//never

