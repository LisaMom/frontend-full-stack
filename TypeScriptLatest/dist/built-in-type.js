"use strict";
// built-in data type such as String, number, boolean, object, array, undefined, null ...
Object.defineProperty(exports, "__esModule", { value: true });
// : is an anotain while :string is an anotain type
const value = 20;
console.log(typeof value);
let message = "Hello kon kon";
// message = 12; cannot re-assigned difference type
console.log(typeof message);
const arrayValue = ["Hello", 20, 30, "Maria"];
console.log(`Type of array value is : ${typeof arrayValue}`);
const separateDigit = 129_988_690;
console.log(`Type of array value is : ${typeof separateDigit}`);
let x;
console.log(typeof x); // undefined because we have no assign any type to the value
// any type
let randomValue = "hello everyone!!";
console.log(`Type of any type here is : ${typeof randomValue}`);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// if even +1 
let temp = 0;
let result = numbers.filter((v) => {
    if (v % 2 == 0) {
        temp = v + 1;
        console.log(`Even numbers : ${v}-${temp}`);
        return temp;
    }
    else {
        temp = v + 2;
        console.log(`Odd numbers : ${v}-${temp}`);
        return temp;
    }
});
const slideImage = [
    "https://i.pinimg.com/736x/a0/11/64/a01164af0615c06ced56f59d35e1e6ae.jpg",
    "https://i.pinimg.com/736x/2d/32/a5/2d32a5a33196b418c6ce16cab490b4de.jpg"
];
slideImage.map((img) => {
    console.log(img);
});
