
// variable which is defined using let keyword cannot be accessed before initialization (hoisting concept) - there is a discussion point that even the let variable is declared earlier otherwise how error message gives that value is not assigned. Although it gives error unlike var.
//console.log(your_name); 
let your_name = "Chirag Jain";
console.log(your_name);

//variable which is defined using var keyword can be accessed before initialization as due to hositing it is declaration goes on top but profile undefined and still value is not assigned.
//console.log(your_profile);
var your_profile ="Developer";
console.log(your_profile);

//variable which is defined using const is being used for fixed values which is not going to be changed later otherwise will generate error.
//console.log(language);
const language = "Hindi";
console.log(language);
//language = "English";
//console.log(language);


//Console logging methods

console.log("Welcome to console");
console.error("I'm being used when you want to show some error message with error symbol and in red");
console.warn("I'm being used when you want to give warning to user with warning symbol and in yellow");
console.info("I'm being used when you want to show the message as information");


let user = {
    usr_name:"chirag jain",
    usr_profile:"developer",
    usr_language:"hindi"
};

//This is being used when you want to show data in table format (column and row format)
console.table(user);


//If you would like to group up collection of information then use group and group end method

console.group("User - Profile");
console.log('Chirag Jain');
console.log('Developer');
console.log('Hindi');
console.groupEnd();

console.group("User - Skills");
console.log("HTML");
console.log("CSS");
console.log("Javascript");
console.groupEnd();


// If you would like to check execution timing of a code then use time and time end method but do assure that time method label must be used for time end method

console.time("loop"); // its starts the timer
for(let i=0;i<10000;i++){
    console.timeLog("loop"); // it shows the current value of a time method which was started earlier
}
console.timeEnd("loop"); // it ends the timer









