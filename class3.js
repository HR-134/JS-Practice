// a code that takes two numbers, the first and last numbers of a series, as input from the user. 
var prompt = require("prompt-sync")();

var number = Number(prompt("Enter first number: "))
var number2 = Number(prompt("Enter second number: "))
var sum = 0 ;
for(; number<=number2; number = number+1){
    sum= sum+ number
}
console.log("The sum of the entire series is: ",sum)

// Write a code to calculate and display the sum of all even numbers between 1 and 500.
var i = 2
var sum = 0
for(; i<=500; i = i+2){
    sum = sum + i
    console.log("now i is:",i)
    console.log("now the sum is: ",sum)
}
console.log("the sum of all even numbers from 1 to 500 is:", sum)

// Write a code to calculate and display the sum of all odd numbers between 1 and 500.
2/2
var i = 1
var sum = 0
for(; i<=500; i = i+2){
    sum = sum + i
    console.log("now i is:",i)
    console.log("now the sum is: ",sum)
}
console.log("the sum of all odd numbers from 1 to 500 is:", sum)

// Find the 100th term of this series. The code will display the value of the 100th term of this series. You can use the formula: nth_term = a + (n-1) d 
var a = 3
var d = 5
var n = 100
var nthterm = a+(n-1)*d
console.log("the 100th term of the series is ",nthterm)
var sum = 0
for(; a<=nthterm; a = a+5){
    sum = sum + a
}
console.log("the sum of series upto 100th term is:",sum)