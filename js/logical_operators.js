let isTrue = false
let isFalse = true

const btnTrue = document.getElementById('true')
const btnFalse = document.getElementById('false')
const operator = document.getElementById('operator')

btnTrue.addEventListener('click', ()=>{
    isTrue = !isTrue
    btnTrue.textContent = `${isTrue}`
    resultLogicalOperator()
})

btnFalse.addEventListener('click', ()=>{
    isFalse = !isFalse
    btnFalse.textContent = `${isFalse}`
    resultLogicalOperator()
})

const resultLogicalOperator = ()=>{
    let res = ''

    if(operator.value == 0){
        res = `${isTrue && isFalse}`
    }else if(operator.value == 1){
        res = `${isTrue || isFalse}`
    }
    
    app.innerHTML = res
}