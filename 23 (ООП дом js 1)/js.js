class Product{
    constructor(name,price,count){
        this.name=name;
        this.price=price;
        this.count=count;
    }
    htmlRender(){
        let wrap = document.querySelector('.wrap')
        let productCard = document.createElement('div')
        productCard.innerHTML = `
        <div class="wraper_item">
            <h2 class="title">${this.name}</h2>
            <p class="price">${this.price}</p>
            <p class="count">${this.count}</p>
        </div>`
        wrap.appendChild(productCard)
    }
}
let phone = new Product( 'iphone 13', '5999$','10+');
let ipad = new Product( 'ipad air 4', '2999$','8+');
let airPods = new Product( 'AirPods Pro', '169$','10+' );
let applewadth = new Product( 'Apple Watch Series 7', '1099$','10+' )
let macbookair = new Product( 'MacBook Air', '1599$','10+' )
let macbookpro = new Product( 'MacBook Pro', '2399$','10+' )
let homepod = new Product( "HomePod",'1199$','10+')
let imac = new Product( 'iMac', '2999$','10+')
let applevisionpro = new Product( 'Apple Vision Pro',"1499$","10+")

phone.htmlRender();
ipad.htmlRender();
airPods.htmlRender()
applewadth.htmlRender()
macbookair.htmlRender()
macbookpro.htmlRender()
homepod.htmlRender()
imac.htmlRender()
applevisionpro.htmlRender()