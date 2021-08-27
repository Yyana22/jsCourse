'use strict';

//№1
let userNumber = prompt('Введите число от 0 до 999');

function getObject(number) {
    let units = number % 10;
    let dozens = Math.floor((number % 100) / 10);
    let hundreds = Math.floor(number / 100);
    return {
        units: units,
        dozens: dozens,
        hundreds: hundreds
    }
}

getObject(userNumber);

//№2
const basket = {
    goods: [
        {
            type: 'jeans',
            count: 3,
            price: 250,
            size: ['X', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'white', 'green'],
        },

        {
            type: 'caps',
            count: 4,
            price: 150,
            size: ['X', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'white', 'green'],
        },

        {
            type: 'blouses',
            count: 2,
            price: 200,
            size: ['X', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'white', 'green'],
        },

        {
            type: 'socks',
            count: 5,
            price: 60,
            size: ['X', 'S', 'M', 'L', 'XL'],
            color: ['red', 'blue', 'white', 'green'],
        },
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.count, 0);
    }
};

console.log(basket.countBasketPrice());
