"use strict"; //treat all js code as newer version
// alert(3+3) //we are usning nodejs , not browser

let name = "khushi"
let age = 19
 
// datatypes => int , string , boolean , null (standalone value, empty), undefined (value assign hi ni ki)
                // symbol(unique)

//objects
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object

// const id=symbol('123')
// const anotherid=symbol('123')

// console.log(id==anotherid)
// const bigNumber = 3625892444349817n

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MEMORY
// stack (primitive) , heap (non primitive)

let myname ="khushi"
let anothername = myname
anothername = "arnav"
console.log(anothername)
console.log(myname)

let user1 = {
    name:"khushi",
    age:19,
}
let user2 = user1
user2.name = "arnav"
console.log(user1.name)
console.log(user2.name)