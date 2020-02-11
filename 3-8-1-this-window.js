//Reference: https://www.udemy.com/course/the-complete-javascript-course/
const log = console.log;

log(this);  //refers to global object {}

calculateAge(1985);
function calculateAge(year){
    log(2016-year);
    log(this); //refers to global object {}
}