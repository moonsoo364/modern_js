# JS 비동기 처리

## 비동기 처리를 위한 콜백 패턴
### 콜백 헬
아래의 `get` 함수는 비동기 함수 이다. `get`을 호출하면 비동기로 동작하는 코드가 완료되지 않았다 하더라도 Call Stack은 종료된다.
그래서 `get` 내부의 비동기로 동작하는 코드인 `xhr.onload`의 콜백 함수는 처리 결과를 외부로 반환하거나 상위 스코프에 할당할 수 없다.
```
//45-05
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

        }else{
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    };
};
const response = get("https://jsonplaceholder.typicode.com/posts/1");
console.log(todos); 
```
### 에러 처리의 한계
비동기 함수인 `setTimeOut`이 호출되면 Call Stack에 푸쉬되어 실행된다.
`setTimeout`은 비동기 함수 이므로 콜백 함수가 호출되는 것을 기다리지 않고 종료된다.
이후 1초가 지나면 Call Stack이 비어 있을 때 콜백 함수가 호출되고 실행된다.
콜백 함수가 실행될 때 `setTimeout`함수는 이미 Call Stack에서 제거된 상태다.
`Error`는 Call Stack 아래 방향으로 전파가 되는데 콜백 함수의 호출이 `setTimeout`의 Call Stack가 다르므로 `catch`문이 동작하지 않는다.

```
//45-09
try{
	setTimeout()=>{ throw new Error('Error');},1000);
}catch(e){
	console.error(e);
}
```
