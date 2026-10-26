const useremail = []

if (useremail) {
    console.log("got user email")
} else{
    console.log("do not have user email")
}

// falsy value -> false , 0 , -0 , bigint , on , "" , null , undefined , NaN
// truthy value -> "0" , 'false' , " " , [] , {} , function(){}

// how to check for empty array

if (useremail.length === 0){
    console.log("array is empty")
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty")
}

false == 0 // true
false =='' // true
0 =='' // true

// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 10   // if value assigned is null then take other value given after ??
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

console.log(val1)



// ternary operator

condition ? true : false

