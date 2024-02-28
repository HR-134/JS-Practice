var prompt = require("prompt-sync")();

function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function calculate(num1,num2,add,subtract,multiply){
    var sum = add(num1,num2)
    var diff = subtract(num1,num2)
    var product = multiply(num1,num2)
    console.log("sum: ",sum)
    console.log("difference: ",diff)
    console.log("product: ",product)
}
calculate(2,3,add,subtract,multiply)

var arr = [2,4,6,8]

var squared = arr.map(function(num){
    return num*num
})
console.log(squared)