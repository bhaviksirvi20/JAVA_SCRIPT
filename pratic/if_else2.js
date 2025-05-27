let a = parseInt(prompt("Enter The Value : "))
let b = parseInt(prompt("Enter The Value : "))
let c = parseInt(prompt("Enter The Value : "))

console.log("---------------------------")
console.log("Smallest Value : ")
console.log("---------------------------")

if(a < b && a < c){
    console.log("A : " + a + " is small")
}
else if (b < a && b < c){
    console.log("B : " + b + " is small")
}
else{
    console.log("C : " + c + " is small")
}
console.log("---------------------------")
