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

//10. Ask user a password and print access status - Hardcord correct password in a variable and compare with input. (both 10 and 11 from question sheet - hardcode password match and 3 attempts check)

console.log("10. Ask user a password and print access status - Hardcord correct password in a variable and compare with input.");

let password = "chirag";
let limit = 3;

while (limit > 0) {
    let input = prompt("Enter Password");
    if (input == password) {
        console.log("Correct Password! You're allowed to enter the course");
        break;
    } else {
        console.log("Incorrect Password!");
    }
    limit--;
}
if (limit == 0) {
    console.log("You've entered wrong password 3 times!! Account Blocked, Please contact your admin");
}


//11. Ask user to add a word until he/she types 'stop' also count how many time types word 'yes'.

console.log("11. Ask user to add a word until he/she types 'stop' also count how many time types word 'yes'.");

let stop_word = "stop";
let count_word = "yes";
let total_count = 0;

let input;
do {
    input = prompt("Enter a word");
    if (input == stop_word) {
        console.log("Stopping...");
        break;
    } else if (input == "yes") {
        total_count++;
    }
} while (input = stop_word);

console.log(`User entered ${count_word} word ${total_count} times`);


//12. print number divisible by 7 from 1 to 50

console.log("12. print number divisible by 7 from 1 to 50");
for (let i = 1; i <= 50; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

//13. print the sum of all odd numbers from 1 to 30

console.log("13. print the sum of all odd numbers from 1 to 30");

let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}
console.log(`Sum of odd numbers between 1 to 30 is: ${sum}`);


//14.Keep asking user a nummber until he/she enters an even number;

console.log("14.Keep asking user a nummber until he/she enters an even number;");

let input_value;

do {
    input_value = prompt("Enter a number");
    input_value = parseInt(input_value);
    console.log(input_value);
    if (input_value % 2 == 0) {
        console.log("Condition Matched!! Even number entered so stopping...");
        break;
    }
} while (input_value % 2 != 0)


//15. print numbers between two user input start and end

console.log("15. print numbers between two user input start and end");

let num1 = prompt("enter start number");
let num2 = prompt("enter end number");
for(let i=num1;i<=num2;i++){
    console.log(i);
}

//16. print first 3 odd numbers between 1 to 20

console.log("16. print first 3 odd numbers between 1 to 20");
let odd_count=1;
for(let i=1;i<=20;i++){
    if(i%2!=0 && odd_count<4){
        console.log(i);
        odd_count++;
    }
    if(odd_count>3){
        break;
    }
}

//17. Ask user 5 numbers and count how many numbers are positive. use Loop, condition and counter

console.log("17. Ask user 5 numbers and count how many numbers are positive. use Loop, condition and counter");

let positive_numbers_count = 0;

for(let i=1;i<=5;i++){
    let val = +prompt("Enter a number");
    if(val>0){
        positive_numbers_count++;
    }
}
console.log("Total positive numbers entered are : "+ positive_numbers_count);

// 18. ATM simulator - Allow 3 withdrawls - start with 1000 rs. balance. ask for withdrawl 3 times. if enough balance then deduct or say 'Insufficient Balance'

console.log("18. ATM simulator - Allow 3 withdrawls - start with 1000 rs. balance. ask for withdrawl 3 times. if enough balance then deduct or say 'Insufficient Balance'");

let balance = 1000;
let withdrawl_count = 1;
while(withdrawl_count<4){
    let withdrawl_amount = prompt("How many amount you would like to withdrawl?: Allowed 3 attempts only");
    if(balance>=withdrawl_amount){
        balance-=withdrawl_amount;
        console.log("You withdrawl Rs. "+withdrawl_amount);
        console.log("Balance: Rs. "+balance);
        console.log("Attempt number "+withdrawl_count);
        withdrawl_count++;
    }else{
        console.log("Insufficient Amount");
    }
}
