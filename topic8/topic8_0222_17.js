/* 
    closure
    - 코드를 실행하게 되면 lexical 환경에는 인수나 변수와 함수가 올라가게 된다
*/

let one; // lexical 환경에 올라감
one = 1;

function addOne(num) { // lexical 환경에 올라감
    console.log (one, num);
}

addOne(5); // 5라는 인수가 새롭게 lexical 환경에 올라간다. 하지만 함수 내부이기 때문에 내부 lexical 환경에 올라간다.

// 전역 : one, addOne
// 내부 : 5