// Необходимо вывести на страницу товары и добавить метод который реализует скидки товаров 
// Необходимо реализовать список из 6 товаров

class Product{
    constructor(name, price, salePrice, discount){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.salePrice = salePrice
    }
    showProduct(){
        let wrap = document.querySelector('.wrap')
        let productCard = document.createElement('div')
        productCard.innerHTML = `
        <div class="wraper_item">
            <h2 class="title">${this.name}</h2>
            <p class="price">${this.price + '$'}</p>
            <p class="salePrice">${this.salePrice}</p>
            <p class="discount">${this.discount}</p>
        </div>`
        wrap.appendChild(productCard)
    }
    showProductNoSale(){
        let wrap = document.querySelector('.wrap')
        let productCard = document.createElement('div')
        productCard.innerHTML = `
        <div class="wraper_item">
            <h2 class="title">${this.name}</h2>
            <p class="salePrice">${this.price + '$'}</p>
        </div>`
        wrap.appendChild(productCard)
    }
}

let phone12mini = new Product( 'iphone 13 Mini','399' ,Math.floor(399-((399*10)/100)) + '$','10%');
let phone13 = new Product( 'iphone 13','499' ,Math.floor(499-((499*10)/100)) + '$','10%');
let phone14plus = new Product( 'iphone 14 Plus','599' ,Math.floor(499-((499*10)/100)) + '$','10%');
let phone14pro = new Product( 'iphone 14 Pro','1199' ,Math.floor(1199-((1199*10)/100)) + '$','10%');
let phone15promax= new Product( 'iphone 15 Pro Max','1399' ,Math.floor(1399-((1399*10)/100)) + '$','10%');

phone12mini.showProduct();
phone13.showProduct();
phone14plus.showProduct();
phone14pro.showProduct();
phone15promax.showProduct()

//-------------------------------------------------------------------------------------

let ipadAir = new Product( 'ipad Air 2021','699', Math.floor(2999-((2999*15)/100)) + '$','15%');


let airPods = new Product( 'AirPods Pro','169' );

let applewadth = new Product( 'Apple Watch Series 7','1099', Math.floor(1099-((1099*5)/100)) + '$','5%' )

let macbookair = new Product( 'MacBook Air','1599', Math.floor(1599-((1599*5)/100)) + '$','5%' )
let macbookpro = new Product( 'MacBook Pro','2399' )

let homepod = new Product( "HomePod",'1199',Math.floor(1199-((1199*5)/100)) + '$','5%')

let imac = new Product( 'iMac','2999', Math.floor(2999-((2999*10)/100)) + '$','10%')

let applevisionpro = new Product( 'Apple Vision Pro','3499')




airPods.showProductNoSale()
applewadth.showProduct()
macbookair.showProduct()
macbookpro.showProductNoSale()
homepod.showProduct()
imac.showProduct()
applevisionpro.showProductNoSale()