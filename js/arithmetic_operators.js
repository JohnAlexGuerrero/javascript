const numOne = 5
const numTwo = 7

const app = document.getElementById('app')
const addition = document.getElementById('addition')
const subtraction = document.getElementById('subtraction')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')
const divisionRemainter = document.getElementById('division-remainter')
const exponent = document.getElementById('exponent')

addition.addEventListener('click', ()=>{
    app.innerHTML = `${numOne + numTwo}`
})

subtraction.addEventListener('click', ()=>{
    app.innerHTML = `${numOne - numTwo}`
})

multiplication.addEventListener('click', ()=>{
    app.innerHTML = `${numOne * numTwo}`
})

division.addEventListener('click', ()=>{
    app.innerHTML = `${numOne / numTwo}`
})

divisionRemainter.addEventListener('click', ()=>{
    app.innerHTML = `${numOne % numTwo}`
})

exponent.addEventListener('click', ()=>{
    app.innerHTML = `${numOne ** numTwo}`
})

