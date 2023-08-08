let person = {
    name: "Hla Hla",
    age: 20,
    married: false,
    family: ["U Mya", "Daw Thein", "Ma Ma"],
    own: {
        car: "Toyota",
        bike: "Mountain Bike",
    },
    doIt: function () {
        console.log(this.name + " is riding a " + this.own.bike);
    },
};

console.log(person.family[2]);

let json = JSON.stringify(person);
console.log(json);
let obj = JSON.parse(json);
console.log(person);
