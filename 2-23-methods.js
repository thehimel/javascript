//Reference: https://www.udemy.com/course/the-complete-javascript-course/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calculateAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

john.calculateAge();
console.log(john.age);