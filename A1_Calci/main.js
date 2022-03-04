const add = require("./add");
const sub = require("./subtract");
const multi = require("./multiply");
const devide = require("./devide");

var A = 9;
var B = 3;

// console.log(add(A, B));
// console.log(sub(A, B));
// console.log(multi(A, B));
// console.log(devide(A, B));

var res1 = add(A, B);
var res2 = sub(A, B);
var res3 = multi(A, B);
var res4 = devide(A, B);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

