let person = {
    name: "Mg Mg",
    age: 21,
    parent: ["U Mya", "Daw Hla"],
    brother: "Aung Aung",
    sister: "Pwint"
}

let data = `
<h3>${person.name} Resume</h3>
 <ul>
     <li>Father : ${person.parent[0]}</li>
     <li>Mother : ${person.parent[1]}</li>
     <li>Brother : ${person.brother}</li>
 </ul>
`
document.querySelector('.para').innerHTML = data;