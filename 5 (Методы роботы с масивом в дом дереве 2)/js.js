// Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в случайный цвет из массива.
// const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'brown', 'gray', 'black', 'white', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet', 'gold', 'silver'];
// let text = document.querySelector('.text')
// let button = document.querySelector('.button')
// button.addEventListener('click', () =>{
//     let f = Math.floor(Math.random() * colors.length)
//     text.style.color = colors[f]
// })


// Дан список ul. Сделайте так, чтобы по клику на любую li она удалялась из списка.
// let list = document.querySelectorAll('.ul > li');
// let ul = document.querySelectorAll('.ul');
// list.forEach(elem =>{
//     elem.addEventListener('click' , () =>{
//         elem.remove()
//     })
// })


// Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.
// let list = document.querySelectorAll('.ul > li');
// let ul = document.querySelectorAll('.ul');
// let button = document.querySelector('.button')
// let input = document.querySelector('.input')
// button.addEventListener('click', () =>{
//     let sum = 0;
//     list.forEach(elem => {
//         sum += Number(elem.textContent)
//     })
//     input.value = sum
// })