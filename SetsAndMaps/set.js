
const mySet = new Set()
mySet.add(12)
mySet.add(32)
mySet.add(78)
mySet.add(20)

console.log(mySet.has(12))
console.log(mySet.values());

 console.log(mySet.entries())
console.log(mySet.size)
 mySet.forEach(element => {
     console.log(element)
 });

const myArray = [23,53,75,27,90]
 const newSet = new Set([...myArray])
newSet.forEach(element => {
    console.log(element)
});
newSet.clear()
console.log(newSet)
console.log(newSet)
console.log(newSet.size)

function setDifference (setA , setB)
{
  
    return new Set([...setA].filter(ele=> setB.has(ele)))
}
const SetA = [12,32,42,43,89]
const SetB = [89, 90, 42, 78]
const result = setDifference(SetA, SetB)
console.log(result)


