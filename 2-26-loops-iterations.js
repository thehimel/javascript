//Reference: https://www.udemy.com/course/the-complete-javascript-course/

const log = console.log;

var john = ['John', 'Smith', 1990, 'Designer', false, 'Blue'];

//loop
for(var i = 0; i < john.length; i++){
    log(john[i]);
}

//backward loop
for(var i = john.length - 1; i >= 0; i--){
    log(john[i]);
}

//array.forEach()
john.forEach(element => {
    log(element);
});

//while
var i = 0;
while(i < john.length){
    log(john[i]);
    i++;
}

/*
continue
skips the present iteration and continues to the next iteration
*/
for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string'){
        continue;
    }
    log(john[i]);
}

/*
break
immediately comes out of the loop
*/
for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string'){
        break;
    }
    log(john[i]);
}