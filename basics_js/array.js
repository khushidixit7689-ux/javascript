const arr = [1, 2, 3, 4, 5];
const arr2= new Array(6, 7, 8, 9, 10);//another way to create an array
console.log(arr[0]); // Output: 1

//array methods
// console.log(arr.push(6)); //adds 6 at the end of the array and returns the new length of the array
// console.log(arr.pop()); //removes the last element from the array and returns that element
// console.log(arr.shift()); //removes the first element from the array and returns that element
// console.log(arr.unshift(0)); //adds 0 at the beginning of the array and returns the new length of the array
// console.log(arr.includes(3)); //returns true if the array contains 3, otherwise false
// console.log(arr.indexOf(4)); //returns the index of the first occurrence of 4 in the array, or -1 if not found

// const newarr = arr.join()
// console.log(newarr) //converts the array into a string and returns it

// slice , splice
const n1 = arr.slice(1, 4) //returns a new array containing elements from index 1 to 3 (4 is not included)
console.log(n1)
console.log(arr)

const n2 = arr.splice(1,4)
console.log(n2)
console.log(arr) //removes 4 elements from index 1 and returns them as a new array, modifies the original array