let str = "20";
let num = Number(str);
console.log(num);

let str1 = "20Hello";
let num1 = Number(str1);
console.log(num1);
console.log(typeof num1);

let str2 = "20.2";
let num2 = parseFloat(str2);
console.log(num2);

let str3 = "20.122452455";
let num3 = Number(str3).toFixed(4);
console.log(num3);
