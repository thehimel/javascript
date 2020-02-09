//Reference: https://www.udemy.com/course/the-complete-javascript-course/
/*
John's family went to a trip and they got the given array of bills for food.
John likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 to $200, and 10% if the bill is more than $200.

Mark's family also went to a trip and they got the given array of bills for food.
John likes to tip 20% of the bill when the bill is less than $100,
10% when the bill is between $100 to $300, and 25% if the bill is more than $300.

Implement a tip calculator using objects, loops, and methods. The tips and finalBills arrays
should be the properties of the object.
Calculate the average bills for both family and log which family paid the highest average tip.
*/


const log = console.log;

var john = {
    bills: [124, 48, 268, 180, 42],

    tipCalculator: function(){
        this.tips = [];
        this.finalBills = [];

        this.bills.forEach(bill => {
            var tip;
            switch(true){
                case bill<50:
                   tip = bill*0.20; break;
                case bill>=50 && bill<=200:
                    tip = bill*0.15; break;
                case bill>200:
                    tip = bill*0.10; break;
                default:
                    tip = 0; break;
            }
            this.tips.push(parseFloat(tip.toFixed(2)));
            this.finalBills.push(tip+bill);
        })
    }
}

var mark = {
    bills: [77, 375, 110, 45],
    
    tipCalculator: function(){
        this.tips = [];
        this.finalBills = [];

        this.bills.forEach(bill => {
            var tip;
            switch(true){
                case bill<100:
                   tip = bill*0.20; break;
                case bill>=100 && bill<=300:
                    tip = bill*0.10; break;
                case bill>300:
                    tip = bill*0.25; break;
                default:
                    tip = 0; break;
            }
            this.tips.push(parseFloat(tip.toFixed(2)));
            this.finalBills.push(tip+bill);
        })
    }
}

var calculateAvgTip = (tips) => {
    var totalTips = 0;
    tips.forEach((tip) => {
        totalTips += tip;
    })
    return totalTips/tips.length;
}


john.tipCalculator();
log(john.bills);
log(john.tips);
log(john.finalBills);

mark.tipCalculator();
log(mark.bills);
log(mark.tips);
log(mark.finalBills);

john.tipAvg = calculateAvgTip(john.tips);
log(parseFloat(john.tipAvg.toFixed(2)));

mark.tipAvg = calculateAvgTip(mark.tips);
log(parseFloat(mark.tipAvg.toFixed(2)));

if(john.tipAvg > mark.tipAvg){
    log('John\'s family paid the higher tips');
} else{
    log('Mark\'s family paid the higher tips');
}

log(john);
log(mark);