//Reference: https://www.udemy.com/course/the-complete-javascript-course/

function calculateAge(birthYear){
    return 2020 - birthYear;
}

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else{
        console.log(firstName + ' retired ' + -retirement + ' years ago.');
        //If birthYear=1948, retirement=-7. Thus -retirement is used to print the positive value.
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
