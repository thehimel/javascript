//Reference: https://www.tutorialsteacher.com/javascript/javascript-operators
const log = console.log;

//3. Logical Operators: &&, ||, !
log('3. Logical Operations');
var a=5, b=10;

log(a!=b && a<b);   //true
log(a>b || a==b);   //false
log(a<b || a==b);   //true
log(!a>b);          //false 
log(!a<b);          //true

log()
//4. Assignment Operators: =, +=, -=, *=, /=, %=
log('4. Assignment Operations');
var x=5, y=10, z=15;
log(x=y);   //10
x=5; log(x+=1); //6 
x=5; log(x-=1); //4
x=5;log(x*5); //25
x=5;log(x/=5); //1
x=5;log(x%=2); //1

log();
//5. Conditional/Ternary Operator: ?:
log('5. Conditional/Ternary Operations');
a=10; b=5;
log(a>b ? a : b); //10
log(a>b ? b : a); //5