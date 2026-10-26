function name(){
    console.log('Hello World')
}
name()
name()

//add two numbers
function add(a, b){   //function with parameters
    console.log(a + b)
}
const result = add(5, 10)  //function call with arguments
console.log(result)  //undefined because the function does not return any value





function add(a, b){   
    let sum = a + b
    return sum  //returning the value from the function
}
const result2 = add(5, 10)  //function call with arguments
console.log(result2)


function userloggedin(username){
    return `${username} is logged in`
}
console.log(userloggedin("Alice"))  //return ki hui value print kr di

function calculatecartprice(val1,val2,...prices){  //rest operator  // val1=200, val2=300, prices=[400,500]
    return prices
}
console.log(calculatecartprice(200, 300, 400, 500))  //multiple values pass kr dete h




const user = {
    username: "Alice",
    price: 200,
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)  //passing object as an argument to the function
handleobject({username: "Bob",
     price: 300
    })  //passing object as an argument to the function



    const arr = [1, 2, 3, 4, 5]
    function valuereturn(getarray){
        return getarray[2]  //returning the value at index 2 of the array
    }
    console.log(valuereturn(arr))  //passing array as an argument to the function
    //OR
    console.log(valuereturn([1,2,3,4,5]))
    