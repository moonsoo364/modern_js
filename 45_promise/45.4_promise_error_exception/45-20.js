
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
const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";
promiseGet(wrongUrl)
.then(
    res => 
        console.log(res),
)
.catch(
    err =>
        console.error(err)
)