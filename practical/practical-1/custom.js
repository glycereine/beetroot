// 1 
/*let input = prompt('Значение в i');

if( input > 1 ) {
   alert( input + ' больше 1');
}

else if (input < 1) {
    alert( input + 'меньше 1');
}
else if (input == 0) {
     alert( input + ' = 0');
}*/
 

// вывести прследоватльно числа: 4 , 7, 10, 13
/*let i=4;
for (; i < 14; i = i +2) {
    console.log( i );
}*/


//вывести в таблие <td> календарь 7 в строку (контролируем условие)
let calendar = '<table><tr>';



for (y=1; y<31;y++) {
    
calendar += '<td>' + y +  '</td>';
    if( y%7 === 0) {
        calendar += '</tr>';
    }

}

calendar += '</tr></table>';
document.write(calendar);

