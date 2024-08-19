
// наследование 
//static методы
class Animal {
	static sound() {
		console.log('animal sound');
	}
	constructor(public name: string) {
		this.name = name;
	}
}
const dog = new Animal('dog');//dog
Animal.sound();//animal sound
//наследование 2 класса 
class User {
	private nickname: string
	static secret = 12345

	constructor(public name: string, public age: number) {
}
getpass(): string {
	return `${this.name}${User.secret}`
}
}
class Admin extends User {
	name: string='admin'
	constructor(age: number) {
		super(name, age);
	}
}
const user = new User('edson', 31)
const admin = new Admin( 31)
console.log(user.getpass());
console.log(admin.getpass());
//абстракция  абстаная класс создаеться только для наследования
abstract class  User1 {
	constructor(public name: string, public age: number) {
	}
	greet(): void {
		console.log(this.name);
	}
	abstract getPass(): string
}
const user1 = new User1('edson', 31)
class Admin1 extends User1 {
	static greet() : void {
		throw new Error('Method not implemented.');
	}
	name: string='admin'
	static getPass: any;
	constructor(age: number) {
		super(name, age);
	}
	getPass(): string {
		return `${this.name}${User.secret}`
	}
}
Admin1.greet()
Admin1.getPass()