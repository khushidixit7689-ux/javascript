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
    cpp : 'c++'
    rb : 'ruby'
    swift : 'swift by apple'
}





