//Simple function
function welcomeMessage() {
    console.log("Welcome Chirag");
}

welcomeMessage();

//Function with argument
function welcomeMessageWithArgument(message) {
    console.log(message);
}
welcomeMessageWithArgument("Hi Chirag");


//Function with argument- show all the arguments using array like arguments object
function message(message1, message2, message3) {
    console.log(arguments);
}
message("Hi Chirag", "Hello Chirag", "Good Morning Chirag");



//Recursion: Function calls itself until a condition
function factorial(num) {
    if (num == 1)
        return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5));


//Default Parameters

function multiply(num1, num2 = 5) {
    console.log(num1 * num2);
}
multiply(2, 2);
multiply(2); // In this case it will not give error as num2 already have a default value so if no argument for num2 is passed then function automatically picks the default value.


//Rest Parameters: when we don't know how many arguments can be passed then we can use rest parameter

function sum(...numbers) {
    return numbers.reduce((acc, val) => (acc + val), 0);
}
console.log(sum(1, 2, 3, 4, 5));

//Destructured Parameters: can use direct name which is being passed in argument instead of obj.usr_name like structure for reading value from an object. But do assure destructure param name must be same as passed argument.
function print({ usr_name, usr_city }) {
    console.log(usr_name);
    console.log(usr_city);
}

print({ usr_name: "chirag", usr_city: "Delhi" });


//Arguments : 
// Positional - (position of argument lie 1st is a, 2nd is b etc.)
// Default - if no argument is being passed for any param then default value can be used without facing an error like missing argument. 
// Spread - an array can be passed as spread argument as a copy of an array.


let arr = [10, 20, 30];

function show(a, b, c) {
    return a + b + c;
}
console.log(show(...arr));

//Nested Function: Function inside another function

function parent() {
    console.log("parent function");
    function child() {
        console.log("child function");
    }
    child();
}

parent();


//IIFE (Immediate Invoked Function Expression) - earlier used before es6 for separate scoping - It is immediately being called after defining.

(function () {
    console.log("Hello World!");
})();


// Arrow / Fat Arrow Function

const display = () => {
    console.log(display);
};
const add = (a, b) => {
    console.log(a + b);
};

add(2, 3);


// Anonymous Function: temporarily function without name
setTimeout(function () {
    console.log("I am anonymous");
}, 2000);

//Higher order function: a function that take or return function

function higher(fn) {
    return fn();
}

higher(() => {
    console.log("hiii");
});

// Callback function: a fuction which is being passed as an argument and execute later

function greeting(name, callback) {
    console.log("Hi " + name);
    callback();
}

greeting("Chirag", () => { console.log("How r u?") });


//First Class function: which are treated as value

const hi = ()=>console.log("hi guys");

const greet = hi;
greet();
