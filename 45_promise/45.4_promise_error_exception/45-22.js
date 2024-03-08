
const promiseGet = url => {
    return new Promise((resolve,reject)=>{
        let XMLHttpRequest = require('xhr2');
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.send();

        xhr.onload= () =>{
            if(xhr.stattus === 200){
                resolve(JSON.parse(xhr.response));
            }else{
                reject(new Error(xhr.status));
            }
        };
    });
};
const url = "https://jsonplaceholder.typicode.com/todos/1";
promiseGet(url)
.then(
    res => 
        console.xxx(res)
)
.catch(
    err => 
        console.error(err)
    );
