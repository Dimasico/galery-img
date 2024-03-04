// Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.
// let text = document.querySelector('.text')
// let btn = document.querySelector('.btn')
// const elements = ["Елемент 1", "Елемент 2", "Елемент 3", "Елемент 4", "Елемент 5"];
// btn.addEventListener('click', () =>{
//     let f = Math.floor(Math.random() * elements.length)
//     text.value = elements[f]
// })



// Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в инпут через запятую выводились четные числа из этого массива.
// const elements = [1,2,3,4,5,6,7,8,9,9,0];
// let text = document.querySelector('.text')
// let btn = document.querySelector('.btn')
// btn.addEventListener('click', () =>{
//      let f = elements.filter(elem => elem%2==0)
    
//     text.textContent = f
// })


// Дан массив, инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац элемент массива, индекс которого введен в инпут.
// const elements = [1,2,3,4,5,66,7,8,9,9,0];
// let intext = document.querySelector('.intext')
// let text = document.querySelector('.text')
// let btn = document.querySelector('.btn')
// btn.addEventListener('click', () =>{
//     text.textContent = elements[intext.value]
// })


// Дана кнопка и список ul, заполненный числами. По клику на кнопку удалите пункт списка, содержащий самое максимальное число.
let numberList = document.querySelector('.numberList')
let btn = document.querySelector('.btn')
let li = document.getElementsByTagName('li')

// function a(n){
//     let max = 0
//     max = n[0]
//     for(let i = 0 ; i<=n.length ; i++){
//         if(n[i] >= max){
//             max = n[i]
//         }
//     }
//     return max
// }
// console.log(a(li))
btn.addEventListener('click', () =>{
    let max = 0
    for(let i = 0 ; i<=li.length ; i++){
        if(li[i] >= max){
            max = li[i]
        }
    }
    return max
})
console.log(max)