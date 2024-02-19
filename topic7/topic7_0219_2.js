/*
    자료형
    - 문자열 : ""나 '', `` 안에 들은 두 글자 이상 
        - f-string을 사용할 때는 `${}`를 이용하자 (안에 표현식 가능)
    - 숫자형 : 사칙연산이 자유로움 (연산자는 다른 언어랑 비슷)
        - 무한대를 도출하는 것이 가능하다
        - 문자열을 숫자로 나누면 NaN이 나온다 (NaN이 아닌지 항상 염두하자)
    - 불리언 표현 : true, false
    - null : 존재하지 않는값
    - undefined : 값이 할당되지 않음
    - typeof 연산자 : 변수의 자료형을 알 수 있다
*/

// 문자열
const user_name = "lky";
const age = 21;

const message1 = `hello my name is ${user_name}`;
const message2 = `my age is ${age-21+21}`;

console.log(message1);
console.log(message2);

console.log ("daramji" + " mauel")

// 숫자형
console.log("-----------");
console.log("더하기 : ", 1+2);
console.log("빼기 : ", 1-2);
console.log("곱하기 : ", 1*2);
console.log("나누기 : ", 1/2);
console.log("나머지 : ", 1%2);
console.log("무한대 : ", 1/0);
console.log("NaN : ", user_name/2);

// null, undefined
console.log("-----------");

let a;
console.log(a); // undefined

let b = null; // b는 존재하지 않는다.
console.log(b); // null

// typeof 연산자
console.log("-----------");
console.log(typeof 3); // number
console.log(typeof 'abc'); // string
console.log(typeof true); // boolean
console.log(typeof null); 
console.log(typeof undefined); // undefined

// null은 객체가 아니다

/*
    typeof는 변수의 자료형을 알 수 있으니,
    api에서 자료형에 따라 다르게 통신해야 할 때 저 연산자가 많이 사용된다
*/