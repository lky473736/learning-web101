// 객체 리터럴 : 아래처럼 객체를 만든다
let user = {
    name : 'lky',
    age : 21
};

// 하지만 비슷한 객체를 많이 만들어야 한다면 '생성자 함수'가 유용하다 (일종의 객체 도장)
function User (name, age) { // (첫글자 대문자)
    // this = {}

    this.name = name; // 프로퍼티가 name
    this.age = age; // 프로퍼티가 age
    this.sayName = () => { // 프로퍼티가 함수 sayName()
        console.log(this.name)
    }

    // return this
}

// new 연산자를 통해서 생성자 함수를 호출한다 (만약 new를 안붙인다면 undefined)
let user1 = new User('daramji', 3); // user1은 객체가 되었다.
let user2 = new User('pachiritsu', 2); // user2는 객체가 되었다.

console.log(user1, user2)
user1.sayName();
user2.sayName();