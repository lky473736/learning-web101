// Object.entries를 구현

const user = {
    name : 'lky',
    age : 21,
    sex : 'male',
    location : 'seongnam',
    github : 'github.com/lky473736',
}

const userKeys = Object.keys(user);
const userValues = Object.values(user);
let arr = [];

for (let i = 0; i < userKeys.length; i++) {
    arr[i] = [userKeys[i], userValues[i]];
}

console.log(arr);
console.log(Object.entries(user)); // 위랑 똑같은 기능을 한다.