//Object : It contains information in the form of key:value pair

//Creation of object

let user = {
    usr_name:"Chirag",
    usr_city:"Bhopal"
};

let emp = new Object();
emp.emp_name="Chirag Jain";
emp.emp_designation="Developer";

//Accessing OBject Properties

console.log(emp.emp_name);  //using dot notation
console.log(emp["emp_designation"]); //using bracket notation

//Nesting Object

let person = {
    p_name:"Shiny",
    p_contact:"9999999999",
    p_address:{
        p_city:"Bhopal",
        p_state:"MP",
        p_country:"India"
    }
};

console.log(person.p_name);
console.log(person.p_address.p_city);


//deleting property

console.log(person);
delete person.p_contact;
console.log(person);