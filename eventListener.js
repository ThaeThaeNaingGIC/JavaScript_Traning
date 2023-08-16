let singleClick = document.querySelector("#btn");
singleClick.onclick = (e) => {
    console.log(e)
}

let doubleClick = document.querySelector("#backBtn");
doubleClick.addEventListener('dblclick', () => {
    alert(doubleClick.innerText);
})