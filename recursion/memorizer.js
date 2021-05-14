function memorizer(cache, func){
    let shell = function(n){
        let result = cache[n]
        if(typeof result !== 'number'){
            result = func(shell, n)
            cache[n] = result 
        }
        return result
    }
    return shell
}

module.exports = memorizer