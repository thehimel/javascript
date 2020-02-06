//Reference: https://www.udemy.com/course/the-complete-javascript-course/

const log = console.log;
var job = 'designer';

switch(job){
    case 'teacher':
    case 'instructor':
        log('Teaches kids how to code.');
        break;  //use break to come out of the switch
    case 'driver':
        log('Drives a car.');
        break;
    case 'designer':
        log('Designs beautiful websites.');
        break;
    default:
        log('Does something else.');
        //break is not required as there is nothing after this
}