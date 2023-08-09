// document.querySelector('.para').innerText = window.innerHeight;
// document.querySelector('.para').innerText = window.innerWidth;

let windowTest = document.querySelector('.para');
windowTest.style.background = "black";
windowTest.style.color = "white";
windowTest.style.height = "5000px";
console.log(window.scrollY);

document.querySelector("#btn").addEventListener('click', function () {
    window.location.href = "other.html";
})

