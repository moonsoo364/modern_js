const get = (url,successCallback,failureCallback) =>{
    let XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.send();
    xhr.onload = () =>{
        if(xhr.status === 200){
            const response =JSON.parse(xhr.response);
            successCallback(response);
        }else{
            failureCallback(xhr.status);
        }
    };
};
const response = get("https://jsonplaceholder.typicode.com/posts/1");
