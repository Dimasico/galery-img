// При нажатии на кнопку выводи страны соседи этой строны
// let button = document.querySelector('.button')
// button.addEventListener('click' , a)
// function a(){
//     fetch("https://restcountries.com/v3.1/name/usa")
//     .then(respons => respons.json())
//     .then(data =>{
//         console.log(data[0].borders)
//     })
// }


// С данного API выводите информацию о данной стране при нажатии на кнопку.
// Информацию необходимо выводить в список ul. Так же необходимо выпадать в ошибку и выводить пользователю сообщение в список что сервер сейчас недоступен
// let ul = document.querySelector('.ul')
// let button = document.querySelector('.button')
// button.addEventListener('click' , a)
// function a(){
//     fetch('https://restcountries.com/v3.1/name/ukraine')
//         .then(respons => respons.json())
//         .then(data =>{
//             let li1 = document.createElement('li')
//             let li2 = document.createElement('li')
//             let li3 = document.createElement('li')
//             let li4 = document.createElement('li')
//             let li5 = document.createElement('li')
//             li1.textContent = 'Population: ' + data[0].population
//             li2.textContent = 'Capital: ' + data[0].capital
//             li3.textContent = 'Continents: ' + data[0].continents
//             li4.textContent = 'Money name: ' + data[0].currencies.UAH.name
//             li5.textContent = 'Money symbol: ' + data[0].currencies.UAH.symbol
//             ul.appendChild(li1)
//             ul.appendChild(li2)
//             ul.appendChild(li3)
//             ul.appendChild(li4)
//             ul.appendChild(li5)
//         })
//         .catch(error => {
//             let li1 = document.createElement('li')
//             li1.textContent = 'сервер сейчас недоступен'
//             ul.appendChild(li1)
//         })
// }


// Создать инпут и кнопка. В инпут  будет вводится название страны и будет выводиться основная информация об этой стране(выводи основную информацию о стране в список )
let button = document.querySelector('.button')
let ul = document.querySelector('.ul')
let nam = document.querySelector('.input')
nam.addEventListener('blur' , b)
button.addEventListener("click",a);
function a() {
    fetch(`https://restcountries.com/v3.1/name/${b()}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        li1.textContent = `Population: ${data[0].population}`;
        li2.textContent = `Capital: ${data[0].capital}`;
        ul.appendChild(li1);
        ul.appendChild(li2);
    })
}
function b(){
    let con = nam.value
    return con
}