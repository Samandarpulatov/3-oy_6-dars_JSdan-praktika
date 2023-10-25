// 1-topshiriq !!!
let ism = prompt("Ismingizni kiriting! ");
let yil = prompt("Tug'ilgan yilingizni kiriting! ");
let oy = prompt("Tug'ilgan oyingizni kiriting! ");
let birthday = prompt("Tug'ilgan kuningizni kiriting! ");

let now = Date.now();
let date = new Date(yil, oy - 1, birthday).getTime();

let years = parseInt((now - date) / 1000 / 60 / 60 / 24 / 365.25);
let month = parseInt((((now - date) / 1000 / 60 / 60 / 24) % 365.2) / 31);
let day = parseInt((((now - date) / 1000 / 60 / 60 / 24) % 365.15) % 31);

console.log("Hurmatli" + " " + ism + " " + "siz" + " " + years + " " + "yil" + " " + month + " " + "oy" + " " + day + " " + "kun" + " " + "umr kechiribsiz👍");



// 2-topshiriq !!!
let fruits = ["apple", "banana", "kivi", "orange", "strawberry", "grapes", "cherry"];
fruits.push("olma");    // bu fruitsni eng ohiriga meva qo'shishni 1-yo'li
// fruits.splice(fruits. length -0, 1, "olma"); // bu ohiriga qo'shishni 2-yo'li
fruits.shift("apple");  // bu fruitsni boshidagini o'chirishni 1-yo'li
// fruits.splice(0, 1,);  // bu boshidagini o'chirishni 2-yo'li
console.log(fruits);