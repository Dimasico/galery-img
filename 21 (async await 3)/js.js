// Вывести на страницу 3 первых университета Киева используя данный API

// let ul = document.querySelector('.ul')
// async function a(){
//     try{
//         const responce = await fetch('http://universities.hipolabs.com/search?country=Ukraine')
//         const date = await responce.json()
//         let univers = date.filter(elem => elem.name.includes('Kiev'))
//         let univers3 = univers.slice(0,3)
//         for (let i = 0; i <= univers3.length; i++){
//             let li = document.createElement('li')
//             li.textContent = univers3[i].name
//             ul.appendChild(li)
//         }
//     }catch{
//         console.error('error')
//     }
// }
// a()



// Тебе нужно вводить в инпут название страны и выводить первые 3 университета из этой страны

let ul = document.querySelector('.ul')
let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
async function a(){
    try{
        let country = input.value
        const responce = await fetch(`http://universities.hipolabs.com/search?country=${country}`)
        const date = await responce.json()
        let univers = date.slice(0,3)
        for (let i = 0; i <= univers.length; i++){
            let li = document.createElement('li')
            li.textContent = univers[i].name
            ul.appendChild(li)
        }
    }catch{
        console.error('error')
    }
}
btn.addEventListener('click' , a)