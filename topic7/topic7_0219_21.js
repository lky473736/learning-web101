/*
    배열 

    - 순서가 있는 리스트
    - 파이썬과 비슷하게 사용한다. 크기를 따로 지정해줄 필요 없다. 인덱스는 0부터
    - 배열은 문자 뿐만이 아니라 숫자, 객체, 함수도 포함될 수 있다.
    - 배열명.length : 배열의 길이
    - 배열명.push() : 배열 끝에 추가 (python의 append)
    - 배열명.pop() : 배열 끝에 삭제 (python의 pop)
    - 배열명.shift() : 배열 앞에 제거 (python의 deque.popleft())
    - 배열명.unshift() : 배열 앞에 추가 (python의 input(0))
    - for ~ of : 배열의 값에 접근 가능 
*/

let arr = [
    '임규연', 
    3, 
    false,
    {
        name : 'lky',
        age : 21
    },
    function() {
        console.log("test")
    }
]; // 배열은 문자 뿐만이 아니라 숫자, 객체, 함수도 포함될 수 있다.

let arr1 = [];

for (let i = 0; i < 10; i++) {
    arr1.push(i + 1);
}

console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

arr1.unshift(0);
console.log(arr1);
arr1.shift();
console.log(arr1);

for (let component of arr1) {
    console.log(component);
}