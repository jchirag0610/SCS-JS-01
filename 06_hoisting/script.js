//Hoisting: Its a javascript behaviour where variable declaration or function declaration is moved to the top on the scope before its execution.

// var : In case of var variable is declared on the top and even console.log is accessing variable a before its assignment, it won't give error but it will give undefined as assignemnt is done after accessing but due to var is hoisted variable declaration does not give error.

console.log(a);
var a = 10;

// let : In case of let variable is declared on the top internally but it is not treated as hoisted (Hoisting of let is arguing point) and as console.log is accessing variable a before its assignment, it will give error as it is not treated as declared before accessing. 

// TDZ (Temporal Dead Zone): where let or const is being accessed before let b = 10; although it is hoisted.

// const: Same like let

console.log(b);
let b = 10;

// function: Below one will be treated as like var is hoisted

hello();
function hello(){
    console.log("hello");
}


