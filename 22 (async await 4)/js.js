// Нужно в списке вывести данные  о  случайном юзере и фотографию
// Все это необходимо вывести в див
// let ul = document.querySelector('.ul')
// let btn = document.querySelector('.btn')
// function start() {
//     a()
//     b()
// }
// async function a(){
//     try{
//         const responce = await fetch('https://dog.ceo/api/breeds/image/random')
//         const date = await responce.json()
//         console.log(date)
//         let img = document.createElement('img');
//         img.src = date.message
//         let li = document.createElement('li')
//         li.appendChild(img)
//         ul.appendChild(li);
//     }catch{
//         console.error('error')
//     }
// }
// async function b(){
//     try{
//         const responce = await fetch('https://randomuser.me/api/')
//         const date = await responce.json()
//         console.log(date)
//         let li = document.createElement('li')
//         li.textContent = date.results[0].email 
//         ul.appendChild(li)
//         let li1 = document.createElement('li')
//         li1.textContent = date.results[0].name.first +  ' ' + date.results[0].name.last
//         ul.appendChild(li1)
//     }catch{
//         console.error('error')
//     }
// }
// btn.addEventListener('click' , start)



// Получить данные из данного АПИ 
// Выбрать из этих данных имя пользователя айди пользователя и фамилию 
// И вернуть эти данные в виде массива 
async function a(){
    try{
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const date = await responce.json()
        let users = []
        for(let i = 0; i < date.length ; i++){
            users.push(date[i].id , date[i].name)
        }
        return users
    }catch{
        console.error('error')
    }
    return users
}

console.log(users)
a()