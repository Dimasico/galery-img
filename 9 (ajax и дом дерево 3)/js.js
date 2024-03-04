// Напишите функцию, которая использует Ajax, чтобы получить все посты и вывести их заголовки в параграф .

// let xhl = new XMLHttpRequest()
// let ul = document.querySelector('.ul')
// let api = 'https://jsonplaceholder.typicode.com/posts'
// xhl.open('GET',api)
// xhl.send();
// xhl.addEventListener('load' , showUsers)
// function showUsers() {
//     let data = JSON.parse(xhl.responseText);
//     for(let i = 0 ; i < data.length ; i++){
//         let li = document.createElement('li');
//         li.textContent = data[i].title;
//         ul.appendChild(li);
//     }
// }



// Выведите заголовки только четных айдишников вывести в список

// let xhl = new XMLHttpRequest()
// let ul = document.querySelector('.ul')
// let api = 'https://jsonplaceholder.typicode.com/posts'
// xhl.open('GET',api)
// xhl.send();
// xhl.addEventListener('load' , showUsers)
// function showUsers() {
//     let data = JSON.parse(xhl.responseText);
//     for(let i = 0 ; i < data.length ; i++){
//         if (data[i].id % 2 == 0){
//             let li = document.createElement('li');
//             li.textContent = data[i].title + '-------' + data[i].id;
//             ul.appendChild(li);
//         }
//     }
// }


// Вывести только посты с 25 до 50
// Вывести внутрь списка  заголовки  и тело поста

// let xhl = new XMLHttpRequest()
// let ul = document.querySelector('.ul')
// let api = 'https://jsonplaceholder.typicode.com/posts'
// xhl.open('GET',api)
// xhl.send();
// xhl.addEventListener('load' , showUsers)
// function showUsers() {
//     let data = JSON.parse(xhl.responseText);
//     for(let i = 24 ; i <= 49 ; i++){
//         let li = document.createElement('li');
//         let h2 = document.createElement('h2')
//         let p = document.createElement('p')
//         h2.textContent = data[i].title
//         p.textContent = data[i].body
//         ul.appendChild(li);
//         li.appendChild(h2);
//         li.appendChild(p);
//     }
// }


// Получи геолокацию пользователя и вывести ее в див

let xhl = new XMLHttpRequest()
let div = document.querySelector('.div') 
let api = 'https://jsonplaceholder.typicode.com/users'
xhl.open('GET',api)
xhl.send();
xhl.addEventListener('load' , showUsers)
function showUsers() {
    let data = JSON.parse(xhl.responseText);
    for(let i = 0 ; i < api.length ; i++){
        let h1 = document.createElement('h1')
        let ul = document.createElement('ul')
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        h1.textContent = data[i].id
        li1.textContent = data[i].address.geo.lat
        li2.textContent = data[i].address.geo.lng
        div.appendChild(h1);
        div.appendChild(ul);
        ul.appendChild(li1)
        ul.appendChild(li2)
    }
}