const log = console.log;

//object literal
var car = {
    name: 'BMW',
    model: 'M5 Sedan',
    color: 'Blue',
    year: 2020,
    countries: ['USA', 'Canada', 'Germany'],
    isSUV: false
}

log(car.name);
log(car['color']);  //N.B.: string should be given inside
var year = car.year;
log(year);

//object mutation
car.year = 2018;
car['color'] = 'black';
log(car);

//new Object() syntax
var owner = new Object();
owner.firstName = 'Lara';
owner['lastName'] = 'Croft';
owner.birthYear = 1990;
log(owner);