// 전역변수와 지역변수 예제 2

let name = "lky";

function sayHello(name) {
    console.log(`hello ${name}`);
}

sayHello(); // undefined가 나옴. pass by value 형식이기 때문에 argument가 없다면 당연히 undefined
sayHello(name);