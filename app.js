
// question 1 return sum of two numbers pass ✅
// function addition(num1, num2) {
//     return num1 + num2

// }
// console.log (addition(7,3))


// question 2 convert hours into seconds ✅
// function hoursIntoSeconds (hours) {
//     return hours * 60 * 60
// }

// console.log (hoursIntoSeconds (24))


// question 3 Convert perimeter of rectangle ✅
// function calcPerimeter (length, width) {
//     return 2 * length + 2 * width 
// }

// console.log (calcPerimeter (2,9))


// q4 calculate area of triangle ✅
// function calcTriangleArea (base, height) {
//     return .5 * base * height 
// }

// console.log (calcTriangleArea (20,20))



// q5 extend a string ✅
// function appendFrontend (string) {
//     return string + `Frontend`
// }

// console.log (appendFrontend (`Orange`) )


// q6 greater than 100 ✅
// function sumGreaterThan100 (num1, num2) {
//     return num1 + num2 > 100 
// }

// console.log (sumGreaterThan100 (100, -50))


// q7 less than or equal to zero ✅
// function lessThanOrEqualToZero (num1) {
//     return num1 <= 0 
// }

// console.log (lessThanOrEqualToZero (-5556))


// q8 opposite boolean ✅
// function oppositeBoolean (bool) {
//     return !bool 
// }

// console.log (oppositeBoolean(false))



// q9 is not equal to number 0 ✅
// function isNotZero (num) {
//     return num !== 0 
// }

// console.log (isNotZero (`bp3`))


// q10 calc the remainder ✅
// function calcRemainder (num1, num2){
//     return num1 % num2 
// }
// console.log (calcRemainder (9,8))


// q11 is number odd 🙅🏾‍♂️ 
// function isOdd (num) {
//     return num % 2 !==0
// }
   
// console.log (isOdd (2))

// q12 is number is even return 1 if not retuen -1 ✅
// function booleanInteger (num) {
//     return num % 2 === 0  ? 1 : -1 
// }

// console.log (booleanInteger(5))


// q13/14 if `logged_in` is equal to `subscribed return true otherwise return false ` also or function 🙌🏾
function isLoggedInandSubscribed (loggedIn, subscribed) {
    return loggedIn === `LOGGED_IN` && subscribed === `SUBSCRIBED`  
}

console.log (isLoggedInandSubscribed(`LOGGED_IN`, `SUBSCRIBED`))


function isLoggedInOrSubscribed (loggedIn, subscribed) {
    return loggedIn === `LOGGED_OUT` || subscribed === `NOT_SUBSCRIBED`  
}

console.log (isLoggedInOrSubscribed(`LOGGED_IN`, `SUBSCRIBED`))


