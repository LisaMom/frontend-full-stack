"use strict";
// tuple type 
// characteristic of tuple 
// 1. fixed-length of array
// 2. ordered data type
Object.defineProperty(exports, "__esModule", { value: true });
let student;
student = ["Maria", 22];
student[0] = "Lisa";
student[1] = 22;
console.log(student);
// student = ["Maria", true, 12]; => error
// student = [true, "Maria"];  => error
//  if we assign the value to more than we set is will error while the value that we put are wrong order it's will error also 
// using destructuring 
const [name, age] = student;
console.log(`The name of student is : ${name}`);
console.log(`The age of student is : ${age}`);
