/*
Reference: https://www.udemy.com/course/the-complete-javascript-course/

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 (mass in kg and height in meter).

1. Store the masses and heights of Mark and John in variables.
2. Calculate their BMIs.
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than Jokhn's? true/false")
*/

massMark = 80;
heightMark = 1.8288;    //6ft=1.8288m

massJohn = 90;
heightJohn = 1.9812;    //6.5ft=1.9812m

isMarkHigherBMI = massMark/heightMark**2 > massJohn/heightJohn**2;   //Comparison operator '>' has the lowest precendence here
console.log('Is Mark\'s BMI higher than John\'s? '+ isMarkHigherBMI);