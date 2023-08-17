let url = "https://jsonplaceholder.typicode.com/posts";
let postCol = document.querySelector("#postCol");

function makeColum(result) {
    let jsons = JSON.parse(result);
    let str = "";
    jsons.forEach((element) => {
        str += `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.body}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    });
    postCol.innerHTML = str;
}

function loadData(callBackFun) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (this.status == 200) {
            callBackFun(this.responseText);
        }
    };
    xhr.send();
}
loadData(makeColum);
