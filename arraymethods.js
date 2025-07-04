// for each method

// executes a function for each array element

let numbers = [2,3,5];
numbers.forEach(num =>{
    console.log(num*2);
});   // here num takes each element of array one by one and process it

console.log(numbers);
// map : use when you want to transform the array into new one
let secondexample = [2,5,6];
let changedexample = secondexample.map(num=>num*2);
console.log(secondexample);
console.log(changedexample);

// filter : use when you want to transform the array into new one by some condition

let pensnumber = [10,7,5,4];
let oddpensnumber = pensnumber.filter(num => num%2 !==0);
console.log(oddpensnumber);

// here filter loop through each pensnumber and calls num function and creates oddpens number


// reduce : when you used to reduce the whole array into sum , average , product
let demoarray = [1,2,3];
let reducedArray = demoarray.reduce((acc,curr) => acc+curr , 0);
console.log(reducedArray);
 // is same as

 let demoArray2 = [1,2,3];
 function add(acc,curr){
    return acc+curr;
 }
 let reducedArray2 = demoArray2.reduce(add,0); // first 0 acts as a initial value accumulating sum 

 // .reduce(callbackfunction , initial value)  first 0 is passed 0+1 then 1+2 = 3 then 3+3 =6 

 //pop

 let veg = ["potato", "onion"];
 veg.pop();
 console.log(veg);

// last element deleted

 //push
  
 let fruit = ["Apple","banana","mango"];
 fruit.push("strawberries");
 console.log(fruit);   // added to the last

 //shift
 // removes the element from the beginning 

 let balls = ["green", 'blue', 'red'];
 balls.shift();
 console.log(balls);

 //unshift - adds element from the beginning 

 let colours = ["red", "silver", "yellow"];
 colours.unshift("violet");
 console.log(colours);

 