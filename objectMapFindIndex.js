let users = [
    {
        name: "Ma Ma",
        age: 21
    },
    {
        name: "Mg Mg",
        age: 22
    },
    {
        name: "Aung Aung",
        age: 23
    },
    {
        name: "Kyaw Kyaw",
        age: 24
    },
    {
        name: "Thi Ha",
        age: 25
    },
]

let value = users.findIndex(user => user.age == 23);
console.log(users[value]);