//Reference: https://www.udemy.com/course/the-complete-javascript-course/
const log = console.log;

var a = 'Hello!';

first();

//log(b); //return error

function first(){
    var b = 'Hi!';
    second();
    function second(){
        var c = 'Hey!';
        log(a+b+c);
        third();
    }
}

function third(){
    var d = 'John';
    log(a+d);
    //log(c); //return error
}