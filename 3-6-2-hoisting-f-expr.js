//Reference: https://www.udemy.com/course/the-complete-javascript-course/

const log=console.log;

//function expression
calculateAge = function (year){
    log(2016-year); //----(1)
}
calculateAge(1990);

//function expression
//returns error: hoisting doesn't work in function expression
calculateRetirement(1990);
calculateRetirement = function(year){
    log(65-(2016-year)); //----(2)
}