let url = "https://jsonplaceholder.typicode.com/posts";
function loadData() {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => resolve(res.text()))
            .catch((err) => reject(err));
    })
}
loadData()
    .then(res => console.log(res))
    .catch(err => console.log(err))