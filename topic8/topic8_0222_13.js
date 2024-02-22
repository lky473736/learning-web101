// 배열 매소드 중 sort, reduce를 배우기

// sort : 인수로 정렬 로직을 담은 함수를 받음
let arr = [1, 3, 2, 4, 5];
let arr_str = ['a', 'p', 'c', 'd']
console.log(arr.sort()); // 인수로 아무것도 안넣으면 오름차순으로 정렬이 됨
console.log(arr_str.sort()); // 알파벳 순으로 정렬

arr.sort((a, b) => {
    return b - a; // 내림차순 정렬 
});
console.log(arr);

// 배열의 모든 수 합치기 : for, for of, forEach로 먼저 구현해보기
let rst = 0;

// for문
for (let i = 0; i < arr.length; i++) {
    rst += arr[i];
}
console.log(rst);

rst = 0;

// for of문
for (let compo of arr) {
    rst += compo;
}
console.log(rst);

rst = 0;

// forEach문
arr.forEach((compo) => {
    rst += compo;
});
console.log(rst);

// reduce : 배열을 돌면서 특정 작업한 결과를 반환
// 인수 : (누적계산값, 현재값)
rst = arr.reduce((prev, cur) => {
    return prev + cur; // 지금까지 계산된 값에 현재 값을 더해준다
}, 0); // 0은 prev의 초기값
console.log(rst);

// reduce 예제
// 나이의 평균 구하기

let userList = [
    {name : 'lky', age : 21},
    {name : 'daramji', age : 3},
    {name : 'dedenne', age : 2},
];

rst = userList.reduce((prev, cur) => {
    return prev + cur['age'];
}, 0); // 0은 prev의 초기값
console.log(Math.round((rst / userList.length), 3));