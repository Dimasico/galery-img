// Вывести из объекта названия товара категория товара и цену товара которую необходимо перевести в гривну
// const products = [
//     {
//       id: 1,
//       name: 'Футбольный мяч',
//       category: 'Спорт и отдых',
//       price: 20.99,
//       currency: 'USD',
//       features: ['Размер: 5', 'Материал: кожа', 'Цвет: бело-черный'],
//     },
//     {
//       id: 2,
//       name: 'Наушники Bluetooth',
//       category: 'Электроника',
//       price: 49.99,
//       currency: 'USD',
//       features: ['Беспроводные', 'Хорошее качество звука', 'Складные'],
//     },
//     {
//       id: 3,
//       name: 'Ноутбук HP Pavilion',
//       category: 'Компьютеры',
//       price: 799.99,
//       currency: 'USD',
//       features: ['Intel Core i5', '8GB RAM', '256GB SSD', '15.6" Full HD'],
//     },
//     {
//       id: 4,
//       name: 'Фотокамера Canon EOS Rebel',
//       category: 'Фототехника',
//       price: 699.99,
//       currency: 'USD',
//       features: ['24.1 мегапикселя', '4K видео', 'Wi-Fi', 'Экран с поворотом'],
//     },
//     {
//       id: 5,
//       name: 'Смартфон Samsung Galaxy S21',
//       category: 'Смартфоны',
//       price: 899.99,
//       currency: 'USD',
//       features: ['6.2" Dynamic AMOLED', '128GB встроенной памяти', 'Triple-камера'],
//     },
//     {
//       id: 6,
//       name: 'Кофемашина DeLonghi',
//       category: 'Кухонная техника',
//       price: 299.99,
//       currency: 'USD',
//       features: ['Капсульная система', 'Кофе, эспрессо, латте', 'Автоматическое отключение'],
//     },
//     {
//       id: 7,
//       name: 'Книга "Великий Гэтсби"',
//       category: 'Книги',
//       price: 14.99,
//       currency: 'USD',
//       features: ['Автор: Фрэнсис Скотт Фицджеральд', 'Жанр: роман', 'Издательство: Эксмо'],
//     },
//     {
//       id: 8,
//       name: 'Женское пальто',
//       category: 'Одежда',
//       price: 129.99,
//       currency: 'USD',
//       features: ['Размер: M', 'Материал: шерсть', 'Цвет: черный'],
//     },
//     {
//       id: 9,
//       name: 'Игровая консоль PlayStation 5',
//       category: 'Игровые приставки',
//       price: 499.99,
//       currency: 'USD',
//       features: ['4K разрешение', 'SSD на 825GB', 'Двойной контроллер DualSense'],
//     },
//     {
//       id: 10,
//       name: 'Умный термостат Nest',
//       category: 'Умный дом',
//       price: 149.99,
//       currency: 'USD',
//       features: ['Управление через мобильное приложение', 'Регулировка температуры', 'Энергосберегающий режим'],
//     },
//     // Дубликаты товаров
//     {
//       id: 11,
//       name: 'Футбольный мяч',
//       category: 'Спорт и отдых',
//       price: 20.99,
//       currency: 'USD',
//       features: ['Размер: 5', 'Материал: кожа', 'Цвет: бело-черный'],
//     },
//     {
//       id: 12,
//       name: 'Наушники Bluetooth',
//       category: 'Электроника',
//       price: 49.99,
//       currency: 'USD',
//       features: ['Беспроводные', 'Хорошее качество звука', 'Складные'],
//     },
  
//     {
//       id: 13,
//       name: 'Смартфон Samsung Galaxy S21',
//       category: 'Смартфоны',
//       price: 899.99,
//       currency: 'USD',
//       features: ['6.2" Dynamic AMOLED', '128GB встроенной памяти', 'Triple-камера'],
//     },
//   ];
// let ol = document.querySelector('.ol')
// function a(){
//     for(let i = 0 ; i < products.length ; i++){
//         let priceUkr = products[i].price*38
//         let ul = document.createElement('ul')
//         let li1 = document.createElement('li')
//         let li2 = document.createElement('li')
//         let li3 = document.createElement('li')
//         let li4 = document.createElement('li')
//         li1.textContent = products[i].name
//         li2.textContent = products[i].category
//         li3.textContent = priceUkr.toFixed(1)
//         li4.textContent = '--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'
//         ol.appendChild(ul)
//         ul.appendChild(li1)
//         ul.appendChild(li2)
//         ul.appendChild(li3)
//         ul.appendChild(li4)
//     }
// }
// a()






const productss = [
    {
      id: 1,
      name: 'Футбольный мяч',
      category: 'Спорт и отдых',
      price: 20.99,
      currency: 'USD',
      features: ['Размер: 5', 'Материал: кожа', 'Цвет: бело-черный'],
    },
    {
      id: 2,
      name: 'Наушники Bluetooth',
      category: 'Электроника',
      price: 49.99,
      currency: 'USD',
      features: ['Беспроводные', 'Хорошее качество звука', 'Складные'],
    },
    {
      id: 3,
      name: 'Ноутбук HP Pavilion',
      category: 'Компьютеры',
      price: 799.99,
      currency: 'USD',
      features: ['Intel Core i5', '8GB RAM', '256GB SSD', '15.6" Full HD'],
    },
    {
      id: 4,
      name: 'Фотокамера Canon EOS Rebel',
      category: 'Фототехника',
      price: 699.99,
      currency: 'USD',
      features: ['24.1 мегапикселя', '4K видео', 'Wi-Fi', 'Экран с поворотом'],
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy S21',
      category: 'Смартфоны',
      price: 899.99,
      currency: 'USD',
      features: ['6.2" Dynamic AMOLED', '128GB встроенной памяти', 'Triple-камера'],
    },
    {
      id: 6,
      name: 'Кофемашина DeLonghi',
      category: 'Кухонная техника',
      price: 299.99,
      currency: 'USD',
      features: ['Капсульная система', 'Кофе, эспрессо, латте', 'Автоматическое отключение'],
    },
    {
      id: 7,
      name: 'Книга "Великий Гэтсби"',
      category: 'Книги',
      price: 14.99,
      currency: 'USD',
      features: ['Автор: Фрэнсис Скотт Фицджеральд', 'Жанр: роман', 'Издательство: Эксмо'],
    },
    {
      id: 8,
      name: 'Женское пальто',
      category: 'Одежда',
      price: 129.99,
      currency: 'USD',
      features: ['Размер: M', 'Материал: шерсть', 'Цвет: черный'],
    },
    {
      id: 9,
      name: 'Игровая консоль PlayStation 5',
      category: 'Игровые приставки',
      price: 499.99,
      currency: 'USD',
      features: ['4K разрешение', 'SSD на 825GB', 'Двойной контроллер DualSense'],
    },
    {
      id: 10,
      name: 'Умный термостат Nest',
      category: 'Умный дом',
      price: 149.99,
      currency: 'USD',
      features: ['Управление через мобильное приложение', 'Регулировка температуры', 'Энергосберегающий режим'],
    },
    // Дубликаты товаров
    {
      id: 11,
      name: 'Футбольный мяч',
      category: 'Спорт и отдых',
      price: 20.99,
      currency: 'USD',
      features: ['Размер: 5', 'Материал: кожа', 'Цвет: бело-черный'],
    },
    {
      id: 12,
      name: 'Наушники Bluetooth',
      category: 'Электроника',
      price: 49.99,
      currency: 'USD',
      features: ['Беспроводные', 'Хорошее качество звука', 'Складные'],
    },
  
    {
      id: 13,
      name: 'Смартфон Samsung Galaxy S21',
      category: 'Смартфоны',
      price: 899.99,
      currency: 'USD',
      features: ['6.2" Dynamic AMOLED', '128GB встроенной памяти', 'Triple-камера'],
    },
  ];
let ol = document.querySelector('.ol')
function a(){
    let arr = new Set(productss.map(elem => elem.name))
    let products = Array.from(arr)
    console.log(products)
    for(let i = 0 ; i < products.length ; i++){
        let li1 = document.createElement('li')
        li1.textContent = products[i]
        ol.appendChild(li1)
    }
}
a()



