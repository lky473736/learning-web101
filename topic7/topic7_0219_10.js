// 전역변수와 지역변수 예제 1

let msg = "welcome";

function sayHello(name = "null") { // default argument
    let msg = "hello";
    console.log(msg);
    msg += ` ${name} nice to meet you`; // sayHello 안에 있는 msg에 추가 
    console.log(msg)
} // 닫는 brace를 만나는 순간 지역변수 msg 해제

sayHello ('lky');
console.log(msg);
sayHello();