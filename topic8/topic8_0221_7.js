/*
    symbol 

    - 프로퍼티의 key는 항상 문자형이다
    - 프로퍼티의 key는 문자형도 되지만, symbol도 가능하다
*/

let obj = {
    1 : 1
};
console.log (obj); // '1' : 1 이런 식으로 반환이 된다 (key 문자형으로)

const a = Symbol(); // new 안붙임
const b = Symbol(); // new 안붙임
console.log(a === b); // false. symbol은 유일하다

const id = Symbol('id'); // argument는 일종의 설명이다
const id2 = Symbol('id');
console.log(id === id2); // false. 설명은 똑같지만 symbol은 유일한 애라서 각자 다르다
console.log(id.description) // id의 설명을 볼 수 있다.

obj = Object.assign ({[id] : 'myid'}, obj);
console.log(obj);
console.log(obj[id]); // myid

// 객체 매소드가 symbol key를 만나면 건너뛰게 된다 
console.log(Object.keys(obj)); // symbol(id)가 나오지를 않는다
console.log(Object.values(obj)); // obj[id]가 나오지를 않는다

// Symbol.for() : 전역 심볼. Symbol.for는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유한다
const i = Symbol.for('id'); // 이 둘은 symbol을 공유한다
const i2 = Symbol.for('id'); // 이 둘은 symbol을 공유한다
console.log(i === i2); // true
console.log(Symbol.keyFor(i2)); // symbol의 설명을 얻을 수 있게 된다