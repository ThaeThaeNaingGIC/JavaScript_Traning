let now = new Date();
console.log(now);
console.log(now.getDay());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMilliseconds());
console.log(now.getTime());

let time = new Date("07/05/2000 10:05:11");
time.setDate(19);
time.setFullYear(1208);
console.log(time);
console.log(time.getFullYear());
