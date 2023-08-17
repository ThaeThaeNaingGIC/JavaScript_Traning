let url = "https://jsonplaceholder.typicode.com/posts";

async function loadData() {
    const result = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                resolve(this.responseText);
            } else {
                reject("Fail");
            }
        }
        xhr.open("GET", url);
        xhr.send();
    });
    const con = await result;
    return con;
}
loadData()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));










