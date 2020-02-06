//Reference: https://www.udemy.com/course/the-complete-javascript-course/
/*Given the scores of 3 matches of 3 players. Print average scores.
Find the winer. Consider the draw matches too.*/

const log = console.log;

avgJohn = (89 + 120 + 103) / 3;
avgMike = (116 + 94 + 123) / 3;
avgMary = (97 + 134 + 105) / 3;

log(avgJohn, avgMike, avgMary);

switch(true){
    case avgJohn>avgMike && avgJohn>avgMary:
        log('John won the match');
        break;

    case avgMike>avgJohn && avgMike>avgMary:
        log('Mike won the match');
        break;
    
    case avgMary>avgJohn && avgMary>avgMike:
        log('Mary won the match');
        break;
    default:
        log('It is a draw');
}