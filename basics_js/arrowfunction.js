const user = {
    username: "Alice",
    price: 200,

    welcomemessage : function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this)
    }

}
user.welcomemessage()
user.username = "sam"
user.welcomemessage()// now value will be changed to sam , username value has been changed and we refer to current context

console.log(this) // this will refer to the global object because we are not inside any object or function , output will be empty



// this.... does not work in function alone
function chai(){
    let name = "sam"
    console.log(this.name) // this will refer to the global object because we are not inside any object or function , output will be empty
}



// const chai = function(){
//     let name = "sam"
//     console.log(this.name)
// }
// chai() // this will refer to the global object because we are not inside any object or function , output will be empty





// const chai = () => {
//     let name = "sam"
//     console.log(this.name)
// }
// chai() // this will refer to the global object because we are not inside any object or function , output will be empty



//arrow function
const add = (num1 , num2) => {
    return num1+num2
}
console.log(add(3,4))

// another way is implicit return
const add1 = (num1 , num2) => (num1+num2)
console.log(add1(3,5))  

// if curly braces are used then we have to use return word and when parenthesis is used return keyword is not used

const obj = () =>({username:"khushi"}) // for returning object () are must


