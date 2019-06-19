// Lessons 1 ( base, from doc )  - Синтаксис Javascript -> Принципы программирования

let ff = 2; // Создание переменной в стандарте ES6 и присваивание ей значение 2
console.log('Создание $ff', ff);

ff = 3;  // переприсваивание нового значение 3, так как это переменная
console.log('переприсваивание $ff', ff);


// функции
console.log('===========================================');
console.log('// функции');

function test() {
	let b = 12;    // переменные, созданные внутри функции НЕдоступны извне 
	ff = 21;
	console.log('function inner $b', b);
}
console.log('вызов ранее созданной функции test() и неопределенной переменной $b:');
test();   // вызов ранее созданной функции


function test2(){
	return 5;
}

console.log('*****************');

//console.log('$b', b);  //-  переменная не определена
console.log('вызов переменной вне функции - $ff new', ff);
console.log('переменная $ff определена, так как была сздана выше функции');


// типы данных:
// integer, function, object, array, string, promise
console.log('===========================================');
console.log('// типы данных:');


let string_type = 'вася';
let integer_type = 23;   // число
let float_type = 1.5;      // число
let function_type = test2();   // присваивание функции какой-то переменной
let object_type = {      // объект
	'name': 'Oleg',
	'surname': 'Pupkin',
	'email': 'Oleg@sdfs.com',
	'living address': '69',
};
let array_simple_type = [1,3,4];    // массив обычный
let array_assoc_type = [   // массив ассоциативный
	name=>'Petja',
	surname=>'Mischuk',
	address => [
		name=>'Petja',
		surname=>'Mischuk',
	],
];

console.log('1 string_type', string_type, typeof string_type );   
console.log('2 integer_type', integer_type, typeof integer_type);
console.log('3 float_type', float_type, typeof float_type);
console.log('4 function_type', function_type, typeof function_type);
console.log('5 object_type', object_type, typeof object_type);
console.log('6 array_simple_type', array_simple_type, typeof array_simple_type);
console.log('7 array_assoc_type', array_assoc_type, typeof array_assoc_type);

console.log('*****************');

console.log('Варианты преобразования строки в число:');
console.log('3');

let summa1 = +'3.23'+3;    // Варианты преобразования строки в число
let summa2 = 3+'3';
let summa3 = Number('3.23')+3;
console.log('summa1', summa1);
console.log('summa2', summa2);
console.log('summa3', summa3);

console.log('***************');

console.log('object_type email - ', object_type.email);   // вывод отдельный свойств объекта
console.log('object_type living address - ', object_type['living address']);

console.log('***************');
let new_cos = Math.pow(3,3);   // использование родного объекта Math для получение степени числа

console.log('new_cos', new_cos );

console.log('===========================================');


console.log('Доступ к свойству объекта objectName.propertyName:');
//var myCar = new Object();
var myCar = {};
myCar.firm = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

myCar.color; // undefined

console.log(myCar.firm);


var option1 = 'firm';  myCar[option1] = 'Toyota';
console.log(option1);