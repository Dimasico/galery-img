// Напишите функцию которая удаляет из масива каждый пятый элемент.
// function a(b){
//     let newAre = []
//     for(let i = 0 ; i<b.length ; i++){
//         if((i+1)%5!=0){
//             newAre.push(b[i])
//         }
//     }
//     return newAre
// }
// let abc = [1,2,3,4,5,6,7,8,9,10]
// console.log(a(abc))



// Напишите функцию , которая принимает число n и возвращает сумму всех четных целых чисел от 1 до n.
// function a (n){
//     let sum = 0
//     for(let i = 1;i<=n;i++){
//         if(i%2==0){
//             sum = sum + i
//         }
//     }
//     return sum
// }
// let f = 7
// console.log(a(f))



// апишите функцию которая вернет противоположное число
// function a(n){
//     return-n
//     return d
// }
// console.log(a(10))


// Напишите функцию которая считает количество четных чисел в массиве
function a(n){
    let col = 0
    for(let i = 0;i<n.length;i++)
        if(n[i]%2==0){
            col+=1
        }
    return col
}
let abc = [1,2,3,4,5,6,7,8,9,10]
console.log(a(abc))