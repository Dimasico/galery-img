// async function a (){
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const userDate = await responce.json()
//         console.log(userDate[0].name)  
//     } catch (error) {
//         console.error('попадос')
//     }
// }
// a();


// Вывести только четные фотографии из данного апи

// let body = document.querySelector('.body')
// async function b(){
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/photos')
//             const date = await responce.json()
//         for(let i = 1 ; i <= date.length ; i+=2){
//             if(date[i].id <= 100){
//                 let img = document.createElement('img')
//                 img.src=date[i].thumbnailUrl;
//                 body.appendChild(img);
//             }
//         }
//     } catch (error) {
//         console.error('попадос')
//     }
// }
// b()