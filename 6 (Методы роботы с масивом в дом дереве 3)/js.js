// Даны дивы с названиями продуктов и ценами. Дан также абзац. Сделайте так, чтобы кликами можно было выбрать несколько продуктов и их суммарная стоимость при этом писалась бы в абзац
// let products = document.querySelectorAll('.products input[type="checkbox"]')
// let totalPrice = document.querySelector('#totalPrice')
// products.forEach(elem => {
//     elem.addEventListener('change' , a)
// });
// function a(){
//     let prise = 0
//     products.forEach(elem => {
//         if(elem.checked){
//             prise += +elem.getAttribute('data-price')
//             console.log(prise)
//         }
//     });
//     totalPrice.textContent = '$'+prise
// }


// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац строку, состоящую из нулей, количество которых равно числу. Например, при вводе числа 5 у нас должна получится строка '00000'.
// let input = document.querySelector('.input')
// let button = document.querySelector('.button')
// let result = document.querySelector('.p')
// button.addEventListener('click' , () =>{
//     for(let i = 0 ; i < Number(input.value) ; i++){
//         result.textContent += 0
//     }
// })