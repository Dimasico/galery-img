fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then((data) => {
    console.log(data);
})
.catch(error => console.error('pomogyte'))
const postData = {
    userId: 1,
    title: 'foo',
    body: 'bar',
};
fetch('https://jsonplaceholder.typicode.com/users' , {
    method:'POST' , 
    headers:{
        "Content-Type":"application/json"
    }, 
    body: JSON.stringify(postData),
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error('это не ошибка, всему виновен тот кто присал код'))