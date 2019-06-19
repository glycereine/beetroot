/*Вот еще теории немного https://tproger.ru/translations/oop-js-fundamentals/

Зачада:
Опишите класс Human:  для создания объектов со свойствами name, age и height конструктор класса должен принимать одноимённые аргументы .
Создайте массив humans из десяти объектов.
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

class Human {
	constructor(name, age, height) {
		this.name = name
		this.age = age
		this.height = height
	}

	getInfo() {
		return this.name + ' ' + this.age + ' ' + this.height
	}
}


let humans = [
    ["Коля", 23, 180],
    ["Даша", 19, 170],
    ["Ваня", 18, 192],
    ["Петя", 45, 178],
    ["Вася", 34, 197],
    ["Джони", 40, 168],
    ["Катя", 37, 160],
    ["Петя", 29, 200],
    ["Соня", 21, 172],
    ["Женя", 25, 175]
];

let humans_arr = humans.reduce(function(summ, item){
	let temp = new Human(...item);
	return [...summ, temp];
},[]);

console.log('humans', humans_arr);
console.log('ываыва=', humans_arr[0].getInfo() );


var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});


/*-- /////////////////////////// --*/


/* Создание объекта
---------------------------------*/
var a = 10, b = 20;
var obj = { x: a, y: b };
var { x: A, y: B } = obj;

console.log(A, B); // 10 20

/*-- /////////////////////////// --*/


// let fruits = [];
// fruits.push('банан', 'яблоко', 'персик');
// console.log(fruits);



/*
Имя: Том, возраст: 26.
Том ведет машину Бентли

*/

// конструктор типа Car
/*function Car(mName, mYear){
	this.name = mName;
	this.year = mYear;
	this.getCarInfo = function(){
		document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
	};
};
// конструктор типа User
function User(pName, pAge) {
	this.name = pName;
	this.age = pAge;

	this.driveCar = function(car){
		document.write(this.name + " ведет машину " + car.name + "<br/>");
	};
	this.displayInfo = function(){
		document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
	};
};

var tom = new User("Том", 26);
tom.displayInfo();

var bently = new Car("Бентли", 2004);
bently.getCarInfo();
tom.driveCar(bently);

*/

/*const greeter = new Promise((res, rej) => {
  res('Hello world!');
})

async function myFunc() {
  const greeting = await greeter;
  console.log(greeting);
}

myFunc(); // 'Hello world!'*/


/* Присваиваем "значения" свойств объекта пеерменной(константы):
--------------------------------------------------------------*/

/*	const employee = {
		"name": 'John',
		"phone": '+7 (765) 000-98-34',
		"company": 'Opera Software',
		"email": 'john@opera.com'
	};
	const employeeKeys = Object.keys(employee);
	//console.log(employeeKeys);

		// const employeeValues = employeeKeys.map(function(key) {
		// 	return employee[key];
		// });

		// сокрощенная запись через стерлчоную функцию:
		const employeeValues = employeeKeys.map(
			key => employee[key]
		);
		//console.log( employeeValues);
*/

/*-- /////////////////////////// --*/







