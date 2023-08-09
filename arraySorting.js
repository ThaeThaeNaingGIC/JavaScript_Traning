let num = [12, 24, 1, 5, 2, 6, 4, 7];
num.sort();
console.log(num);

let num1 = [12, 24, 1, 5, 2, 6, 4, 7];
num1.sort((x, y) => x - y);
console.log(num1);

let result = num1.find(x => x < 13);
console.log(result);



