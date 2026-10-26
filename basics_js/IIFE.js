// Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFE
    console.log("DB CONNECTED")
})();   // end code using semicolon



((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('khushi')


