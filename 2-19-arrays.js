//Reference: https://www.udemy.com/course/the-complete-javascript-course/

const log = console.log;

//iInitialize new array
var names = ['John', 'Mark', 'Jane'];   //recommended
var years = new Array(1990, 1969, 1948);

log(names[2]);  //prints an element
log(names.length);  //prints the array length

//mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
log(names);

//different data types
var john = ['John', 'Smith', 1990, 'teacher', true];
log(john);

//adds an element at the end of the array
john.push('blue');
log(john);

//adds an element at the begining of the array
john.unshift('Mr.');
log(john);

//removes an element from the end of the array
john.pop();
log(john);

//removes an element from the begining of the array
john.shift();
log(john);

//returns the index value of the element if exists
log(john.indexOf('teacher'));

//returns -1 as it doesn't exist
log(john.indexOf('designer'));

john.indexOf('designer') === -1 ?
log('He is not a designer') : log('He is a designer');

//replace an element with array.indexOf(element)
john[john.indexOf('teacher')] = 'doctor';
log(john);