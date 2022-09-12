export { }
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
let firstName: string = "Sathesh";
let lastName = "Kumar"; //inferred type
let ab: number = 100;
let result: boolean = true;

let anyValue;
anyValue = 100;
anyValue = "Sathesh"
anyValue = false;
anyValue = {};
anyValue.result = true;
anyValue();
anyValue = [];


let res: boolean | number;  //union type
res = false;
res = 100;

//arrays

let a = [10, 20, "Sathesh"]; //Creating an array using array literal
let a1: number[] = [10, 20];
let a2: string[];
a2 = ["Sathesh", "Kumar"];

let a3: number[] = new Array(); //Array creation using constructor
let a4 = new Array();
let a5 = new Array<number | boolean>();
a5 = [10, 20, 30, true];
let a6: any[] = new Array<any>();

function showName(myName: string): void {
    console.log("My Name is ", myName);
}
showName("Sathesh");
showName("Krishna");

function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(10, 20));

const empObj = {
    firstName: 'Sathesh',
    lastName: 'Kumar'
};
console.log(empObj);
empObj.firstName = "Anil";
console.log(empObj);
// empObj = {};

const array = [10, 20, 30];
array[1] = 100;
console.log(array);
// array = [];

