/*
    연산자, 비교 연산자, 조건문

    연산자
    - 연산자의 우선순위나 방법은 파이썬과 c, c++과 똑같음
    - 증감 연산자 있음 : ++, -- (앞 뒤 있음. c, c++과 동일)

    비교 연산자
    - 똑같다. 파이썬이랑 똑같다.
    - == : 동등 연산자 (표면상) / = : 대입 연산자 / === : 일치 연산자
    - 불리언 표현으로 조건문에 들어갈 수 있다 

    조건문
    - if문, else if문, else문이 있음
    - 
*/

// 연산자
let num = 10;
let othernum = num++;
console.log(num, othernum); // 11 10

othernum = ++num;
console.log(num, othernum); // 12 12

// 비교 연산자
console.log(10>5); // true
console.log(25<19); // false
console.log(10==10); // true

// 이런 상황은 어떨까?
const a = 1;
const b = "1";
console.log(a == b); // true
// 왜 true지? -> 표면상으로 같기 때문이다. 타입까지 비교하려면 ===
console.log(a === b); // false

// 조건문
let input_num = prompt("수를 입력해주세요.")
input_num = Number(input_num)

if (input_num < 0) {
    alert(`${input_num}은 음수입니다.`)
}

else if (input_num > 0) {
    alert(`${input_num}은 양수입니다.`)
}

else {
    alert(`${input_num}은 0입니다.`)
}