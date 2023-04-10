let arr = [1, 2, 43, "manish", "suresh"]
console.log(arr)
arr.push(45, "rohan")
console.log(arr)
arr.pop()
console.log(arr)
let ele = arr.shift()
console.log(ele)
console.log(arr)
arr.unshift(343)
console.log(arr)

let a1 = [1, 23, 43, 53]
let a2 = [90, 98, 87]
let a3 = a1.concat(a2)
console.log(a1, a2, a3)

let s = a3.join(" ")
console.log(s)

let a4 = a3.reverse()
console.log(a4)
console.log(a4.indexOf(90))

let a5 = a4.slice(1, 4)
console.log(a5)

a5.splice(2, 0, 8000)
console.log(a5)