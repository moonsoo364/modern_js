const promiseGet = url =>{
    return new Promise((resolve,reject)=>{
        let XMLHttpRequest = require('xhr2');
        const xhr =new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.send();
        xhr.onload= ()=>{
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.response));
                const promiseStatus = this;
                console.log(this);
            }else{
                reject(new Error(xhr.status));
            }
        }
    })
};
const result = promiseGet('https://jsonplaceholder.typicode.com/posts/1');
console.log(result);