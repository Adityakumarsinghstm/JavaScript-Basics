let emp =
{
    id: 12,
    fullName: "Aditya Kumar",
    salary: 40000
}
let key = Object.keys(emp)
console.log(key)
let value = Object.values(emp)
console.log(value)
let enteries = Object.entries(emp)
console.log(enteries)
Object.freeze(emp)
emp.id = 383
console.log(emp)

let o = Object.assign({p:"prabhat",m:"manish"}, emp)
console.log(o)