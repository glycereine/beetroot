;  // простой способ закрыть предыдущие все коды


// пример шаблона проектирования модуль
/*(function(){

})();*/


// string, int, function, object, array, boolean, map - допустисмые типы данных


/*const _SDFSD = 'dfds';
const _SDFSD2 = {};
let var1 = 12;

//  _sdfsd = 'sdfsd';  // попытка присвоение нового значния константе - вызовет ошибку

_SDFSD2.value1 = 12;
_SDFSD2.value2 = 'sdfsdf';
_SDFSD2.value3 = function(){
	console.log('erterte');

	return 23;
};

console.log('_sdfsd', _SDFSD);
console.log('_sdfsd2', _SDFSD2);
console.log('_sdfsd2.value3', _SDFSD2.value3);

const DD = _SDFSD2.value3;

console.log('dd', DD() );*/






/***********/

/*var1 = 34;

console.log('var1', var1);


(function(){
	console.log('sfsdfsdfsdfs');
})();


function test(){
	console.log('erterte');

	return 23;
};

const FF = test();
const FF2 = function(){
	console.log('2323232');
};

console.log('ff', FF);
console.log('FF2', FF2);*/


/**
 * Sum some variables
 * @param a
 * @param b
 * @returns {*}
 */
/*function sum(a=2, b=3, c){

	let a1 = +a;
	let b1 = +b;
	let c1 = Number(c);

	return a1+b1+c1;
}

//let sum1 = sum(3,5);
let sum2 = sum(3,'4', '3');


//console.log('sum1', sum1);
console.log('sum2', sum2);*/

/************/

/*const MY_CAR = new Object();
const MY_CAR2 = {};

MY_CAR.firm = "Ford";
MY_CAR.model = "Mustang";
MY_CAR.year = 1969;

console.log('MY_CAR.color',MY_CAR.color); // undefined


let check = 12;*/

///check = check + undefined;

//console.log('check ', check );


/*
let array_simple_type = [1,3,4];    // массив обычный
let array_assoc_type = [   // массив ассоциативный
	name=>'Petja',
	surname=>'Mischuk',
	address => [
		name=>'Petja',
		surname=>'Mischuk',
	],
];

console.log('array_simple_type', array_simple_type);
console.log('array_assoc_type', array_assoc_type);
*/


/*if ( условие ) {
	//список действий , которые мы должны выполнить если условие верно
} else {
	//список действий , которые мы должны выполнить если условие НЕ верно
}*/

/*let check4 = ( check>15 ) ? 'check is greater': 'check is lower';
let check5 = ( check>15 ) ? 3-2: 'check is lower';

console.log('check4', check4);*/

//let check = 15;

/*while (check<18) {
	check++;

	if ( check===15 ) {
		continue;
	}
	//console.log('check1', check);
}*/

/*do {
	// тело цикла
	//console.log('check do while');
} while (false);


if ( check==='15' ) {
	//console.log('check===15');
}*/


/*let check7 = 10;

console.log('check7', check7--);
console.log('check7', check7);*/


/*let i;

for (i = 0; i < 3; i++) {
	alert( i );
}*/

/*let y = 0;

for (; y < 3; y++) {
	alert( y );
}*/



/*
outer: for (let i = 0; i < 3; i++) {

			for (let j = 0; j < 3; j++) {

				let input = prompt('Значение в координатах '+i+','+j, '');

				// если отмена ввода или пустая строка -
				// завершить оба цикла
				if (!input) break outer; // (*)

			}
		}
alert('Готово!');*/



/*const obj = {};

// Первый способ добавления свойств и методов к объекту
obj.prop = 'this is object property';
obj.method = function() {
	return 'this is object method';
};

// Второй способ добавления свойств и методов к объекту
obj['prop2'] = 'this is second object property';
obj['method2'] = function() {
	return 'this is second object method';
};

let prop1 = 'props';

obj[prop1] = 'new prop';

console.log('obj', obj);

//Добавлять методы и свойства в объекты можно прямо при их создании:
const obj2 = {
	prop  : 'this is property',
	method: function() {
		return 'this is method';
	}
};

console.log('obj2', obj2);

console.log('obj.prop', obj.prop);
obj.prop; // "this is property"

let dd = obj.method(); // "this is method"
console.log('obj.method()', dd);

obj['prop']; // "this is property"
obj['method'](); // "this is method"

console.log('obj2[prop1]', obj[prop1]);*/


/*
const employee = {
	name: 'John',
	phone: '+7 (765) 000-98-34',
	company: 'Opera Software',
	email: 'john@opera.com',
	duties: ['Frontend', 'Optimization', 'Testing']
};

for (let key in employee) {
	console.log(key + ': ' + employee[key]);
}


const keys = Object.keys(employee);
//console.log(keys); // ["name","phone","company","email","key"]


keys.forEach(function(el, index, keys){
	console.log('index', index, '  el=', employee[el]);
});*/


// Ключевое слово this

/*
const obj = {
	a: 10,
	b: function (num) {
		console.log(this.a + num);
	}
};

obj.b(3);




function ddd() {
	let dd2 = 12;
	console.log('this', this, dd2);
}
ddd();
*/

//console.log('dd2', dd2);

/*
let cc = 3;
{
	let cc = 2;
	console.log('cc', cc);
}
console.log('cc', cc);
*/

/*
Получение от пользователя значения и вравнение его с заданными условиями
let user_value = prompt('Enter value');
console.log('typeof user_value', isNaN(user_value));

if ( isNaN(user_value)) {
	alert('NAN');
}
else if ( Math.max(0, user_value) ) {
	alert('Bigger');
} else if ( Math.min(0, user_value) ) {
	alert('Less');
} else {
	alert('Zero');
}
*/

/*
let i = 4;
for (;i<14;i = i+3) {
	console.log('i', i);
}
*/



/*let calendar = '<table><tr>';
let y = 1;
for (; y<32;y++) {
	calendar += '<td>'+y+'</td>';
	if ( y%7===0 ) {
		calendar += '</tr><tr>';
	}

}
calendar += '</tr><table>';
document.write(calendar);*/



// Task 1
/*let y = 40;
while (y < 670) {
	y+=10;
	if(y%10 !== 0) {
		continue;
	}
	console.log( y );
}
*/

/*let data = [
	{"name":"Wanda","email":"wjenkins0@irs.gov","purchases":['iPhone', 'dishwasher', 'cucumbers']},
	{"name":"Nicholas","email":"nkennedy1@ox.ac.uk","purchases":['tomatoes', 'toster', 'grill']},
	{"name":"Paula","email":"pstephens2@boston.com","purchases":['apples', 'Macbook', 'iPhone']},
	{"name":"Fred","email":"fpeterson3@reuters.com","purchases":['beef', 'pork', 'cheese']},
	{"name":"Andrew","email":"awagner4@weebly.com","purchases":['cottage cheese', 'cream', 'candies']},
	{"name":"Steven","email":"sgonzales5@mashable.com","purchases":['iMac', 'Android phone', 'Windows 10']},
	{"name":"Harry","email":"hallen6@nasa.gov","purchases":['green grape', 'tomatoes', 'potatoes']},
	{"name":"Bonnie","email":"breyes7@kickstarter.com","purchases":['Windows 10', 'dishwasher', 'grill']},
	{"name":"Lisa","email":"lgreene8@spotify.com","purchases":['pork', 'iMac', 'cheese']},
	{"name":"Wayne","email":"wramos9@yahoo.com","purchases":['apples', 'cream', 'candies']}
];

// Получили данные с сервера и записали их в переменную data
var customers = data.filter(function(person) {
	let [temp] = person.email;
	return temp.toLowerCase() === 'j';
});
console.log(customers);*/


/*let newData = data.filter( one => {
	const newFunc = str =>{
		if(str === "apples") console.log(one.name);
	};
	one.purchases.some(newFunc);
});


console.log('newData', newData);*/

/*
let customers = data.filter(function(customer) {
	return customer.purchases.some(function(purchase) {
		// Variant 1
		//return purchase === 'iPhone' || purchase === 'Macbook' || purchase === 'iMac';

		// Variant 2
		return  ['iPhone','Macbook','iMac'].includes(purchase);
	});
});

let result = data.filter(function(getddd){
	return getddd.purchases.some(function(strsdds){
		return strsdds==="iPhone" || strsdds==="apples" || strsdds==="iMac";
	});
});



console.log('result', result);*/



/*var f = function() {
	return ['this', 'is', 'array', 'this2', 'is2', 'array2'];
};

// ES6 destructuring для массивов
var [ first, second, third, ...ccc ] = f();

console.log(first, second, third);
console.log(ccc);*/

/*let obj = {
	a: 'this3',
	b: 'is3',
	c: 'object3'
};
let { a, b, c } = obj;

console.log(a, b, c);


let obj2 = {
	a: 'this4',
	b: 'is4',
	c: 'object4'
};

let { a: x, b: y, c: z } = obj2;

// Данные записаны в переменные x, y и z
console.log(x, y, z); // this is object



// простой способ собрать все HREF ссылок на сайте
let links_arr =  [...document.links].map( function(item){
	return item.href;

// второй способ с помощью стрелочных функций
let links_arr =  [...document.links].map( (item) => item.href );

 */
/*
const car = {
	model: 'Fiesta',
	manufacturer: 'Ford',
	fullName: function() {
		return `${this.manufacturer} ${this.model}`
	}
}



const car2 = {
	model: 'Fiesta',
	manufacturer: 'Ford',
	fullName: () => {
		return `${this.manufacturer} ${this.model}`
	}
}


console.log('car.fullName()= ', car.fullName());
console.log('car2.fullName()= ', car2.fullName());*/

/*

var ajax =  new XMLHttpRequest();

// Тип запроса и URL с параметрами
ajax.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/19999999' , true );

// Отправить заявку
ajax.send();

// Создаем событие для получения возврата.
ajax.onreadystatechange  =  function () {

	// Если состояние равно 4, а http.status - 200, это связано с тем, что запрос выполнен.
	if ( ajax.readyState  ==  4  &&  ajax.status  ==  200 ) {

		var data =  ajax.responseText ;

		// Возвращение Ajax
		console.log (data);
	} else {

		// Обрабатываем ошибку
		console.log ( ajax.status + ': ' + ajax.statusText ); // пример вывода ошибки
	}
}




$.ajax({
	url  : var_from_php.ajax_url,
	type : 'post',
	data : formData,
	//dataType: 'json',
	processData: false,
	contentType: false,
	success : function( response ) {

	}
});
*/

/*
let name = "Bill";

{
	let name = "Alan";

	{
		let name = "Arnold";

		console.log('Arnold area',name); // Arnold
	}

	console.log('alan area',name); // Alan
}
console.log('window',name); //Bill


console.log('************************************');



let name2 = "Bill";
function one(){
	let name2 = "Alan";

	function two(){
		let name2 = "Arnold";
		console.log(name2);
	}

	two(); // Arnold
}
one();*/


// Module Pattern
// Используется для инкапсуляции кода
let myModule = (function() {
	// Приватная переменная
	let values = ['cats', 'doge', 'harambe'];

	let getValues = function() {
		return values;
	};

	let setValues = function(...newData) {
		values.push( ...newData );
	};

	// возвращает то, к чему вы хотите разрешить доступ в объекте
	// то, как он это возвращает действительно делает его показателем модульного шаблона проектирования
	return {
		getValues: getValues,
		setValues: setValues,
	};
})();

//console.log(myModule.getValues()); // массив мемов
//console.log(myModule.setValues(5, 343) ); // undefined

//console.log(myModule.getValues() ); // undefined