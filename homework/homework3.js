'use strict';

//№1
let number = 1, count = 0;

while (number <= 100) {
    for (let divisor = 1; divisor <= 100; divisor++) {
        if (number % divisor === 0) count++;
    }

    if (count <= 2) {
        console.log(number);
    }
    number++;
    count = 0;
}

//№2

const cart = [
    ['jeans', 250, 3],
    ['caps', 150, 4],
    ['blouses', 200, 2],
    ['socks', 60, 5],
]

function countBasketPrice(itemOne, itemTwo, itemThree, itemFour) {
    let sum = 0;
    sum = itemOne[1] * itemOne[2] + itemTwo[1] * itemTwo[2] + itemThree[1] * itemThree[2] + itemFour[1] * itemFour[2];
    return alert(sum);
}

countBasketPrice(cart[0], cart[1], cart[2], cart[3]);

//№3

for (let i = 0; i < 9; i++, console.log(i)) {

}

//№4

// let strings = 1;
// // let text = 'x';
// let score = 1;

// while (strings <= 20) {
//     console.log('x'.repeat(score));
//     strings++;
//     score++;
// }

let strings = 1;

for (let score = 0; score < 20; score++) {
    console.log('x'.repeat(strings));
    strings++;
}

//forEach() 
//данный метод вызывает функцию, которая принимает в себя 3 параметра: значение элемента, индекс и сам массив
//можно использовать в виде стрелоной функции. Пусть функция принимает в себя параметр item, тогда: (item => console.log(item))


//map()
//создаёт новый массив с результатом вызова указанной функции для каждого элемента массива. Удобены, когда надо выполнить последовательность действий с каждым элементом
//const prices = [19.99, 4.95, 25, 3.50];
// let new_prices = [];
// for(let i=0; i < prices.length; i++) {
//    new_prices.push(prices[i] * 1.06);
// }
//ИЛИ
// const prices = [19.99, 4.95, 25, 3.50];
// let new_prices = prices.map(price => price * 1.06);


//includes()
//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
// const array1 = [1, 2, 3];
// console.log(array1.includes(2)); //true


//reduce()
//применяется к каждому элементу, возвращая одно значение
// let arr = [1, 2, 3, 4];
// const sum = arr.reduce((number, arr) => number + arr); // будет складывать все элементы массива в переменную number
// console.log(sum); 


//find()
//Метод find() определяет, содержит ли массив элемент с определенным условием, если есть, то вернет значение, если нет - undefined.
// let arr = ['1', 2, 3];
// let users = arr.find(arr => arr === 1);
// console.log(users); // undefined.