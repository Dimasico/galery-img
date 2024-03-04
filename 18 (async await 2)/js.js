// https://jsonplaceholder.typicode.com/users
// Вводите в инпут улицу пользователя и получайте координаты его место нахождения
// Получать координаты при клике на кнопку и выводить это в параграф

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const p = document.querySelector('.p');
async function a(){
    try{
        let url = await fetch('https://jsonplaceholder.typicode.com/users')
        let urlJson = await url.json()
        console.log(urlJson)
        return urlJson
        
    }catch (error) {
        console.error('попадос')
    }
}
button.addEventListener("click", clik)
function clik(){
    let jsn = a();
    jsn.then(data => {
        for(let i=0;i<data.length;i++){
            if(data[i].address.street === input.value){
                let coords1 = data[i].address.geo.lat;
                let coords2 = data[i].address.geo.lng;
                p.textContent = coords1 + ' , ' + coords2
            }
        }
    })
}
a()