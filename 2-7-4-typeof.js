//refence: https://www.tutorialsteacher.com/articles/how-to-get-type-of-object-in-javascript
const log = console.log;

function myFunc(){
    log("HelloWorld!");
}

var obj = new myFunc();
var bool = false;
var num = 100;
var jsObj = {};
var undef;
var nullObj = null;

log('myFunc: '+ typeof myFunc);
log('obj: '+ typeof obj);
log('bool: ' + typeof bool);
log('num: ' + typeof num);
log('jsObj: ' + typeof jsObj);
log('undef: ' + typeof undef);
log('nullObj: ' + typeof nullObj);
