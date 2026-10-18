// let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)

// let newdate = new Date(2026,9,18)
// console.log(newdate.toDateString())

// let newdate2 = new Date("2026-10-18")//yy-mm-dd
// console.log(newdate2.toLocaleString())

// let mytimestamp = Date.now()
// console.log(mytimestamp) //abhi tk ka time bta rha h ms me
// console.log(newdate2.getTime())//ye jo date li h wha tk ka time bta rha h
// console.log(Math.floor(Date.now()/1000))//converts itno milliseconds

let newdate3 = new Date()
console.log(newdate3)
console.log(newdate3.getMonth())
console.log(newdate3.getDay()) //0=>sunday, 1=>monday, 2=>tuesday, 3=>wednesday, 4=>thursday, 5=>friday, 6=>saturday


console.log(newdate3.toLocaleString('Default',{
    weekday: 'long'
}))