// singleton
//Object.create (constructor method)

// objects literal

const mysymbol = Symbol("key1")

const jsuser = {
    name: 'John',
    "full name": 'John Doe',
    age: 30,
    [mysymbol]: 'key1',//****Important***** 
    location: 'New York',
    email: 'hdguiwhsb@gmail.com',
    isAdmin: true,
    lastlogindays: ['Monday', 'Tuesday', 'Wednesday'],

}
console.log(jsuser.name) //accessing the property using dot notation
console.log(jsuser["full name"]) //accessing the property using bracket notation
console.log(jsuser[mysymbol]) //accessing the property using symbol

jsuser.age = 31 //updating the property value
Object.freeze(jsuser) //freezing the object to prevent any further modifications
console.log(jsuser);