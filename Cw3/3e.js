// 3e.js
function Student(firstName, lastName, indexNumber, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.indexNumber = indexNumber;
  this.grades = grades;
  
  this.calculateAverageGrade = function() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  };

  this.printInfo = function() {
    console.log("Imię: " + this.firstName);
    console.log("Nazwisko: " + this.lastName);
    console.log("Średnia ocen: " + this.calculateAverageGrade());
  };
}

const student1 = new Student("John", "Doe", "12345", [4, 3, 5, 4, 5]);
student1.printInfo();
