// Lessons 2 ( base, from doc )  Перебирающие методы массивов -> Интерполяция


// Работа c цыклом для масиса "for in" и "for of"

/*
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
for (var key in arr) {
  console.log(key); // 0 1 2 3 4 5
}
for (let value of arr) {
  console.log(value); // 'a' 'b' 'c' 'd' 'e' 'f'
}
*/


// Запись и чтение свойств и методов Объектов
/*
const employee = {
  name: 'John',
  phone: '+7 (765) 000-98-34',
  company: 'Opera Software',
  email: 'john@opera.com',
  key: 'this is key property in object'
};
for (let key in employee) {
  console.log(key + ': ' + employee[key]);
}
// for (let key in employee) {
//   console.log(key + ': ' + employee.key);
// }
*/


/*const obj = {
  a: 10,
  b: function (num) {
    console.log(this.a + num);
  }
};
obj.b(100); // 110
*/

// forEach
/*[1, 2, 3, 4, 5].forEach(function(num, i, nums) {
  console.log(num * 2); // 2 4 6 8 10
});*/


var nums = [10, 20, 30, 40];
var results = nums.map(function(num, index, arr) {
  // Возведение числа в степень соответствующую его индексу в массиве
  return Math.pow(num, index);
});

// Исходный массив nums не изменяется
console.log(nums); // [10,20,30,40]

// результат выполнения map, записанный в переменную
console.log(results); // [1,20,900,64000]