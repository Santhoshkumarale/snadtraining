"use strict";
exports.__esModule = true;
/*
Data Types :-
1. Primitive Types
        number, string, boolean, null, undefined, symbol, any
2. Reference Types
        array, object, class, interface
*/
/* Variable Declaration :-
    <variable_name> : <data_type> = <initial_value>;
*/
var firstName = "Sathesh";
var lastName = "Kumar"; //inferred type
var ab = 100;
var result = true;
/*
let anyValue;
anyValue = 100;
anyValue = "Sathesh"
anyValue = false;
anyValue = {};
anyValue.result = true;
anyValue();
anyValue = [];
*/
var res; //union type
res = false;
res = 100;
//arrays
var a = [10, 20, "Sathesh"]; //Creating an array using array literal
var a1 = [10, 20];
var a2;
a2 = ["Sathesh", "Kumar"];
var a3 = new Array(); //Array creation using constructor
var a4 = new Array();
var a5 = new Array();
a5 = [10, 20, 30, true];
var a6 = new Array();
function showName(myName) {
    console.log("My Name is ", myName);
}
showName("Sathesh");
showName("Krishna");
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
var empObj = {
    firstName: 'Sathesh',
    lastName: 'Kumar'
};
console.log(empObj);
empObj.firstName = "Anil";
console.log(empObj);
// empObj = {};
var array = [10, 20, 30];
array[1] = 100;
console.log(array);
// array = [];
