//Reference: https://www.udemy.com/course/the-complete-javascript-course/

var tipCalculator = function(bill){
    switch(true){
        case bill<50:
            return bill*0.20;
        case bill>50 && bill<200:
            return bill*0.15;
        case bill>200:
            return bill*0.10;
        default:
            return 0;
    }
}
var bills = [124, 48, 268];
var tips = new Array();
var finalBills = new Array();
var tip;

bills.forEach(bill => {
    tip = tipCalculator(bill)
    //tip.toFixed(2) returns string of float upto 2 decimal places. Use parseFloat('string') to convert it to float value
    tips.push(parseFloat(tip.toFixed(2)));
    finalBills.push(tip+bill);
});

console.log(bills);
console.log(tips);
console.log(finalBills);