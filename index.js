console.log('Hello world');
let myName = "shashank";
console.log(myName);

// variable naming rules 

/*
1) cannot start with number
2) cannnot have hyphen and space between varible naming
3) meaningful
4) industry standard camelcasing (eg: myName)
5)cannot be reserved word
*/
/*
It got changed because it let keyword 

let interestRate = 0.8;
interestRate = 1;
console.log(interestRate);
*/

const interestRate = 0.8;
// interestRate = 1;  It gives type error as const cannot be reassigned 
console.log(interestRate);

// types in js 

/*
Primitives(value) :
string , number , boolean , null , undefined

reference :
*/

let friendName = "Raj";
let age = 30;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;

console.log(typeof(friendName)); // string
console.log(typeof(age));        // number 
console.log(typeof(isApproved)); // boolean
console.log(typeof(firstName));  // undefined 
console.log(typeof(selectedColor)); // object shocked welcome to js typeof(null) = object

