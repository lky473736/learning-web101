// practice 10. class와 생성자 함수 연습

function User(name, age) {  // 생성자 함수
    this.name = name;
    this.age = age;
}

const lky = new User('lky', 21); // new 키워드를 통해 생성자를 생성

// class를 이용해서도 객체를 생성 가능하다
class User2 {
    constructor(name, age) { // 생성자 메소드이다
        this.name = name;
        this.age = age;
    }
    showName() { // 클래스의 메소드 (멤버 함수)
        console.log(this.name);
    }
}

const user1 = new User2('user1', '1');
user1.showName();