// 객체 연습

const superman = {
    name : 'clark',
    age : 30
}

console.log(superman.name);
console.log(superman['age']);

superman.hairColor = 'black';
superman['hobby'] = 'soccer';

console.log(superman); // 객체 자체를 출력할 수도 있다

delete superman.age;
console.log(superman);

// 객체를 반환하는 함수
let makeObject = (name, age) => {
    return {
        name, 
        age
    }
}

const lky = makeObject('lky', 21);
console.log (lky)

if ('hobby' in lky) {
    console.log(lky['hobby'])
}

else {
    lky.hobby = null;
    console.log(lky['hobby'])
}