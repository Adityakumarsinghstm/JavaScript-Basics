function h (x, fn)
{
    console.log(x*x)
    fn()
}
h(10, function ()
{
    console.log("Done with the callback")
})
console.log("Start")
setTimeout(() => {
    console.log("time out")
}, 500);
console.log("end")
for (let i = 0; i < 10000000000;i++){}