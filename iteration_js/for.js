// FOR

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} outer loop value ${i}`);
        console.log(i + '*' + j + '=' + i*j)
        
    }
    
}



let myarr = ["flash","superman", "batman"]

for (let index = 0; index < myarr.length; index++) {
    const element = array[index];
    console.log(element)
    
}




// break and continue

for (let index = 1; index <= 20; index++) {
    if (index=5){
        console.log("detected 5")
        break  // flow will be out of the loop
    }
    console.log(`value of i is ${index}`)
    
}

for (let index = 1; index <= 20; index++) {
    if (index=5){
        console.log("detected 5")
        continue  // skips that iteration
    }
    console.log(`value of i is ${index}`)
    
}