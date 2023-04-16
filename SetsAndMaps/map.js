let array = [
    [1,'rahul'],
    [2,'shyam'],
    [3,'sumit'],
    [4,'subh'],
    [5,'kamal']
]
//array.map((arrayItem) => map.set(arrayItem[0], arrayItem[1]))

const myMap = new Map(array);
console.log(myMap)
myMap.set(12,'prabhash')
console.log(myMap.values())
console.log(myMap.get(4))

