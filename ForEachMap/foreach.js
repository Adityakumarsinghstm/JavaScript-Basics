let arr = [12, 42, 45, 64]
// arr.forEach(function (element, index, arr){
//      console.log(element,index,arr)
// })

// arr.forEach((element, index, arr) => { console.log("arrow: ", element, index, arr) })

let heros = ["nagaraj", "samir", "prawej", "raghuraj"]
// heros.forEach((ele) => { console.log(ele.toUpperCase()) })

// arr.map((element, index, arr) => { console.log(element, index, arr) })

// heros.map((h)=>{console.log(h.toUpperCase())})

// console.log(heros)
// const herosEndsWithRaj = heros.filter((e) => {
//     return e.endsWith("raj")
// })
// console.log(herosEndsWithRaj)

// const cartBill = [23, 43, 64]

// const sumOfCart = cartBill.reduce((pre, curr) =>pre+curr,0)

const gameScore = [12, 32, 434, 535, 900, 800]
// console.log(typeof(gameScore[0]))
const typeOfGameScore = gameScore.every((v) => typeof (v) === "number")
console.log(typeOfGameScore)

const above200 = gameScore.find((score) => score > 200)
console.log(above200)


//find index of
//some 
//sort