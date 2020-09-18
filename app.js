/**
 * #2 Installing Node.js
 * to see the version, type command "node -v"
 * To run this app.js, type command "node app" on the terminal
 */
// console.log("hey ninjas");

/** 
 * #3 Node.js run on V8 engine
 * The abstraction order are JavaScript > Node.js(V8) > C++ > Assembly Language > Machine Code
 */

/**
 * #4 Global Object
 */
/*setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000); */

/*var time = 0;

setInterval(function () {
    time += 2;
    console.log(time + ' seconds have passed');
}, 2000);*/

/*console.log(__dirname);
console.log(__filename);*/

/**
 * #5 Function Expressions
 * assign anonymous function to a variable
 */
// Normal function Expression
/*function sayHi(){
    console.log('Hi');
};
sayHi();*/

// Function expression
/*var sayBye = function(){
    console.log('Bye');
};
sayBye();

function callFunction(fun) {
    fun();
};
callFunction(sayBye);*/

/**
 * #6 Modules & require()
 * We split our code into logical modules
 * example : we create module for count functionality > count.js
 * we import the module by require() with directory as paramater
 */
// this below line will return error
// require('./count');

// store the require to the variable
var counter = require('./count');

console.log(counter(['shaunt', 'crystal', 'ryu']));