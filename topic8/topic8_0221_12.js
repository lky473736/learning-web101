/*  
    배열 매소드
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 특정 부분을 지운다
arr.splice(0, 2); // 0부터 2개를 지운다
console.log(arr); // 3, 4, 5, 6, 7, 8, 9, 10

// 특정 요소를 지우고 추가도 가능하다 (추가할 땐 지우고 남은 포인터부터 사이로 추가가 된다)
arr.splice(0, 3, 1, 2, 3, 4, 5); // 0부터 3개 지우고 1, 2, 3, 4, 5를 추가해라
console.log(arr); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
arr.splice(9, 0, 11); // 9부터 0개 지우고 11 추가해라
console.log(arr); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10

// splice는 삭제된 배열을 반환한다
let result = arr.splice(10, 1);
console.log(result);

// 배열을 슬라이싱할 수 있다
console.log (arr.slice(0, 4)); // 0, 1, 2, 3까지
let arr1 = arr.slice(); // 아무것도 안넣으면 전체가 되고, arr1은 arr를 복사하게 된다
console.log (arr1);

// 배열을 합칠 수 있다
let x = [1, 2];
let y = [3, 4];
let z = [4, 5];
console.log(x.concat(y, z));

// 배열의 반복은 for of와 forEach로 가능하다
let users = ['lky', 'daramji', 'pachiritsu'];
users.forEach((name, index) => {
    console.log(name, index);
});

// 문자열의 indexOf를 배열에서도 사용할 수 있다
if (users.indexOf('daramji') > -1) {
    console.log("다람지가 있다");
}

// includes도 사용 가능하다
if (!users.includes('dedenne')) {
    console.log ("데덴네가 어디있지?");
}

// find를 이용해서 더 복잡하게 해결 가능하다
// find는 한번 true를 만나게 된다면 그 이후는 시행하지 않는다
let userList = [
    {name : 'lky', age : 21},
    {name : 'dedenne', age : 3},
    {name : 'pachiritsu', age : 5}
];

const notAdult = userList.find((user) => {
    if (user['age'] <= 19) {
        return true;
    }
});
console.log(notAdult); // 원래 pachiritsu도 성인이 아니기 때문에 출력하는게 당연하지만 find 특성 상 한번 true를 만나게 된다면 그 이후는 시행하지 않는다

// find에 비해 filter는 만족하는 모든 요소를 배열로 반환한다
const notAdultAllFindVersion = userList.filter((user) => {
    if (user['age'] <= 19) {
        return true;
    }
});

console.log(notAdultAllFindVersion); // 이젠 pachiritsu도 출력이 된다

// reverse를 이용해 역순으로 정렬한다
arr.reverse();
console.log(arr); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 11 => 11, 9, 8, 7, 6, 5, 4, 3, 2, 1

// map을 이용해 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환한다
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddList = numList.map((component) => {
    if (component % 2 !== 0) {
        return component;
    } // 짝수가 아니라면 oddList에 push하게 된다
    // 짝수가 되면 undefined가 oddList에 추가되기 때문에 걸러주어야 한다
}).filter((element) => element !== undefined);
// filter를 이용해 undefined를 걸러준다
console.log(oddList);