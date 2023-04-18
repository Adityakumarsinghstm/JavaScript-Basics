function createPromise()
{
    return new Promise(function exec(resolve, reject) {
        setTimeout(function f() {
            console.log("timer done!")
            reject(10)
        },3000)
    })
}
async function consume()
{
    try {
        console.log("inside the function ")
        const response = await createPromise()
        const response1 = await createPromise()
        console.log("Response is : ",response)
    }
    catch (err)
    {
        console.log("handled ", err)
    }
   
}
console.log("Start...")
consume()
console.log("End...")