//Reference: https://www.udemy.com/course/the-complete-javascript-course/
const log = console.log;

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        log(this);
        log(2016 - this.yearOfBirth);

        function innerFunction(){
            log(this);  //refers to global object {}
        }
        innerFunction();
    }
}

john.calculateAge();