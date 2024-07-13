const userAge = document.querySelector('.userAge')
const btnSaveName = document.querySelector('.saveNameBtn')
const age = document.querySelector('.age')
const btnSaveAge = document.querySelector('.saveAgeBtn')



btnSaveName.addEventListener('click', ()=>{
    const name = document.querySelector('.name').value
    const userName = document.querySelector('.userName')
    userName.textContent = name
    localStorage.setItem('name', name)
})