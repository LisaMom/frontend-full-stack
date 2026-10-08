"use strict";
// function with typescript 
// syntax 
// function nameOfFunction(parameter:ParameterType): ReturnType{ teturn ReturnType;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function exchangeRielToDollar(amount) {
    let result = amount / 4000;
    return result.toFixed(2); // kat , 2 tur
}
console.log(exchangeRielToDollar(80000));
let fruites = [];
function insertFruites() {
    fruites.push("apple", "kiwi", "banana");
    return fruites;
}
console.log(insertFruites());
