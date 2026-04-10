let full_name = prompt("enter your full name"); // take input using prompt
alert(`Welcome ${full_name}`); // display input value using alert
console.log(full_name.split(' ')); // split input value using space
console.log(`${full_name} contains 'chirag': ${full_name.includes('chirag')}`); // using template literal and check if input contains a string using includes
console.log(full_name.replace("chirag","shiny")); //replace a string with another one using replace
console.log(full_name.slice(0,4)); // pick some characters from a string using slice.