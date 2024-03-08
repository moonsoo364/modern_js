let todos;
const get =url =>{
    let XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.send();
    xhr.onload = () =>{
        if(xhr.status === 200){
            const response =JSON.parse(xhr.response);
            todos = response;
            console.log(todos);

        }else{
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    };
};
const response = get("https://jsonplaceholder.typicode.com/posts/1");
console.log(todos);