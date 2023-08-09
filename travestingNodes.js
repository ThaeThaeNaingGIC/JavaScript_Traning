// 1 - Element
// 2 - Attribute(deprecate)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

let list = document.querySelector(".lis");
console.log(list.children[3].childNodes[0].textContent)

for (let i = 0; i < list.childNodes.length; i++) {
    let node = list.childNodes[i];
    if (node.nodeType == 1) {
        console.log(node.childNodes[0].textContent)
    }
}