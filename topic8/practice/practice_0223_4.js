// practice 4. 숫자 메소드 연습

// toString : 숫자를 문자형으로 + 2진수 혹은 16진수로 변환
let num = 10;
console.log(num.toString());
console.log(num.toString(2)); // 1010
console.log(num.toString(16)); // a

// Math.PI : 원주율
console.log(Math.round(Math.PI));

// Math.round(a) : a를 정수형으로 반올림
// 숫자.toFixed(n) : n자리까지 반올림 + 문자형으로 반환
console.log((Math.PI).toFixed(4)); // 3.1416. 6자리에서 반올림

// isNaN() : NaN인지 아닌지를 boolean으로 알려줌.
const sampleNaN = 3 - 'a';
console.log(sampleNaN);
if (isNaN(sampleNaN)) {
    console.log("this is NaN");
}

// parseInt() : 문자형을 숫자로 바꾸어줌 + 문자형에 문자가 섞여있는 순간부터 멈춤
// Number() : 문자형을 숫자로 바꿔줌 + 만약에 문자형에 문자가 섞여있으면 NaN 반환
const num1 = parseInt('21px1');
const num2 = Number('daramji4737');
console.log(num1, num2); // 21, NaN

// random : 랜덤함수
// max : 최댓값
// min : 최솟값

const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const min = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(max, min);