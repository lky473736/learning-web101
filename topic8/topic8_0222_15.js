/*
    나머지 매개변수 예제 : user 객체를 만드는 생성자 함수
    * 인수를 구성할 때, 항상 나머지 매개변수는 마지막에 위치해야 함 (맨 오른쪽부터)
*/

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('lky', 21, 'python', 'c++');
const user2 = new User('dedenne', 3, 'electro');

console.log(user1);
console.log(user2);