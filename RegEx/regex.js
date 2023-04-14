const pattern = 'pw'
const regExOne = new RegExp(pattern)

const flag = 'gi'
const regExTwo = new RegExp(pattern,flag)

const regExThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create pwcontent"
const result = regExThree.test(strToCheck)
console.log(result)
const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);
const oneMoreResult = strToCheck.replace(regExThree, "iNeuron")
console.log(oneMoreResult);

const webUrl = "https://pwskills/aditya59%kumar"
// const changeUrl = webUrl.replace(/50%/gi,'-')
// console.log(changeUrl);
const changeUrl2 = webUrl.replace(/\d\d%/gi, '-')
console.log(changeUrl2)


