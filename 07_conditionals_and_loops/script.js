//1. print number from 1 to 10

console.log('1. print number from 1 to 10');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. print even numbers from 1 to 20

console.log('2. print even numbers from 1 to 20');
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//3. print number from 10 to 1

console.log('3. print number from 10 to 1');
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//4. print the word "Yes" 5 times

console.log("4. print the word 'Yes' 5 times");
for (let i = 0; i < 5; i++) {
    console.log("Yes");
}

//5. print whether the numbers from 1 to 20 is ever or odd

console.log('5. print even or odd numbers from 1 to 20');
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is Even Number.`);
    } else {
        console.log(`${i} is Odd Number.`);
    }
}

//6. Ask user a number and print if it is positive or negative
console.log('6. Ask user a number and print if it is positive or negative');

let num = prompt("Enter a number");
console.log(num > 0 ? "positive" : num < 0 ? "negative" : "zero")



//7. Ask user his/her age and print if valid for voting
console.log('7. Ask user his/her age and print if valid for voting');

let age = prompt("Enter your age");
console.log(age >= 18 ? "Eligible for voting" : "Not Eligible for voting");


//8. print multiplication table of 5 as 5 * 1 to 5
console.log("8. print multiplication table of 5 as 5 * 1 to 5");
let n = 10;
console.log(`8. table of ${n} as ${n} * 1 to ${n}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} to ${n * i}`);
}

//9. print how many numbers between 1 to 15 are greater than 8
console.log("9. print how many numbers between 1 to 15 are greater than 8");
let count = 0;
for (let i = 1; i <= 15; i++) {
    if (i > 8) {
        count++;
    }
}
console.log("Total numbers which are greater than 8 are : " + count);

//10. Ask user a password and print access status - Hardcord correct password in a variable and compare with input.

console.log("10. Ask user a password and print access status - Hardcord correct password in a variable and compare with input.");

let password = "chirag";
let pass = prompt("Enter Password");
if (pass == password) {
    console.log("Correct Password! You're allowed to enter the course");
} else {
    console.log("Incorrect Password!");
}