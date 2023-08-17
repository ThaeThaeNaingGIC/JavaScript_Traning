function Car(name, speed) {
    this.name = name;
    this.speed = speed;
}
Car.prototype.getProperties = function () {
    return `Name : ${this.name} & Speed ${this.speed}.`
}
Car.prototype.getSpeed = function () {
    return `Speed :${this.speed}`;
}

function Toyota(name, speed) {
    Car.call(this, name, speed);
}

//inherientance prototype from car object
Toyota.prototype = Object.create(Car.prototype);

function Suzuki(name, speed) {
    Car.call(this, name, speed);
}

Suzuki.prototype.getSpeed = function () {
    return `This is override speed : ${this.speed}`
}

let toyota = new Toyota("toyota", "90");
let suziki = new Suzuki("suziki", "70");
console.log(toyota.getProperties());
console.log(toyota.getSpeed());
console.log(suziki.getSpeed());