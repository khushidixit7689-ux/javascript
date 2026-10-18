const marvel_characters = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];
const dc_characters = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Green Lantern', 'Aquaman'];
const all_characters = marvel_characters.concat(dc_characters);
console.log(all_characters); //concat retruns a new array containing all the elements of the original arrays, without modifying them


const all_characters2 = [...marvel_characters, ...dc_characters] //another way to concat arrays using spread operator
console.log(all_characters2)

const arr = [1, 2, 3,[2,3,4], [5,[6,7]],8,9,10];
const flatarr = arr.flat(infinity) //flattens the array upto 2 levels deep
console.log(flatarr)


console.log(Array.isArray("Khushi")) //returns false as "Khushi" is not an array
console.log(Array.from("Khushi")) //converts the string into an array of characters and returns it
console.log(Array.from({name:"Khushi"})) //returns an empty array as the object does not have a length property [interesting]


let num1=100
let num2=200
let num3=300
console.log(Array.of(num1,num2,num3)) //returns a new array containing the arguments passed to it   