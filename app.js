// 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)

// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'

let satr = "Georg Raymond Richard Martin";

let satrMassiv = satr
  .split(" ")
  .map((soz) => {
    return soz.charAt().toUpperCase();
  })
  .join(" ");

console.log(satrMassiv);

// let year = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];
// year.sort((a, b) => {
//   return a.age - b.age;
// });
// let yearJung = year
// //  - [array.length - 1].age

// console.log(yearJung);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bigMassiv = [];
// number.forEach(element => {
//     if(element % 2 == 0){
//         return
//     }

// });
// let juff = number.filter((n) => {
//   return n % 2 == 0;
// });
// let toq = number.filter((n) => {
//   return n % 2 != 0;
// });

// console.log(bigMassiv.push(juff, toq));

let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];

// let sortPrirce = products.sort((a, b) => {
//   return a.price - b.price;
// })[0];
// console.log(sortPrirce);
// let sum = 0;
// let sumfor = products.forEach((element) => {
//   element.price + sum;
// });
// console.log(sum);
// let sumWhile = 0
// i = 0
// while(i < products.length){

// }
// console.log(sum)

// let company = products.map((item) => {
//   return item.name;
// });
// console.log(company);

// let idName = products.find((item) => {
//   return item.id == 5;
// }).name;
// console.log(idName);

let son = [1, 2, 3, 4, 5];
let kvadart = son.map((raqam) => {
  return raqam ** 2;
});
console.log(kvadart);

let reting = products
  .sort((a, b) => {
    return b.rating - a.rating;
  })
  .at();
console.log(reting);

let narh = products
  .sort((a, b) => {
    return b.price - a.price;
  })
  .at();
console.log(narh);

let harif = "jkjgklagdjklhfaslfsdl".split("").every((item) => {
  return !Number(item);
});
console.log(harif);

let element = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
let javob = element.filter((item) => {});
console.log(javob);

let satr18 = "Men Abdulaziz Programmerman";

let javobSatr = satr18.split(" ").map((item) => {
  return item.length;
});
console.log(javobSatr);

let satrProbel = "Men Abdulaziz Programmerman";
let javobSatrPtobel = satrProbel.split("").some((item) => {
  return item == " ";
});
console.log(javobSatrPtobel);


