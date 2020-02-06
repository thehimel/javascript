//Reference: https://www.udemy.com/course/the-complete-javascript-course/

/*
falsy values: undefined, null, 0, false, '', NaN
truthy valuse: not falsy values
*/
const log = console.log;
var height;
height = 0;

if(height){
    log('height is defined')
} else{
    log('height is not defined');
}

//use this technique to avoid falsy when height is defined as 0
if(height || height===0){
    log('height is defined')
} else{
    log('height is not defined');
}

