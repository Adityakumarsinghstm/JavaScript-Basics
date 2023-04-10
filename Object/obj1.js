let student = { firstName: "Rahul", lastName: "jha", class: 12, rollNo: 45 }
console.log(student)

let emp = new Object()
emp.name = "Parwej"
emp.id=78
console.log(emp)

function emp2 (i,n,s)
{
    this.id = i
    this.name = n
    this.salary = s
    
}

let obj4 = new emp2(12, "aditya", 20000)
console.log(obj4)
console.log(emp.id)
console.log(emp['name'])
emp.salary = 5000000
console.log(emp)
delete emp.id
console.log(emp)