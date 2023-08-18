function check(reg, str) {
    if (reg.test(str)) {
        console.log(`${str} match ${reg.source}`)
    } else {
        console.warn(`${str} not match ${reg.source}`)
    }
}

// let str = "bebebello"
// let reg = /([hb]e){3}llo$/;
// let str = "cccccccccello"
// let reg = /[hbc]{2,4}ello/;
// let str = "EEello"
// let reg = /[^HB]ello/i;

// A - Z a - z 0 - 9 =>word characters
// let str = "_"
// let str = "@!"
// let reg = /\w/;
// let str = "wrong@"
// let reg = /\w/;
// let reg = /^\w$/;

//not word character
// let str = "@"
// let reg = /\W/;

// digit number
// let str = "1223"
// let reg = /\d/;

// space par lar check tar
// let str = "!123 1234"
// let reg = /\s/

// world boundary fix loat htar tae word pae ya 
// let str = "hehehe"
// let str = "hehehee"
// let reg = /he\b/;

// a follow by b
// let str = "xyxyxy"
// let str = "xb"
// let reg = /x(?=y)/;

// a not follow by b
let str = "xb"
let reg = /x(?!y)/;

check(reg, str);