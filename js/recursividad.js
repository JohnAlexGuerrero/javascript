const factorial = n =>{
    return n > 1 ? n * factorial(n-1) : 1
}

app.innerHTML = `${factorial(6)}`

console.log(6*5*4*3*2);