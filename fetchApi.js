let url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then((res) => console.log(res.json()))
    .catch((err) => console.log(err));

fetch(url)
    .then((res) => { return res.text() })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));