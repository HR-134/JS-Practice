// 1
var prompt = require('prompt-sync')();

var name = prompt("Enter your name: ")

if (name == "Rachel"){
    console.log("welcome!")
}
else if (name=="Thomas"){
    console.log("welcome!")
}
else if (name=="Matthew"){
    console.log("welcome!")
}
else{
    console.log("Sorry! We Can't find you in our system")
}
 
// 2
var prompt = require('prompt-sync')();

var year = Number(prompt("Enter a year: "))

if (year%4 === 0){
    console.log("Its a leap year.")
}
else{
    console.log("It's not a leap year")
}
 
//3
var prompt = require('prompt-sync')();

var item1 = Number(prompt("enter the price of Item A: "));
var item2 = Number(prompt("enter the price of Item A: "));
var item3 = Number(prompt("enter the price of Item A: "));
var t = item1+item2+item3
console.log("Total Cost of the three items: ",t,"TK")

if (t>50, t<100){
    var discountprice = t-(t*0.1)
    console.log("Congratulations! you get a 10% discount")
    console.log("Total Price: ",discountprice,"TK")
}
else if (t>100){
    var discountprice = t-(t*0.2)
    console.log("Congratulations! you get a 20% discount")
    console.log("Total Price: ",discountprice,"TK")
}
 

// 4
var prompt = require('prompt-sync')();

var m = Number(prompt("enter the math score: "));
var e = Number(prompt("enter the english score: "));
var s = Number(prompt("enter the science score: "));
var averagescore = (m+e+s)/3
console.log("Your Average Score is: ",averagescore)

if (averagescore>60){
    console.log("Your grade: Grade A")
}
else if (averagescore<60){
    console.log("Your grade: Grade F")
}