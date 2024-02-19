/*
    함수 선언문 vs 함수 표현식

    - 아래 두 코드는 같다. 하지만 호출할 수 있는 타이밍이 다르다.
    - 함수 선언문 : 어디서든 호출이 가능하다 (hoisting 때문)
    - 함수 표현식 : 함수가 먼저 생성된 후에 호출이 가능하다.
        - 화살표 함수 : 함수 표현식을 더 간단하게 작성 가능하다. 또한 안에 return 밖에 없다면 중괄호 대신 소괄호로, return을 생략해서 작성할 수 있다. 인수가 딱 하나라면 인수를 감싸는 괄호 또한 생략이 가능하다.
*/

sayHello1(); // hoisting 때문에 가능하다.

function sayHello1 () {
    console.log("hello1");
}

// sayHello2(); <--- 함수 표현식으로 작성되었기 때문에 이러면 안된다

let sayHello2 = function() {
    console.log("hello2")
}

let sayHello3 = () => {
    console.log("hello3")
}

let add1 = (num1, num2) => {
    return num1 + num2;
}

let add2 = (num1, num2) => (num1 + num2);

sayHello2();
sayHello3();

console.log(add1(2, 3));
console.log(add2(2, 3));