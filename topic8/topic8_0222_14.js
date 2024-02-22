// 나머지 매개변수, 전개 구문

function showName (name) {
    console.log(name);
}

showName('lky');
showName('lky', 'dedenne'); // 이래도 동작은 한다. 인수의 갯수를 꼭 맞출 필요가 없다
showName(); // undefined

/*
    arguments : 함수로 넘어온 모든 인수에 접근 가능
    즉, 인수는 array 형태에 객체이므로 length와 index를 적용 가능케 된다
*/

function showArgument(arg) {
    // console.log(arg); <-- 이렇게 쓰면 오류난다
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showArgument(1, 2, 3, 4, 5); // 5, 1, 2

/*
    나머지 매개변수 : 인수를 받을 때 배열로 받을 수 있게끔 도와준다
*/

function sampleofRestParameter(...arg) {
    console.log(arg); // arg를 배열로 출력
}

sampleofRestParameter(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

function add (...numbers) { 
    const rst = numbers.reduce ((prev, cur) => {
        return (prev += cur);
    }, 0);

    return rst;
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));