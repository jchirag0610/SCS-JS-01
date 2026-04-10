
let a = 10;
let b = 2;
let c = 3;

/*

//Arithmatic Operators

+ Addition
- Subtraction
* Multiplication 
/ Division 
% Modulus (Remainder)
** Exponential (Power)

*/
console.log("Arithmatic Operators");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a % c);
console.log(a ** c);
/*

//Assignment Operators

= Assign 
+= Add and Assign 
-= Subtract and Assign 
*= Multiple and Assign  
/= Divide and Assign  
%= Mod and Assign 
**= Power and Assign  

*/

console.log("Assignment Operators");

console.log(a);
a += 2;
console.log(a);
a -= 2;
console.log(a);
a *= 2;
console.log(a);
a /= 2;
console.log(a);
a **= 2;
console.log(a);
a %= 2;
console.log(a);


/*

//Comparison Operators

== Equals to (Doesn't check type)
=== Strict equals to (Check type as well)
!= Not equals to (Doesn't check type)
!== Strict not equals to (Check type as well)
> Greater than
< Less than
>= Greater than equal to
<= Less than equal to

*/
a = 10;
console.log("Comparison Operators");
console.log(a == "10");
console.log(a === "10");
console.log(a != "10");
console.log(a !== "10");
console.log(a > 10);
console.log(a < 10);
console.log(a >= 10);
console.log(a <= 10);


/*
//Logical Operators
&& And
|| Or
! Not

*/

console.log("Logical Operators");
console.log(10 > 5 && 10 > 7);
console.log(10 > 5 || 10 > 11);
console.log(!10 > 5);


/*
//Ternary Operators
Condition ? True part : False part

*/
console.log("Ternary Operator");

console.log((10 > 5) ? "Yes" : "No");

/*
//Type Checking Operators
typeof  - any type
instance of - for objects 
*/

console.log("Type Checking Operators");

let str = "hello";
let num = 10
console.log(typeof str);
console.log(typeof num);

let user = {
    usr_name: "Chirag",
    usr_profile: "Developer"
};

console.log(user instanceof Object);

/*
//String Operators
 + concatenation
*/
console.log("String Concatenation Operator");

let str_name = "chirag" + " " + "jain";
console.log(str_name);




/*
//Spread/Rest Operators

... Spread Operator (Being used with array)
... Rest Operator (Being used with function)

*/
console.log("Spread Operator");
let arr = [1, 2, 3, 4, 5];
let copy_arr = [...arr];
console.log(arr);
console.log(copy_arr);


console.log("Rest Operator");

function sum(...numbers) {
    return numbers.reduce(function (acc, val) {
        return  acc + val;
    }, 0);
}

console.log(sum(10,20,30));
console.log(sum(...arr));


/*
//Nullish Coalescing Operator

Proivdes a fallback value in case of null or undefined.

*/

console.log("Nullish Coalescing Operator");
let city="Bhopal";
let state=null;
let country;
console.log(city??"Delhi");
console.log(state??"MP");
console.log(country??"India");

/*
//Optional Chaining
Safely accessing nested properties without error
*/
console.log("Optional Chaining");

let usr = {
    profile:{
        usr_name: "Chirag",
        usr_profile: "Developer"
    }
};

console.log(usr.profile.usr_name);
//console.log(usr.address.usr_city); this will generate error as address doesn't exists and trying to read the usr_city of address
console.log(usr.address?.usr_city);  // address is safely handled
console.log(usr?.address?.usr_city); // no need to add ? on usr as it already exists but if usr = {} then usr? is correct
