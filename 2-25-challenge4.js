//Reference: https://www.udemy.com/course/the-complete-javascript-course/

const log = console.log;

var mark = {
    name: 'Mark Miller',
    mass: 80,
    height: 1.8288,   //6ft=1.8288m
    calculateBMI: function(){
        this.BMI = this.mass / this.height**2;
    }
}

var john = {
    name: 'John Smith',
    mass: 90,
    height: 1.9812,    //6.5ft=1.9812m
    calculateBMI: function(){
        this.BMI = this.mass / this.height**2;
    }
}

//call the object methods
mark.calculateBMI();
john.calculateBMI();


if(mark.BMI > john.BMI){
    log('Mark has the higher BMI');
} else if(mark.BMI < john.BMI){
    log('John has the higher BMI');
} else{
    log('Both have the same BMI');
}
