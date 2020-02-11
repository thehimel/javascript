//Reference: https://www.udemy.com/course/the-complete-javascript-course/
const log = console.log;

log(age);   //returns undefined
var age = 23;

function foo(){
    log(age) //returns undefined
    var age = 65;
    log(age); //returns 65
}

foo();

log(age); //returns 23