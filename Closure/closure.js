let score = 4
function one() {
    let score = 0;
    console.log(score)

}
function two()
{
    let score = 3;
    console.log(score)
}
function three()
{
    console.log(score)
}
// one()
// two()
// three()
// console.log(score)
function outerFunction()
{
    let outerVal = "I am at scope level 1"
    function innerFunction()
    {
        let innerVal = "I am at scope level 2"
        console.log(outerVal)       
    }
    console.log(innerVal)
    innerFunction()
}
// outerFunction()
const globalVal = 0
function func ()
{
    const val1 = 1
    console.log(globalVal)
    function InnerFunc()
    {
        const val2 = 3
        console.log(val2,val1,globalVal)
        function InnerOfInnerFunct()
            {
            const val3 = 5
            console.log(val3,val2, val1, globalVal)
        }
        InnerOfInnerFunct()
    }
    InnerFunc()
}
// func()
function superFunc()
{
    let outerVal = "I am Outer"
    function minorFunc()
    {
        console.log(outerVal)
    }
    minorFunc()
}
// superFunc()
const errorMessage = "file not found"
setTimeout(function callback()
{
    console.log(errorMessage)
}, 2000)
let pageCount = 0
const items = [2,35,65,75,90]
items.forEach(function iterator(num) {
    pageCount++
    console.log(num)
})
console.log("page count" ,pageCount)