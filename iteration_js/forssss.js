// Array specific loops
//  for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)      output -> 1 2 3 4 5
}

const greetings = "hello world!"
for (const greet of greetings){
    console.log(`each char is ${greet}`)
}

// map -> no duplicate values , maps are iterable objects are not iterable

const map = new Map()
map.set('IN' , 'INDIA')
map.set('USA' , 'united states of india')
map.set('fr' , 'france')

console.log(map)

for (const [key , value] of map) {     // if we want separate key value so we use []
    console.log(key , ':-' , value)
}




//  Object
const myobject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myobject) {
    console.log(`${key} shortcut is for  ${myobject[key]}`)
}




// For each loop

const coding = ["js", "ruby", "java"]

coding.forEach( function (val){
    console.log(val)
}  )


coding.forEach((val) => {
    console.log(val)
})




function print(item){
    console.log(item)
}

coding.forEach(print)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})



//mostly used

const mycoding = [
    {
        name:"khushi",
        age:19
    },
    {
        name:"harsh",
        age:21
    },
    {
        name:"harshi",
        age:2
    },
]
 
mycoding.forEach(  (item) =>{
    console.log(item.name1)
})