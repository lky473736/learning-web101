/*
    함수 관련 테크닉

    - or 연산자 사용
    - return : 반환값이 있으면 반환값을 반환하고, 반환값이 없으면 undefined를 반환한다
    - 반환형이 없는 함수 : return이 없어도 js에선 undefined를 반환함
*/

function sayHello (name) {
    let newName = name || 'friend'; // name이 있으면 name으로 초기화하는데, name이 없다면 'friend'로 초기화해라
    console.log(`hello ${newName}`);
}

function sumation (a, b) {
    return a + b;   
}

function func1() {
    console.log ("함수 호출함");
}

sayHello('lky');
sayHello();

console.log (sumation (1, 2));

const a = func1();
console.log(a); // undefined