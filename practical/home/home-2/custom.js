// Домашнее задание по материалу с doc - "Перебирающие методы массивов"


// #1


// #2
let data = [{"name":"1 Wanda","email":"wjenkins0@irs.gov","purchases":['iPhone', 'dishwasher', 'cucumbers']},
{"name":"2 Nicholas","email":"nkennedy1@ox.ac.uk","purchases":['tomatoes', 'toster', 'grill']},
{"name":"3 Paula","email":"pstephens2@boston.com","purchases":['apples', 'Macbook', 'iPhone']},
{"name":"4 Fred","email":"fpeterson3@reuters.com","purchases":['beef', 'pork', 'cheese']},
{"name":"5 Andrew","email":"awagner4@weebly.com","purchases":['cottage cheese', 'cream', 'candies']},
{"name":"6 Steven","email":"sgonzales5@mashable.com","purchases":['iMac', 'Android phone', 'Windows 10']},
{"name":"7 Harry","email":"hallen6@nasa.gov","purchases":['green grape', 'tomatoes', 'potatoes']},
{"name":"8 Bonnie","email":"breyes7@kickstarter.com","purchases":['Windows 10', 'dishwasher', 'grill']},
{"name":"9 Lisa","email":"lgreene8@spotify.com","purchases":['pork', 'iMac', 'cheese']},
{"name":"10 Wayne","email":"wramos9@yahoo.com","purchases":['pork', 'iMac', 'cheese']}];
// console.log(data);


/*console.log('2 test numbers > 3 -------------------------------');

let nums = [1, 2, 3, 4, 5];
let result1 = nums.some(function(num) {
  return num > 3;
});
console.log(result1);

*/


console.log('work vers ----------------------------');

let customers1 = data.filter(function(customer1) {
    return customer1.purchases.some(function(purchase) {
        // v1
        return purchase === 'iPhone' || purchase === 'apples';
        
        // v2
        //return ['iPhone', 'apples'].includes(purchase);
    });
});
console.log(customers1);





























