// Data Code Js Workshop  Day 2

// Data Type

let age = 21 
console.log(typeof(age))

const r = 0
let circleArea1 = 3.14 * r * r
console.log(circleArea1)

let circelArea2 = "three" / 3
console.log(circelArea2)

let circleArea3 = 56 / 0
console.log(circleArea3)

let circelArea4 = NaN * 3
console.log(circelArea4)

let circelArea5 = NaN ** 0 // Exception
console.log(circelArea5)

// String

// 1. Double Quotes
let name1 = "Rishabh"
console.log(name1)

// 2. Single Quote
let name2 = 'Rishabh'
console.log(name2)

//3. Back Tick
let name3 = `Rishabh`
console.log(name3)

// Adding Two String
let fullName = "Rishabh" + "Dhawad"
console.log(fullName)

let name4 = "DataCode"
let message = `Welcome to ${name4} Community`
console.log(name4)

// Boolean Data Type
let isGreater = 5 > 9
console.log(isGreater)

// NUll Data Type
let totalMarks = null
totalMarks = 9 + 9
console.log(totalMarks)

// Undefined
let age2 

age2 = undefined
console.log(age2)

// Array
const user = ['Akshay' , 'Mansi' , 'Rishabh']
console.log(typeof user)

// const sum = function 
const sum = () => {
    return 4 + 9
}
console.log(typeof sum)

const user2 = {
    name5: 'DataCode',
    age3: 21,
    height: 6.0,
}

console.log(typeof user2.name5) // String
console.log(typeof user2.age3) // Number
console.log(typeof user2.height) // Number

console.log(typeof null) // Its an Object

// Type Conversion Of String
let value = true
value = String(value);
console.log(typeof value) 
console.log(value) 

// const arr = [1,2,3,4] 
// arr = String(arr) // We cant re assign the const variale
// console.log(typeof arr)

// To String Method

const arr = [1,2,3,4,5]
const updated = arr.toString()
console.log(arr.toString)

// Number Conversion 
// Number (value)

let str = "123"
let num = Number(str)
console.log(num) // 123

let num2 = Number(undefined)
console.log(num2) // NAN

let num3 = Number(null)
console.log(num3) // 0

let num4 = Number(false)
console.log(num4) // 0

console.log(Boolean(1))  //True
console.log(Boolean(0))  // False
console.log(Boolean("Hello"))  //True
console.log(Boolean(""))  //False
console.log(Boolean(" "))  //True

// Operators Eg: + - / * =
//1. Unary Operator
let x1 = 1
console.log(x1)   //1

//2. Binary Operator
let x = 3 , y = 4
console.log(x*y)   //12

//3. Tenary Operator
console.log(9 ** (1/2))   //3

let fullName2 = "1" + "2"
console.log(fullName2) //12

let value2 = "2" + "1"
console.log(value2) //21

let value3 = 6 - "2" // Precedence Rule 
console.log(value3) //4

console.log("6" - "2") //4
console.log("6" / "2") //3
console.log("6" / 2) //3
console.log( 2 + 2 + "1") //41
console.log( "1" + 2 + 2) //122

// Numeric Conversation Unary

let a = 1 
console.log(a) //1

let b = true
console.log(b)  //true

let c = +true
console.log(c)  // 1

let d = +"3"
let e = "5"
console.log( d + e) //35

let f = +"3"
let g = +"5"
console.log( f + g) //8

// Operator Precedence
let h, i, k
h = i = k = 2 + 6 * 7
console.log(h) //44