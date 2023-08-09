function doIt(name = "Ma Ma", age = 20) {
    console.log(`Name is ${name} and Age is ${age}`)
}

doIt("Thi Ha");

let anonymousFunction = () => {
    console.log("I am Mr.annymous");
}

anonymousFunction();

(function () {
    console.log("Hey this is IIFE");
})();

(() => console.log("arrow with IIFE"))();

