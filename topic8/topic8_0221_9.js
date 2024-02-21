/*
    숫자 메소드
*/

// toString() : 숫자를 문자로 바꾸어 줌
// toString(2), toString(16) : 10진수 -> 2진법, 16진법
let num = 10;
num.toString(); 
console.log(num);

const a = Number(num).toString(2);
console.log(a);

// Math.PI : 원주율
console.log(Math.PI);

// Math.ceil() : 올림 / floor() : 내림 / round() : 반올림
console.log(Math.ceil(3.5));
console.log(Math.floor(3.4));
console.log(Math.round(10.1));

// 숫자.toFixed(n) : n째자리까지 반올림해서 표현 (문자열을 반환하기 때문에 주의)
const pi = 3.141592;
console.log(pi.toFixed(2));
console.log(Number(pi.toFixed(2)));

// isNaN() : NaN인지 아닌지를 boolean으로 알려줌
console.log(isNaN(Number('x')));

// parseInt() - parseFloat() : 문자형을 숫자로 바꾸어줌 (왼쪽부터 오른쪽으로 읽음. 문자에 숫자가 포함된다면 숫자만 반환)
console.log(parseInt('21px')); // 21
console.log(parseFloat('21.04px')) // 21.04
console.log(parseInt('px21')); // NaN. 왼쪽에 숫자가 없기 때문에

// Math.random, Math.max, Math.min ...