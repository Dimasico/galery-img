// Реализуйте функцию, которая генерирует случайный идентификатор (например, строку из букв и цифр) заданной длины.(длинну задавать как параметр для функции)

// let p = document.querySelector('.p')
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function generateRandomString(length) {
//   let r = ''
//   for (let i = 0; i < length; i++) {
//     let charLength = characters.length
//     r += characters[Math.floor(Math.random() * charLength)]
//     p.textContent = r
//   }
// }
// let a = prompt('?')
// generateRandomString(a)



// Задача
// У тебя есть инпут список и кнопка
// Тебе необходимо отрисоват всех пользоватей на странице и вводить в инпут имя пользователя и удалять этого пользователя со страницы

const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
];

let ul = document.querySelector('.ul')
let input = document.querySelector('.input')
let btn = document.querySelector('.button')
btn.addEventListener('click', deletUser)
function deletUser (){
  for(let i = 0 ; i < users.length ; i++){
    if(users[i].name === input.value ) {
      users.splice(i , 1);
      usersUl()
    }
  }
}
function usersUl (){
  ul.innerHTML = ''
  for(let i = 0 ; i < users.length ; i++){
    let li = document.createElement('li')
    li.textContent = users[i].name
    ul.appendChild(li)
  }
}
usersUl()