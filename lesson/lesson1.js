// 'use strict';
// console.log(a); // hoisting
// var test;
// var a = 1;
// console.log(b);
// let b = 2;
// const c = 3;
// console.log(a, b, c);

// test = 123;

// function foo() {
//     var g = 123
//     console.log(a, b, c);
// }

// console.log(g);
// foo();

// const superUserName = 'Vasya'; // camelCase

/**/

//параметры функции
// /**  
//  * 
//  * @param {*} paeam1 
//  * @param {*} param2 
//  */
// function foo(paeam1, param2) {
//     return param1 * param2;
// }
// String
// let a = 'hi';
// let a = "hi";
// let a = `hi`;

// перенос строки
// console.log('первая строка\nвторая строка');

// console.log('Он сказал - "Привет!".');
// console.log('Он сказал - \'Привет!\'.');
// console.log("Он сказал - 'Привет!'.");
// console.log("Он сказал - \"Привет!\".");
// console.log(`Он сказал - 'Привет!".`);

//number
// const a = 1;
// const b = 3.14;
// const c = 10 / 0;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(c);
// console.log(10 * 'hi'); // => console.log(10 * 'hi'); => NaN

// let b = '3.14';
// console.log(typeof b);

// b = +b; // b = 3.14; 
// b = -b; // b = -3.14;
// console.log(b);
// console.log(typeof b);
// console.log(parseInt(b));
// console.log(parseFloat(b));
// console.log(Number(b));

// console.log(2e3);
// console.log(2e-3);

// Boolean(true / false)
// null
// undefined
// symbol

// const a = function () {

// };
// console.log(typeof a);

//арифметические
// console.log(6 + 4);
// console.log(6 - 4);
// console.log(6 * 4);
// console.log(6 / 4);
// console.log(6 ** 4);
// console.log(6 % 4);

// сокращения присвоения
// let a = 1;
// a = a + 2;
// a += 2;
// a -= 2;
// a *= 2;
// a /= 2;
// a **= 2;
// a %= 2;
// console.log(a);

// конкатенация 
// console.log('first item' + ' second item');
// console.log('1' + '1'); // 11
// console.log('1' + 1); // 11
// console.log(1 + '1'); // 11
// console.log(1 + 1); // 2
// console.log(+'1' + +'1'); // 2
// console.log(Number('1') + Number('1')); // 2

// сравнения (использовать строгие сравнения)
// const a = 5; b = 5;
// a > b;
// a >= b;
// a < b;
// a <= b;
// a == b;
// a === b;
// a != b;
// a !== b;