function sum()
{
    let result =0
    for (let i = 0; i < arguments.length; i++)
    {
        result = result + arguments[i]  
        
    }
    return result
}
// let arr = [3, 5, 6, 23, 54]
let answer = sum(3,5,7,23)
console.log(answer)
