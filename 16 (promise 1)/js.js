// Создайте функцию, возвращающую промис, который разрешается, если переданное число четное, и отклоняется, если число нечетное
// let num = 4
// let data = new Promise((resolve, reject) => {
//     if(num % 2 == 0){
//         resolve('четное чесло')
//     }
//     else{
//         reject('нечетное число')
//     }
// })
// console.log(data)
// data.then(result => console.log(result))
// .catch(error => console.error(error))


// Создай промис для сравнения двух чисел
// Если числа равны промис успешен если нет тогда отлови ошибку
// let numFirst = Number(prompt('numFirst?'))
// let numSecond = Number(prompt('numSecond?'))
// let data = new Promise((resolve, reject) => {
//     if(numFirst == numSecond){
//         resolve('числа равны')
//     }
//     else{
//         reject('числа неравны')
//     }
// })
// console.log(data)
// data.then(result => console.log(result))
// .catch(error => console.error(error))


// Создай промис для генерации случайного числа 
// Если случайное число генерирует меньше 10 тогда промис успешен если больше 10 тогда выдавай ошибку
// let num = Math.floor(Math.random()*20)
// let data = new Promise((resolve, reject) => {
//     if(num < 10){
//         resolve('промис успешен')
//     }
//     else if(num > 10){
//         reject('промис не успешен')
//     }
//     else{
//         resolve('ровно')
//     }
// })
// console.log(num)
// console.log(data)
// data.then(result => console.log(result))
// .catch(error => console.error(error))


// Проверить длинну слова «Hello»
// Если длинна слова больше 4 тогда возвращать положительный результат иначе ошибку
let num = 'Hello'.length
let data = new Promise((resolve, reject) => {
    if(num > 4){
        resolve('промис успешен')
    }
    else{
        reject('промис не успешен')
    }
})
console.log(num)
console.log(data)
data.then(result => console.log(result))
.catch(error => console.error(error))