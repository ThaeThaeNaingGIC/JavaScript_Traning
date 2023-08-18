let map = new Map();
map.set("k1", "Mg Mg");
map.set("k2", "Aung Aung");
map.set("k3", "Tun Tun");
for (let v of map.values()) {
    console.log(v);
}
map.forEach((k, v) => {
    console.log(`Key ${k} Value ${v}`);
})

let ary = Array.from(map);
console.log(ary);

let ary1 = Array.from(map.keys());
console.log(ary1);

let ary2 = Array.from(map.values());
console.log(ary2);
