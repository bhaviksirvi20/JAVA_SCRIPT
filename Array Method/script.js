console.log("----------------------------------");
console.log("array : [10, 20, 30, 40, 50]");
console.log("----------------------------------");

let arr = [10, 20, 30, 40, 1]

// 1. map()
let arr1 = arr.map((e) => e * e);
console.log("1.map e * e : " , arr1);
console.log("----------------------------------");


// 2. filter()
let arr2 = arr.filter((e) => e > 10);
console.log("2.filter e > 10 : " , arr2);
console.log("----------------------------------");


// 3. forEach()
let arr3 = arr.forEach((value) => {
    console.log("3.forEach : " , value);
});
console.log("----------------------------------");

// 4. indexOf()
console.log("array = [henil, bhavik, madhav, bhavdeep, krish];");
let arra = ["henil", "bhavik", "madhav", "bhavdeep", "krish"];
let arr4 = arra.indexOf("madhav")
console.log("4.indexOf madhav : " , arr4);
console.log("----------------------------------");


// 5. findIndex()
let arr5 = arr.findIndex(e => e > 40)
console.log("5.findindex e > 40 : " , arr5)
console.log("----------------------------------");


// 6. includes()
let arr6 = arr.includes(20)
let arr66 = arr.includes(60)
console.log("6.includes 20 : " , arr6);
console.log("6.includes 60 : " , arr66);
console.log("----------------------------------");


// 7. every()
let arr7 = arr.every(e => e > 5)
// let arr77 = arr.every(e => e <= 50)
console.log("7.every e > 5 : " , arr7);
// console.log("7.every e > 60 : " , arr77);
console.log("----------------------------------");


// 8. some()
let arr8 = arr.some(e => e % 2 == 0)
console.log("8.some e % 2 : " , arr8);
console.log("----------------------------------");

