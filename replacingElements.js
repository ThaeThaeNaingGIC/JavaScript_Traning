let oldH1 = document.querySelector("#head");
let text = document.createTextNode("New Header");
let newH1 = document.createElement("h1");
newH1.appendChild(text);
newH1.className = "replce";
newH1.id = "header";
let body = oldH1.parentNode;
body.replaceChild(newH1, oldH1);

let lis = document.querySelector("ul.lis");
console.log(lis);
let firstList = document.querySelector("ul > li:first-child");
let aTag = firstList.childNodes[0];
console.log(aTag.getAttribute("alt"));