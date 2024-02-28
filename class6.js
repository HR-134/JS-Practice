var student = {
    name: "Your name",
    age: 22,
    numbers: [89, 76, 56],
    calculateAverage: function () {
      var sum = 0
      for (var i = 0; i < this.numbers.length; i++) {
        sum += this.numbers[i]
      }
      var average = sum / this.numbers.length
      return average
    },
  };
  student.calculateAverage()
  console.log("Average:", average)

//   an object called person with properties like name, age, and occupation. 
var person ={
    name: "Matthew",
    age: 75,
    occupation: "Lawyer",
}
console.log("Name:", person.name)
console.log("Age:", person.age)
console.log("Occupation:", person.occupation)
person.age = 65
person.hobby = "sleeping"
console.log("Age:", person.age)
console.log("Hobby:", person.hobby)