const powerTwo = (n) =>
{
    return n ** 2
}
const powerCube = (powerTwo, n)=>
{
    return powerTwo(n)*n
}
console.log(powerCube(powerTwo, 3))
const sayHello = () =>
{
    return () =>
    {
        console.log("hello aditya")
        }
}
let guessValue = sayHello()
console.log(guessValue)

const higerOderFun = (m) =>
{
    const oneFun = (n) =>
    {
        const twoFun = (o) =>
        {
            return m + n + o
        }
        return twoFun
    }
    return oneFun
    }

console.log(higerOderFun(3)(4)(2))
    
let myNums =[1,4,7,3,7]
const sumArray = arr =>
{
    let total = 0
    arr.forEach(element => {
        total+=element
    });
    return total
}
console.log(sumArray(myNums))

const sayHelloAgain = () =>
{
    console.log("hey Aditya!",Math.random())
}
setInterval(sayHelloAgain,1000)
// setTimeout(sayHelloAgain,2000)