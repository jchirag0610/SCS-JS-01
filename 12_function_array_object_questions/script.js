// # 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
function sayHello(){
    console.log("Hello Javascript");
}
sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.
function add(a,b){
    console.log(a+b);
}
add(2,3);

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
function greet(name="Guest"){
    console.log(`Hi ${name}`);
}
greet("Chirag");
greet();

// 4. Use rest parameters to make a function that adds unlimited numbers.
function sum(...numbers){
    return numbers.reduce((acc,val)=>acc+val,0);
}

console.log(sum(1,2,3,4,5));

// 5. Create an IIFE that prints `"I run instantly!"`.
(function(){
    console.log("I run instantly!");
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.
function outer(){
    let num=10;
    function inner(){
        console.log(num);
    }
    inner();
}

outer();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let fruits = ["Orange","Grapes","Mango","Papaya","Guava"];
console.log(fruits);
fruits.push("Litchi");
console.log(fruits);
fruits.shift();
console.log(fruits);


// 8. Use a `for` loop to print all elements of an array.
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
let person = {
    name:"chirag",
    age:"10",
    city:"Bhopal"
};

console.log(person.name); 
console.log(person.age); 
console.log(person.city); 


// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

setTimeout(function(){
    console.log("Time's up!");
},2000);


// # 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.
// 6. Use `filter()` to get only even numbers from an array.
// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
// 10. Create a nested object (`user → address → city`) and access the city name inside it.