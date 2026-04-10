//Pure Function: Same input - Always give same output
console.log("Pure");
function pure(num){
    console.log(num*10);
}

pure(10);
pure(10); // same input - same output 

//Impure Function : Changes external varaible or depend on them to generate different output

console.log("Impure");
let count = 0;

function impure(num){
    count++; // external value modified
    console.log(num*count);
}

impure(2);
impure(2); // same input like previous call - but different output


//Closure: A closure is created when an inner function accesses variables from its outer function’s scope, even after the outer function has finished executing.

console.log("Closure");
function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner; // first-class function as a value can be shared
}

const counter = outer();
counter();
counter();