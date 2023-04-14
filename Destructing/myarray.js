const oneArray = [1,2,3]
const twoArray =[4,5,6]

// const threeArray= oneArray.concat(twoArray)
// console.log(threeArray)

// const fourArray = [oneArray , twoArray]
// console.log(fourArray)

// const fiveArray = [...oneArray, ...twoArray]
// console.log(fiveArray)

function manyArgs()
{
    console.log(typeof(arguments))
    let args = Array.from(arguments)
     let finalArray = args.map(n=>n)
     console.log(finalArray)
}

const manyArgsv2 = (...args) =>
{
    console.log(typeof(args))
    const finalArray = args.map(n => n)
    console.log(finalArray)
    }
// manyArgs(1,2,4,6)
// manyArgsv2(1,2,4,6)

const names= ["superman","flash"]
const newNames = ["batman", ...names, "sobhit"]
console.log(newNames)

const sitName = "pwskills"
console.log([...sitName])

const values = (...value) =>
{
    return value
}
    console.log(values("raghu","shobhit"))
