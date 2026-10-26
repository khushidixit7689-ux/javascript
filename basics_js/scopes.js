//let a = 1 // global scope
if (true) {
    let a = 10 // block scope
    const b = 20
    var c = 30
}
console.log(a)  // ReferenceError: a is not defined
console.log(b)  // ReferenceError: b is not defined
console.log(c)  // 30  //var is function scoped so it is accessible outside the block

// nested function scope
function one() {
    const username = "Khushi"  //function scope
    function two() {
        const age = 30  //function scope
        console.log(username)  //accessible because of closure
    }
    //console.log(age)  //ReferenceError: age is not defined , scope is in only function two
    two()
}
one()




if(true){
    const username = "Khushi"  //block scope
    if(username === "Khushi"){
        const website = " youtube"
        console.log(username + website)  //accessible because of closure
    }
    //console.log(website)  //ReferenceError: website is not defined , scope is in only inner if block
}
console.log(username)  //ReferenceError: username is not defined , scope is in only outer if block          


//+++++++++++++++++++++++++++ interesting +++++++++++++++++++++++

function addone(num){
    return num+1
}
addone(5) // yha pe ager hm function call ko deffiton ke upr krenge to error ni aega1

const addtwo = function(num){
    return num+2
}
addtwo(5) // function call ager hm function definition ke upr krenge to error aega iss method me kyuki isme hm function ko ek variable me hold kr rhe h