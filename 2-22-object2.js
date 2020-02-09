//Reference: https://dev.to/zac_heisey/objects-vs-arrays-2g0e

// Basic object syntax
var object = {
    key: 'value'
};

// Example 'person' object
var person = {
    name: 'Smith',
    age: 33,
    likesCoding: true
};

//Access, Add, and Remove Items from Objects

//Access
// Dot notation
person.age // returns 33
// Bracket notation
person['age'] // returns 33

//Changea property in an object
person.likesCoding = false;

//Add new property to an object
person.hobbies = ['hiking', 'travel', 'reading'];

//Remove a property from an object
delete person.age;

console.log(person);


/*
Iterating Through Objects
for (var key in myObject) {
    console.log(key); // logs keys in myObject
    console.log(myObject[key]); // logs values in myObject
}
*/
for (var key in person) {
    console.log(key); // logs keys in person
    console.log(person[key]); // logs values in person.
    //N.B.: here, person.key = undefined
}

/*
Object.keys(myObject).forEach((key) => {
    console.log(key); // logs keys in myObject
    console.log(myObject[key]); // logs values in myObject
});
*/
Object.keys(person).forEach((key) => {
    console.log(key); // logs keys in person
    console.log(person[key]); // logs values in person
});
