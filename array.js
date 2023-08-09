let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [11, 12, 13];
let combine = array.concat(array2);
console.log("two array combine " + combine);

array.pop(9);
console.log("delete last value " + array);

array.shift(12);
console.log("delete front value " + array);

array.push(23);
console.log("Test add new value at last in exit array " + array);

array.unshift(12);
console.log("Test add new value at front in exit array " + array);

//fist parameter is start point , second parameter is count
array.splice(2, 3);
console.log("delete only wanted value " + array);

array.reverse();
console.log("revers array " + array);


