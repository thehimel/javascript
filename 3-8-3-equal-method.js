//Reference: https://www.udemy.com/course/the-complete-javascript-course/
const log = console.log;

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        log(this);
        log(2016 - this.yearOfBirth);
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}
mike.calculateAge = john.calculateAge;
mike.calculateAge();