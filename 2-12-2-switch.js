//Reference: https://www.udemy.com/course/the-complete-javascript-course/
const log = console.log;
var age = 25;

if(age < 13){
    log('boy');
} else if(age >= 13 && age<20){
    log('teenager');
} else if(age >=20 && age<30){
    log('young man')
} else{
    log('man');
}

//equivalent code with switch
switch(true){
    case age < 13:
        log('boy');
        break;
    case age >= 13 && age<20:
        log('teenager');
        break;
    case age >=20 && age<30:
        log('young man');
        break;
    default:
        log('man');
}