//const tinderuser = new Object(); //object constructor syntax
const tinderuser = {}

tinderuser.name = 'John';
tinderuser.age = 30;
tinderuser.isAdmin = true;

// console.log(tinderuser)

const regularuser = {
    email: 'hdeyhu@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'John',
            lastname: 'Doe'
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname) //accessing the nested object property

const obj1 = { 1: 'a', 2: 'b', 3: 'c' }
const obj2 = { 4: 'd', 5: 'e', 6: 'f' }

// const obj3 = Object.assign({}, obj1, obj2) //merging two objects into a new object
const obj3 = { ...obj1, ...obj2 } //merging two objects into a new object using spread operator
console.log(obj3)


//databases me hme aisa data milega jo neeche likhungi usse access krne ke liye .....
// array with object with elements
const user = [  
    {
        ID:1,
        email: 'k@gmail.com'
    },
    {
        ID:2,
        email: 'h@gmail.com'
    },
    {
        ID:3,
        email: 'm@gmail.com'
    }
    
]

console.log(user[1].ID)
console.log(Object.keys(tinderuser)) //returns an array of keys of the object  (imp)
console.log(Object.values(tinderuser)) //returns an array of values of the object  (imp)
console.log(Object.entries(tinderuser)) //returns an array of key-value pairs of the object  (imp)

console.log(tinderuser.hasOwnProperty('name')) //returns true if the object has the specified property, otherwise false  (imp)

//Destructuring the object

const course = {
    coursename: 'JavaScript',
    price: 999,
    courseInstructor: 'John Doe'
}
const {courseInstructor: instructor} = course //destructuring the object and renaming the property
console.log(instructor) //accessing the destructured property

//API , isme object aur array dono mil skta h
// {
//     "name": "John Doe",
//     "age": 30,
//     "email": "kh@gmail.com",
// }
