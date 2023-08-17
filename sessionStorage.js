let addDataToDb = (obj) => {
    let userAry = getDataFromDb();
    console.log("Arr " + userAry)
    if (userAry == null) {
        userAry = [];
        userAry.push(obj);
        saveToDB(userAry);
    }
    else {
        let indexNo = userAry.findIndex(user => user.name == obj.name);
        if (indexNo == -1) {
            userAry.push(obj);
            saveToDB(userAry);
        }
        else {
            alert("User already exist with that name!");
        }
    }

}

let saveToDB = (aryObj) => {
    let saveData = JSON.stringify(aryObj);
    sessionStorage.setItem('sessionDb', saveData);
}

let getDataFromDb = () => {
    let str = sessionStorage.getItem('sessionDb');
    let obj = JSON.parse(str);
    return obj;
}

let clearDb = () => {
    sessionStorage.removeItem('sessionDb');
}

let form = document.querySelector("form");
let inputName = document.querySelector("#name");
let inputAge = document.querySelector("#age");
let deleteData = document.querySelector("#delete");

deleteData.addEventListener('click', clearDb);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = inputName.value;
    let age = inputAge.value;
    let user = {
        "name": name,
        "age": age,
    };
    addDataToDb(user);
})

