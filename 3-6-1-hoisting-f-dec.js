//Reference: https://www.udemy.com/course/the-complete-javascript-course/

const log=console.log;

//function declaration
function calculateAge(year){
    log(2016-year); //----(1)
}
calculateAge(1990);

//function declaration
calculateRetirement(1990);
function calculateRetirement(year){
    log(65-(2016-year)); //----(2)
}