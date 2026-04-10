//number
let num = 100; 
console.log(num);
console.log(typeof num);

// Floating point numbers are called float number - 64 bit
let decimal_num = 1.2; 
console.log(decimal_num);
console.log(typeof decimal_num);

//string
let str = "chirag jain"; 
console.log(str);
console.log(typeof str);

//boolean - true or false
let isValid = true;
console.log(isValid);
console.log(typeof isValid);

//null - intentionally absent an object - an inbuilt javascipt bug - typeof method gives the type of null value as object 
let user = null;
console.log(user);
console.log(typeof user);


//undefined - a variable that is declared but value is not being assigned to it.
let designation;
console.log(designation);
console.log(typeof designation);
console.log(undefined+1);


//Array: collection of objects contains various type of value (hetrogenious) - unlike array defintion of other langauge smae type(homogeneous)
let fruits = ["Mango","Orange","Grapes"];
console.table(fruits);
console.log(typeof fruits);

//Objects: a variable that contains data in a key:value pair

let employee = {
    emp_name:"Chirg Jain",
    emp_profile:"Developer",
    emp_department:"IT"
};
console.table(employee);
console.log(typeof employee);

//NaN - Not a number
let n1 = 0/0;
let n2 = "chirag" * 5;
console.log(n1);
console.log(n2);
console.log(typeof n1);
console.log(typeof n2);

//infinity and -infinity
let num1 = 1/0;
console.log(num1);
console.log(typeof num1);

let num2 = -1/0;
console.log(num2);
console.log(typeof num2);


//Symbol - to define a unique indentifier - will learn later in objects
let id = Symbol("id");
console.log(typeof id);



