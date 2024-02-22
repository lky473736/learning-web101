// 전개 구문

let arr = [1, 2, 3];
let arr2 = [...arr]; // 이렇게 하면 ...arr이 1, 2, 3을 전개해서 arr2에 넣게 된다
console.log(arr2);

let user = {name:'lky', age:21};
let user2 = {...user};
console.log(user2); // 객체도 가능하다