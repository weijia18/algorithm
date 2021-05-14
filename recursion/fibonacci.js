let memorizer = require('./memorizer.js')

let fibonacci = memorizer([0,1], function(shell, n){
    return shell(n-1) + shell(n-2)
})

