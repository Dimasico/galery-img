// При запросе по адресу https://picsum.photos/v2/list получить список из 10 случайных фотографий и вывести их.
let ul = document.querySelector('.ul');
function getRandomElements(arr, num) {
    let arrCop = arr.slice(0)
    let i = arr.length
    let temb,index;
    while (i-- > 0) {
        index = Math.floor((i--) * Math.random());
        temb = arrCop[index];
        arrCop[index] = arrCop[i]
        arrCop[i] = temb
    }
    return arrCop.slice(0,num)
}
fetch('https://picsum.photos/v2/list')
.then(response => response.json())
.then(data => {
    console.log(data)
    let randomFotos = getRandomElements(data , 10)
    randomFotos.forEach(image => {
        let img = document.createElement('img');
        img.src = image.download_url;
        img.alt = image.author;
        img.classList.add("photo");
        ul.appendChild(img);
    });
});