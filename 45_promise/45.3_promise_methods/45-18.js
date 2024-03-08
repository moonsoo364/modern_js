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

promiseGet('https://jsonplaceholder.typicode.com/posts/1')
.then(
        res => 
            console.log(res),
    )
.catch(
        err => 
            console.error(err)
    )
.finally(
        ()=> 
            console.log('Bye!')
        );
