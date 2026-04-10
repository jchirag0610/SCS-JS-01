//number
let num = 100; 
console.log();

// Floating point numbers are called float number - 64 bit
let decimal_num = 1.2; 
console.log();

//string
let str = "chirag jain"; 
console.log();

//boolean - true or false
let isValid = true;
console.log();

//null - intentionally absent an object - an inbuilt javascipt bug - typeof method gives the type of null value as object 
let user = null;
console.log(user);


//undefined - a variable that is declared but value is not being assigned to it.
let designation;
console.log(designation);

//Array: collection of objects contains various type of value (hetrogenious) - unlike array defintion of other langauge smae type(homogeneous)
let fruits = ["Mango","Orange","Grapes"];
console.table(fruits);

//Objects: a variable that contains data in a key:value pair

let employee = {
    emp_name:"Chirg Jain",
    emp_profile:"Developer",
    emp_department:"IT"
};
console.table(employee);

//NaN - Not a number
let n1 = 0/0;
let n2 = "chirag" * 5;
console.log(n1);
console.log(n2);

//infinity and -infinity
let num1 = 1/0;
console.log(num1);

let num2 = -1/0;
console.log(num2);


//Symbol - to define a unique indentifier - will learn later in objects
let id = Symbol("id");




