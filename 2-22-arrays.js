//Reference: https://dev.to/zac_heisey/objects-vs-arrays-2g0e

log = console.log;
var vacationSpots = ['Tokyo', 'Bali', 'Mexico City', 'Vancouver'];

log(vacationSpots);
log(vacationSpots[2]); // returns 'Mexico City'

// push() - Adds item(s) to the end of an array
vacationSpots.push('Miami');
vacationSpots.push('Paris', 'London');
log(vacationSpots);

// pop() - Removes the last item from an array
vacationSpots.pop();
vacationSpots.pop('Paris'); //This is also valid. But it will remove the last element only
log(vacationSpots);

// unshift() - Adds item(s) to the beginning of an array
vacationSpots.unshift('Cape Town', 'Moscow');
log(vacationSpots);

// shift() - Removes the first item from an array
vacationSpots.shift();
vacationSpots.shift('Moscow'); //This is also valid. But it will remove the first element only
log(vacationSpots);

/*
remove a particular element from the array
Example: Remove 'Mexico City' from vacationSpots[]
*/
vacationSpots[vacationSpots.indexOf('Mexico City')] = vacationSpots[0];    //moved the first element to the place of 'Mexico City'
vacationSpots.shift();  //removed the first element. thus 'Mexico City' is removed from the array.
log(vacationSpots);
