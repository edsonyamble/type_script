//custom name for keys 
enum links {
	google = 'https://google.com',
	yandex = 'https://yandex.ru',
	vk = 'https://vk.com'
}
//using
links.google,
 links.yandex,
  links.vk
//в жс возрашаеться  функция и обект 
const enum links {
	google = 'https://google.com',
	yandex = 'https://yandex.ru',
	vk = 'https://vk.com',
}//в жс возрашаеться  функция и обект но они не видно то есть миниризовали  

const enum links {
	google = 'https://google.com',
	yandex = 'https://yandex.ru',
	vk = 'https://vk.com',
}
const arr = [links.google, links.yandex, links.vk]//в жс возрашаеться   толко ссылки
