//Array: collection of element - in js multiple type of values can be stored as a collection unlike other language


// Array Creation - Using Array Literal
let fruits = ["Orange", "Papaya", "Grapes"];

// Array Creation - Using Array Constructor
let numbers = new Array(1, 2, 3, 4);

console.log(fruits);
console.log(numbers);


//Accessing Elements
console.log(fruits[0]);
console.log(fruits[1]);

//Common Array Methods

let arr = [10, 20, 30, 40, 50];

console.log(arr);

//Push - add element at the end
arr.push(60);
console.log(arr);

//Pop - remove element from the end
arr.pop();
console.log(arr);

//shift - remove first element
arr.shift();
console.log(arr);

//unshift - add element at first
arr.unshift(55);
console.log(arr);

//index of
console.log(`Grapes exists at position: ${fruits.indexOf("Grapes")} in fruits array`);

//array destructuring
let [f1, f2, f3] = fruits;
console.log(f1, f2, f3);

//spread operator
let ar = [...arr, 100];
console.log(ar);

//reverse
console.log(ar.reverse());

//sort
console.log(ar.sort((a, b) => a - b));  //ascending
console.log(ar.sort((a, b) => b - a));  //descending


//join: joins array element using a string here I've used ,
console.log(fruits.join(", "));

//toString
console.log(arr.toString());



//Array Iteration using simple for loop

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Array Iteration using simple foreach loop

arr.forEach((num) => {
    console.log(num);
})