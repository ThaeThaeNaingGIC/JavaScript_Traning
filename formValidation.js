let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");
btn.innerHTML = "HELLO";

let nameVar = false;
let emailVar = false;
let passwordVar = false;

name.addEventListener('keyup', nameChange);
email.addEventListener('keyup', emailChange);
password.addEventListener('keyup', passwordChange);

function nameChange() {
    let str = name.value;
    let reg = /^[a-zA-Z0-9]+$/;

    if (!reg.test(str)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        nameVar = true;
    }
    setEnable()
}

function emailChange() {
    let str = email.value;
    let reg = /^([a-zA-Z0-9_\-\.]+)@([a-z]+)\.([a-z]{2,5})$/;
    if (!reg.test(str)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid')
        emailVar = true;
    }
    setEnable()
}

function passwordChange() {
    let str = password.value;
    let reg = /^[a-zA-Z0-9\W]{6,20}$/;
    if (!reg.test(str)) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
        passwordVar = true;
    }
    setEnable()
}

function setEnable() {
    if (nameVar == true && emailVar == true && passwordVar == true) {

        btn.removeAttribute("disabled");
    }
}