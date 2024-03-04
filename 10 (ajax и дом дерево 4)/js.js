// При клике на кнопку необходимо выводить информацию о стране в список ul

// let xhl = new XMLHttpRequest()
// let api = 'https://restcountries.com/v3.1/name/ukraine'
// let ul = document.querySelector('.ul')
// let div = document.querySelector('.div')
// let button = document.querySelector('.button')
// button.addEventListener('click' , press)
// function press (){
//     xhl.open('GET',api)
//     xhl.send();
//     xhl.addEventListener('load' , showUsers)
// }
// function showUsers(){
//     let data = JSON.parse(this.responseText);
//     for (let i=0;i<data.length;i++){
//         let name = document.createElement('h1');
//         name.textContent = data[i].altSpellings[1]
//         div.appendChild(name)
//         let li1 = document.createElement('li');
//         li1.textContent = data[i].capital
//         ul.appendChild(li1)
//         let li2 = document.createElement('li');
//         li2.textContent = data[i].languages.ukr
//         ul.appendChild(li2)
//         let li3 = document.createElement('li');
//         li3.textContent = data[i].flag
//         ul.appendChild(li3)
//     }
//     console.log(data)
// }


// В инпут вводится название страны после чего на страницу необходимо выводить основную информацию об этой стране столицу официальное название

let xhl = new XMLHttpRequest()
let input = document.querySelector('.input')
let ul = document.querySelector('.ul')
let con = input.value
function reg (){
    let api = 'https://restcountries.com/v3.1/name/usa'
    xhl.open('GET',api)
    xhl.send();
    // xhl.addEventListener('load' , showUsers)
    let data = JSON.parse(this.responseText);
}
reg()
function showUsers(){
    for (let i=0;i<data.length;i++){
    }
    console.log(data)
}