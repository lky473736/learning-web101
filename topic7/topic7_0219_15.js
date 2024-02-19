/*
    단축 프로퍼티
    
    - 기존에 어떤 변수가 사용되면 변수를 객체에 대입할 수 있다.
    - 만약 객체의 property명과 변수명이 같다면 축약해서 사용할 수 있다.
*/

const a = 0;
const b = 1;

const obj = {
    a, // a : a
    b, // b : b
    c : 2
}

console.log (obj.a, obj.b, obj.c);

console.log(obj.d); // undefined

/*
    만약 존재하지 않는 property에 접근하면 undefined를 출력한다. 
    에러를 발생시키지 않는다. (아직 없는 property니깐)

    따라서 특정 property가 객체에 있는지를 확인하려면 'in' 연산자를 사용하자
*/

if ('d' in obj) {
    console.log (obj.d);
}

else {
    console.log ("그런 객체는 없음");
}