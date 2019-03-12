/*Вот еще теории немного https://tproger.ru/translations/oop-js-fundamentals/


Зачада:
Опишите класс Human:  для создания объектов со свойствами name, age и height конструктор класса должен принимать одноимённые аргументы . Создайте массив humans из десяти объектов:
«Коля», 23, 180,
«Даша», 19, 170,
«Ваня», 18, 192,
«Петя», 45, 178,
«Вася», 34, 197,
«Джони», 40, 168,
«Катя», 37, 160,
«Петя», 29, 200,
«Соня», 21, 172,
«Женя», 25, 175
Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»), метод геттер firstname ( он должен возвращать свойство name объекта)
*/

// class Human {
// 	constructor(name, age, height) {
// 		this.name = name
// 		this.age = age
// 		this.height = height
// 	}

// 	getInfo() {
// 		return this.name + ' ' + this.age + ' ' + this.height
// 	}
// }


// let humans = [
//     ["Коля", 23, 180],
//     ["Даша", 19, 170],
//     ["Ваня", 18, 192],
//     ["Петя", 45, 178],
//     ["Вася", 34, 197],
//     ["Джони", 40, 168],
//     ["Катя", 37, 160],
//     ["Петя", 29, 200],
//     ["Соня", 21, 172],
//     ["Женя", 25, 175]
// ];



// let humans_arr = humans.reduce(function(summ, item){
// 	let temp = new Human(...item);
// 	return [...summ, temp];
// },[]);

// console.log('humans', humans_arr);
// console.log('ываыва=', humans_arr[0].getInfo() );


// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });





// Создание объекта 
var a = 10, b = 20;
var obj = { x: a, y: b };
var       { x: A, y: B } = obj;

console.log(A, B); // 10 20