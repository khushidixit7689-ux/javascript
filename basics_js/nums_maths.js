const num = 189
//console.log(num)
const newnum = new Number(552)
//console.log(newnum) 
//console.log(newnum.toString().length) // convert number to string
//console.log(newnum.toFixed(2));//decimal ke baad kitne place tk chiye
const digi=456.889
//console.log(digi.toPrecision(3))
const hundreds=100000000000000
//console.log(hundreds.toLocaleString('en-IN'))
//++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4))//negative to positive
console.log(Math.round(4.3))//roundoff
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(3,4,6,2,1))
console.log(Math.max(3,4,6,2,1))
console.log(Math.random())//0 to 1
console.log((Math.random()*10) +1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min))//random number between min and max