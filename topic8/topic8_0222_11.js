// 구조 분해 할당

let [a, b] = [3, 4];
console.log(a, b); // 3, 4

let [q, w, e, r, t] = "hello my name is lky".split(' ');
console.log(q, t);

let [p=1, v=2, c=3] = [3, 4]; // 기본값을 넣어줄 수 있음
console.log(p, v, c); // 3, 4, 3

let [ar, , cr] = [1, 2, 3];
console.log(ar, cr); // 1, 3

let user = {name : 'lky', age : 21};
let {name:userName, age:userAge, sex='male'} = user;
console.log(userName, userAge, sex);