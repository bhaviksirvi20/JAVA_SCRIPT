// 0 1 0 1 0 
// 1 0 1 0 
// 0 1 0 
// 1 0 
// 0 

for(let i = 5 ; i >= 1 ; i--)
{
    let p = ''
    for(let j = i ; j >= 1 ; j--)
    {
        if(j%2 == 0){
            p += "1" + " "
        }
        else{
            p += "0" + " "
        }
    }
    console.log(p)
}
