// Data Code Js Workshop  Day 3

// Operator Continue
// Modify In Place

let  a = 2 
a += 5
a *= 4
console.log(a) //28

let b = 4
b -= 6
console.log(b) //-2

// Increment & Decrement

let counter = 78
counter++
console.log(counter) //79

let counter2 = 78
++counter2
console.log(counter2) //79

let counter3 = 2
let c = ++counter3
console.log(counter3) //3

let counter4 = 2
let d = counter4++
console.log(counter4) //3

let counter5 = 1
let e = counter5++ //2
e++ // 2
let f = e++ + (++counter5) 
console.log(f) //5

let counter6 = 1
let g = counter6++
let h = --counter6
let i = g++ - (--counter6)
let j = i++ + g
console.log(g) //2
console.log(h) //1
console.log(i) //2
console.log(j) //3

// Ternary Operator

if( 3 < 9) {
    console.log("Correct")
} else {
    console.log("Wrong")
}
// Ans Correct

// (Condition) ? true : false
(39 < 9) ? console.log("Correct") : console.log("Wrong")
// Ans Wrong

// Logical Operators

// || (OR),
// && (AND),
// ! (NOT),
// ?? (NUlish),

let hour = 19

if ( hour < 10 || hour > 19 || hour == 19 || hour > 23) {
    console.log("Correct") // Correct
} else {
    console.log("Wrong")
}

console.log( 1 || 0) // 1
console.log(null || 1) //1
console.log(undefined || null) //null

// AND Operator

let hour2 = 12
let minutes = 38

if (hour2 == 12 && minutes == 30) {
    console.log("Correct")
} else {
    console.log("Wrong")  // Wrong
}

console.log(1 && 2 && 3) //3
console.log(1 && 2 && null && 3) //null
console.log(1 && 2 && 0 && 3) //0
console.log(1 && 2 && undefined && 3) //undefined

// NOT Operator

console.log(!false) //true

// Double NOT Operator

console.log(!!true) //True
console.log(!345) // False
console.log(!!345) // True
console.log(!"") // True

// Comparisions 

console.log(1 > 8) //False
console.log(2 > 2) //False
console.log("Z" > "A") //True
console.log("Glaw" > "Glee") //False
console.log("abcd" > "abcd") //False
console.log("abde" > "abcd") //True
console.log("abde" > "abcz") //True
console.log("2" > 2) //False
console.log("2" >= 2) //True
console.log("1" > 2) //False
console.log("01" > 2) //False
console.log(true == 0) // False
console.log(false == 0) // True

let k = 0
console.log(Boolean(k)) // False

let l = "0"
console.log(Boolean(l)) // True

console.log("0" == 0) // True