//JavaScript variables: var, let, const

// var is function scoped
var lastName = "UI";
if(lastName = "UI") {
    var fullname = "Tricky" + lastName;
}
// This will log an Uncaught ReferenceError: fullName is not defined
console.log(fullname);

// let is block scoped
let firstName = "Tricky";
if(firstName = "Tricky") {
    let fullName = firstName + 'UI';
}
// This will log an Uncaught ReferenceError: fullName is not defined
console.log(fullName)

// const - we can't reassign the value to a const variable
const month = "January";
month = "December";

// This will log an Uncaught TypeError: Assignment to constant variable
console.log(month);