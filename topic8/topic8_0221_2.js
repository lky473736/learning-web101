// var는 전역변수로 사용이 가능하다.
// 하지만 let, var, const가 유일히 벗어날 수 없는 것이 함수다.

const age = 21;

function sample(input) {
    let k = input; // k는 함수를 벗어날 수 없다(let이든, const든, var든 마찬가지)
    return k;
}

for (let i = 0; i < 10; i++) {
    var j = i;
}

console.log (j); // 여기서 j를 호출할 수 있음
console.log (sample(1));
console.log (k); /// ReferenceError: k is not defined