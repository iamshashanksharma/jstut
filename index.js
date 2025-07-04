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
objects , arrays , function
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

// dynamic typing
/*
 Actually typing can be classified in two groups like : static and dynamic 
 which means static language typed means when variable is assigned with a particular type it cannot be changed at runtime
 but this is not true for the dynamic typed languages like javascript
*/

// Object 

// like a person have attributes and properties likewise object can be used to club properties of something
// syntax:
/*

let object_name={
key : value;
}
*/

let fruits = {
    name : 'mango',
    color: 'yellow',
};
// can change or access properties
fruits.name = "banana";     //1 way
fruits['name'] = 'bananna';   // 2nd way
console.log(fruits);
console.log(fruits.name); // bananna 


// Array : In js you can store different types of data in array 

let rejectedColors = ['red', 'blue', 'silver'];
console.log(rejectedColors); // prints red , blue , silver
rejectedColors[3] = 1;
console.log(rejectedColors); // stores 1 too ie number
// array is basically an object so you can access it like that by dot notation
console.log(rejectedColors.length); // 4 

// Function : is a block of code which reduces the codebase length by combining meaningful code into one code

function greet()
{
    console.log("Hello");
}

greet();  // function calling  prints Hello

function advancedGreet(firstName,secondName)
{
    console.log("Hello" + " "+ firstName + " "+ secondName);
}
advancedGreet("john","smith");  // Hello John Smith it can pass parameters to functions

// calculating a square

function squareNumber(number)
{ 
   return number*number;

}

let answer =squareNumber(3);
console.log(answer);