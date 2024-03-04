// При клике на кнопку выводите имена пользователей у которых айди четный(информация о пользователи имя пользователя фамилия а так же телефон)

// let reg = 'https://jsonplaceholder.typicode.com/users'
// let ul = document.querySelector('.ul')
// let button = document.querySelector('.button')
// let xhl = new XMLHttpRequest()
// xhl.open('GET' , reg)
// xhl.send()
// xhl.addEventListener('load' , getData)
// function getData(){
//     let data = JSON.parse(xhl.responseText)
//     console.log(data)
//     return data
// }
// button.addEventListener('click' , a)
// function a(){
//     let filter = getData()
//     for(let i = 1 ; i < filter.length ; i+=2){
//         console.log(filter[i])
//         let li = document.createElement('li')
//         li.textContent = filter[i].name + ', ' + filter[i].phone
//         ul.appendChild(li)
//     }
// }


// Используя прежний API получить информацию вывести имена пользователей только тех у которых имя содержит букву А. Всех пользователей вывести в список

let reg = 'https://jsonplaceholder.typicode.com/users'
let ul = document.querySelector('.ul')
let button = document.querySelector('.button')
let xhl = new XMLHttpRequest()
xhl.open('GET' , reg)
xhl.send()
xhl.addEventListener('load' , getData)
function getData(){
    let data = JSON.parse(xhl.responseText)
    console.log(data)
    return data
}
button.addEventListener('click' , a)
function a(){
    let filter = getData()
    for(let i = 0 ; i < filter.length ; i++){
        console.log(filter[i])
        let li = document.createElement('li')
        li.textContent = filter.filter(elem => elem.name =='Romaguera-Crona')
        ul.appendChild(li)
    }
}

