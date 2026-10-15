let name = "khushi"
let age = 19
// console.log(name+age+"hello")

console.log(`my name is ${name} and my age is ${age}`)

const myname = new String ('khushi')  // another way of string declaration , all methods of string can be seen in console 
console.log(myname.length)
const newsting = myname.substring(0,3)
console.log(newsting)
const newsting2 = myname.slice(0,3)// negative index bhi le sakta hai

const value = "          khushi      "
console.log(value.trim()) // remove extra spaces from start and end

const url = "httos//www.google.com%20"
console.log(url.replace("%20","")) // replace any character with another character

const newstring3 = ("khushi-hd-bd")
console.log(newstring3.split("-")) // split string into array based on given character