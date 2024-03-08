const get = (url,callback) =>{
    let XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.send();
    xhr.onload = () =>{
        if(xhr.status === 200){
            const response =JSON.parse(xhr.response);
            callback(response);
        }else{
            console.error(xhr.status);
        }
    };
};
const url = "https://jsonplaceholder.typicode.com";
get(`${url}/posts/1`,({userId})=>{
    console.log(userId);
    get(`${url}/users/${userId}`,userInfo=>{
        console.log(userInfo);
    })
})

