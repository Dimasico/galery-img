//Обработайте сценарий, когда сервер возвращает ошибку (например, 404). Выведите сообщение об ошибке в консоль.
// let ul = document.querySelector('.ul')
// fetch('https://www.googleapis.com/books/v1/volumes?')
// .then(response => response.json())
// .then((data) => {
//     console.log(data);
//     for (const key in data) {
//         console.log(data[key].code)
//         let li1 = document.createElement('li')
//         let li2 = document.createElement('li')
//         li1.textContent = data[key].code
//         li2.textContent = data[key].message
//         ul.appendChild(li1)
//         ul.appendChild(li2)
//     }
// })
// .catch(ere => console.error('Ощибочка произошла'))



// Вывести название  книги на страницу  и автора книги
// Выведите в список и смоделируйте ошибку при неудачном запросе
let ul = document.querySelector('.ul');
fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
.then(responce => responce.json())
.then(data =>{
    console.log(data)
    for(let i = 0; i<= data.items.length ; i++){
        let li1 = document.createElement('li')
        li1.textContent = data.items[i].volumeInfo.title
        ul.appendChild(li1)
        let li2 = document.createElement('li')
        li2.textContent = data.items[i].volumeInfo.authors[0]
        ul.appendChild(li2)
        let li3 = document.createElement('li')
        li3.textContent = '-------------------------'
        ul.appendChild(li3)
    }
})
.catch(ere => console.error('Ощибочка произошла'))