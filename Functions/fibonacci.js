const fibonacci = (n)=>{
    result = []
    for (let index = 0; index < n; index++) {
        if (result.length < 2) {
            result.push(index);
            continue
        }

        // console.log(result.slice(index - 2))
        arrAux = result.slice(index - 2)
        result.push(arrAux.reduce((prev, curr) => prev + curr, 0))
    }
    
    return result
}

console.log(fibonacci(10))