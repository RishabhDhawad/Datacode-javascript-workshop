// Data Code Js Workshop  Day 4

// Functions
// Modules
// Resuable
// Maintainablity

// Built In Functions

// alert()
// Number()
// String()
// typeof()

// Syntax

// function nameOfFunction(parameters) {
//      function body
// }

// Without Parameter
function showName() {
    console.log("DataCode")
}
// Function Invoke/Call
showName()  // Result: DataCode

// With Paramater
function showName2(name) {
    console.log(`Hello, ${name}`)
}
showName2("Rishabh")  // Result: Hello, Rishabh

function showName3(name,age) {
    console.log(`Hello, ${name}`)
    console.log(`Age ${age}`)
}
showName3("Rishabh") // Hello, Rishabh ; Age undefined

function showName3(name,age) {
    console.log(`Hello, ${name}`)
    console.log(`Age ${age}`)
}
showName3( 34 ,"Rishabh") // Hello, 34 ; Age Rishabh

// Correction of above function
function showName3(name,age) {
    console.log(`Hello, ${name}`)
    console.log(`Age ${age}`)
}
showName3("Rishabh" , 21) // Hello, Rishabh ; Age 21

// Local Scope Of Variable
function showMessage() {
    let message = "Hello, I am from DataCode"
    console.log(message)
}
showMessage()
// console.log(message) // This will not print as its outside the scope

// GLobal Scope 

var userName = "Rishabh"
var message = "Initial Message"

function showMessage2() {
    var message = `Hello, I am ${userName}`
    console.log(message)
}

function showAge() {
    let message = `Hello, I am ${userName}`
    console.log(message)
}

showMessage2()
showAge()

// Default Values

function showNames(userName2 = "DataCode", age2) {
    let message = `HEllo, I am ${userName2}, AGE: ${age2}`
    console.log(message)
}
showNames() // HEllo, I am DataCode, AGE: undefined
showNames("Rishabh", 21) //HEllo, I am Rishabh, AGE: 21
showNames(21) // HEllo, I am 21, AGE: undefined

function sum(a,b) {
    let c = a + b
    console.log("From Function", c)
}

let result = sum(4,8)
console.log(result)

function sum2(a,b) {
    return a + b
}

// getData()
// getUser()
// getMessage()
// createUser()
// setData()

// Function Decleration

// function name(name) {
//     return name
// }
// name(n)

// Function Expression
let add = function(a,b) {
    return a + b
}
console.log(add(3,5)) //8
console.log(add(3,3)) //6

// Arrow Function
// FAT Arrow
const sum3 = (p,q) => {
    return p + q
}
console.log(sum3(4,6)) //10