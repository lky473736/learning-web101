// 객체 메소드

const user = {
    name : 'lky',
    age : 21,
};

// Object.assign() : 파이썬에서 copy()랑 비슷
const anotherUser = Object.assign({}, user); // 객체 복제 (anotherUser의 값을 변경해도 user의 값이 변경되지는 않는다)
// anotherUser = {} + user = { name: 'lky', age: 21 }
console.log (anotherUser);

const anotherUser2 = Object.assign({speed : 30}, user);
// anotherUser2 = {speed : 30} + user = { speed: 30, name: 'lky', age: 21 }
console.log (anotherUser2);

const info1 = {
    sex : 'male',
};

const info2 = {
    location : 'seongnam'
};

const lky = Object.assign(user, info1, info2); // user, info1, info2가 같이 병합된다
console.log(lky);


/////
// Object.keys() : 프로퍼티의 keys를 배열로 반환 (딕셔너리랑 비슷)
console.log(Object.keys(lky)); // name, age, sex, location

// Object.values() : 프로퍼티의 values를 배열로 반환 (딕셔너리랑 비슷)
console.log(Object.values(lky)); // lky, 21, male, seongnam


/////
// Object.entries() : keys/values를 배열로 반환 (2차원 배열)
console.log(Object.entries(lky));
/*[
    [ 'name', 'lky' ],
    [ 'age', 21 ],
    [ 'sex', 'male' ],
    [ 'location', 'seongnam' ]
]*/


/////
// Object.fromEntries() : 반대로
const arr = [['1', 2], ['2', 3], ['3', 4]];
const obj = Object.fromEntries(arr);
console.log(obj)