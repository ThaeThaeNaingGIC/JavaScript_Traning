let url = "https://jsonplaceholder.typicode.com/posts";

function loadData() {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onload = function () {
            if (xhr.status == 200) {
                resolve(this.responseText);
            } else {
                reject("Fail");
            }
        }
        xhr.open("GET", url);
        xhr.send();
    })

}
loadData()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));










