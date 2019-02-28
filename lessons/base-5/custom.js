// Lessons 3 ( base 3, from doc ) Реструктурирующее присваивание -> Ajax


// Структурированное присваивание для массивов
// var arr = ['this', 'is', 'array'];
// var first = arr[0], 
//     second = arr[1], 
//     third = arr[2];

// console.log(first, second, third); // this is array



var f = function() {
  return ['this', 'is', 'array'];
};
// ES6 destructuring для массивов
var [ a, b, c ] = f();
console.log(a, b, c); // this is array
