function createPromise()
{
    return new Promise(function exec(resolve, reject) {
        setTimeout(function f() {
            console.log("timer done!")
            resolve("done")
        },3000)
    })
}
console.log("Start")
let x = createPromise()
console.log(x)
console.log("A new Promise is create....")
x.then(function f(value)
{
    console.log("promise done",value)
}).catch(function g(value)
{
    console.log("handled ",value)
}).finally(function fn(value) {
    console.log("finally....")
})
// for (let i = 0; i <= 100000000; i++)
// {
//     some code
// }