'use strict';
//№1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 префиксное возрастание. сначала выполняет возрастание на 1, потом вычисляет выражение.
d = b++; alert(d);           // 1 постфиксное возрастание. сначала вычисляет выражение (равно 1), потом выполняет возрастание на 1
c = (2 + ++a); alert(c);      // 5 значение а уже увеличино на 1 => a = 3. 2 + 3 = 5
d = (2 + b++); alert(d);      // 4 значение b увеличилось на 1 после строки 5 => 2 + 2 = 4. после вычисления b = 3
alert(a);                    // 3 а в строке 6 равна 3
alert(b);                    // 3 после вычисления выражения 7-ой строки b = 3

//№2 ответ 5 
// 1 + (a = a * 2)  a изначально равна 2 => 1 + (a = 2 * 2)

//№3

// const a = Math.floor(Math.random() * 100);
// const b = Math.floor(Math.random() * 100);
const a = prompt('Введите число');
const b = prompt('Введите число');

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}


//№4 
var a = prompt('Введите число от 0 до 15');
var b = a;
switch (true) {
    case a < 0 || a > 15:
        console.log('Вы ввели не верное число');
        break;
    case a < 15 && a > 0:
        for (let i = 0; i < 15 - a; i++) {
            b++;
            console.log(b);
        }
        break;
};

//№5

function sum(param1, param2) {
    return param1 + param2;
}

function subtract(param1, param2) {
    return param1 - param2;
}

function multiplication(param1, param2) {
    return param1 * param2;
}

function division(param1, param2) {
    return param1 / param2;
}

sum(3, 4);
subtract(3, 4);
multiplication(3, 4);
division(3, 4);

//№6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1, arg2);
        case subtract:
            return subtract(arg1, arg2);
        case multiplication:
            return multiplication(arg1, arg2);
        case division:
            return division(arg1, arg2);
    }

}

mathOperation(1, 2, division);
mathOperation(1, 2, sum);
mathOperation(1, 2, subtract);
mathOperation(1, 2, multiplication);

//№7
// различия null и 0
// при сравнении null преобразуется в 0 поэтому null >= 0 - true, а null > 0  - false. 
// Так же undefined == null - true, но undefined != 0 => null == 0 - false.


//№8 

function power(val, pow) {
    if (pow === 1) return val;
    if (val !== 0) {
        return power(val, --pow) * val;
    }
}

power(-2, 3); 