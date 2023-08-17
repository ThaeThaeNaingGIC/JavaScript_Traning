let person = {
    "name": "Mg Mg",
    "age": 20
}
let person2 = new Object({ "name": "Ei", "age": 23 });// build in constructor
console.log(person === person2 ? "YES" : "NO");

let arr = ["one", "two"];
let arr2 = new Array("one", "two");
console.log(arr === arr2 ? "YES" : "NO");