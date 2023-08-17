function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getAge = function () {
    return this.age;
}

Person.prototype.getUseData = function () {
    return this.name + ":" + this.age;
}

let person = new Person("Thae Thae", 22);
console.log(person);
console.log(person.getAge());
console.log(person.getUseData());