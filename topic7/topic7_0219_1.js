// javascript 기초

/*
    변수 선언
    - let : 한 파일 내 변수를 유일히 만들고 싶을 때 (변수명을 중복해서 선언할 수 없게 할 때)
    - const : 상수. 추후에 변경 불가능 (보통은 대문자로 작성)

    변하지 않는 값 : const
    변하는 값 : let
*/

// alert : 경고창 띄움 (웹에서)
// console.log() : 출력

let user_name = "lky";
// let user_name = "daramji" <-- 구문 오류 발생
user_name = "lim kyu yeon" // <-- 이건 가능
let age = 21;
const PI = 3.14;
// PI = 3; <-- 상수이기 때문에 변경 불가능

// alert(user_name); <-- 웹에서 경고창 띄워줌
console.log(user_name, age);