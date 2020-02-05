var firstName = 'John';
var age = 28;
var job = 'teacher';
var isMarried = false;

//type coercion: number (age) and boolean (isMarried) data types are converted to string
console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var food;
//type coercion: undefined (food) data type is converted to string
console.log('Give me some ' + food);


//variable mutation: age is changed to 30 from 24
age = 30;
console.log('His age is ' + age)

//variable mutation: age is changed to string from number
age = 'twenty eight';
console.log('His age is ' + age)