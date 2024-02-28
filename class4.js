// a code that takes 5 numbers from the user. Display both the sorted and unsorted versions of the numbers.
prompt = require("prompt-sync")();

num = []
for(var i = 0; i<5; i++){
    var numInput = Number(prompt("Enter a number: "))
    num.push(numInput)
}
console.log("This is a list of numbers ",num)
console.log("This is the sorted list of numbers ", num.sort())

// Write a code that will increase the value of each element in this matrix by 1
var m = [[1,2,3],
[4,5,6],
[7,8,9]]

console.log("The previous matrix: ",m)
for(i=0; i<m.length; i++){
    for(j=0; j<3; j++){
        m[i][j] = m[i][j]+1
    }
}
console.log("the increased matrix is: ",m)


//  a code that takes input for five numbers from the user using a loop. Check whether each number is even or odd and store the result (even/odd) in an array
var num = []
var evennum = []
var oddnum = []
for(var i = 0; i<5; i++){
    var numInput = Number(prompt("Enter a number: "))
    num.push(numInput)
    if (numInput%2 ==0){
        evennum.push(numInput)
    }else{
        oddnum.push(numInput)
    }
}
console.log("This is a list of numbers: ",num)
console.log("This is the list of even numbers: ", evennum)
console.log("this is the list of odd numbers: ",oddnum)

// Write a code that stores the elements of the above 2D array in a 1D array. Display the final 1D array. 
var m = [
    [2,7,89,6],
    [90,45,3,7],
    [78,56,4,2]
]

var oneD = []
for(i=0; i<m.length; i++){
    for(j=0; j<4; j++){
        oneD.push(m[i][j])
    }
}
console.log("the 1D array is: ",oneD)