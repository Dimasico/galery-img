// Выведите информацию и о первых трех юзерах на страницу(имя фамилия и  эмайл)

let xhl = new XMLHttpRequest()
let reg = 'https://jsonplaceholder.typicode.com/users'
let p = document.querySelector('.p')
xhl.open('GET',reg)
xhl.send();
xhl.addEventListener('load' , showUsers)
function showUsers (){
    let data = JSON.parse(xhl.responseText);
    let a = ''
    for(let i = 0 ; i <= 2 ; i++){
        a +=  data[i].name + ', ' + data[i].email + '______'
        console.log(a)
        p.textContent = a
    }
}