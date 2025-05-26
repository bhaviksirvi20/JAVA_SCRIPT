let arr = [0,1,2,3,4,5,6,7,8,9]
let otp = ""
for(let i = 0 ; i < 6 ; i++)
{
    let o = Math.floor( Math.random() * arr.length )
    otp += arr[o]
    
}
console.log( otp )