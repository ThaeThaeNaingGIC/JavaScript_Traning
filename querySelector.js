let scripts = document.scripts;
let scriptAry = Array.from(scripts);

scriptAry.forEach((script) => {
    console.log(script.src)
})
console.log(scripts);

console.log(document.querySelectorAll("img"));

let listFirst = document.querySelector("ul li:first-child > a");
listFirst.style.color = "red";

let listNode = document.querySelector("ul li:nth-of-type(2) > a");
listNode.style.color = "yellow";

let listNode1 = document.querySelector("ul li:nth-child(3) > a");
listNode1.style.color = "brown";

let listAll = document.querySelectorAll("ul li");
for (let i = 0; i < listAll.length; i++) {
    let aTag = listAll[i].querySelector("a");
    aTag.style.color = "pink";
}