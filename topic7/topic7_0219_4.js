/*
    명시적 형 변환

    String() : 문자형으로 변환
    Number() : 숫자형으로 변환
    Boolean() : true, false형으로 변환
        - 이때 0이나 null이면 false, 0이 아니면 true

    기본적으로 입력받을 땐 문자형으로 입력받는다
    특이한 건, 나눗셈 연산은 문자형이더라도 계산이 된다 (자동 형변환 된다)
*/
/*
const math = prompt("수학 점수를 입력하세요.");
const english = prompt("영어 점수를 입력하세요.");

// alert (math + english) -> 1324가 출력됨
alert ((Number(math) + Number(english)) / 2);

console.log ("10" / "2"); // 신기하게도 5가 출력된다. */

// String() : 괄호 안에 있는 것들 그대로 문자형으로 변환
console.log("--------")
console.log(String(3), String("string"), String(true), String(false), String(null), String(undefined));

// Number() : 문자형, undefined는 NaN - null은 0
console.log("--------")
console.log(Number(3), Number("string"), Number(true), Number(false), Number(null), Number(undefined));

// Boolean() 
// false인 케이스 : 숫자 0, 빈 문자열, null, undefined, NaN
console.log("--------")
console.log(Boolean(3), Boolean("string"), Boolean(true), Boolean(false), Boolean(null), Boolean(undefined));
// -> true, true, true, false, false, false 출력