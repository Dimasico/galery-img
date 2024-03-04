// Создайте два fetch запроса и при клике на кнопку необходимо отображать ID поста Title поста и body поста все это отображается внутри списка UL, так же нужно добавить возможность вывода комментариев к посту при кликае на тело поста 
let ul = document.querySelector('.ul')
let button = document.querySelector('.button');

button.addEventListener('click' , a)

function a(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        data.forEach(element => {
            let li1 = document.createElement('li');
            let h2 = document.createElement('h2');
            let p2 = document.createElement('p');
            h2.textContent= element.title;
            p2.textContent= "Body: "+ element.body;
            ul.appendChild(li1);
            li1.append(h2);
            li1.append(p2);
            h2.addEventListener('click' , b)
            function b(){
                fetch('https://jsonplaceholder.typicode.com/comments ')
                .then(response => response.json())
                .then((data) => {
                    console.log(data)
                    let ul1 = document.createElement('ul');
                    data.filter(comment => comment.postId === element.id).forEach(element =>{
                        let li2 = document.createElement('li');
                        li2.textContent = element.body
                        li1.appendChild(ul1)
                        ul1.appendChild(li2)
                        li2.addEventListener('click' , c)
                        function c(){
                            fetch('https://jsonplaceholder.typicode.com/comments ')
                            .then(response => response.json())
                            .then((data) => {
                                console.log('robotayet')
                                ul1.style.display='none'
                            })
                        }
                    })
                })
            }
        })
    })
}
