// class와 생성자 함수

function User(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name);
    }
};

const user1 = new User('lky', 21);
console.log(user1);

/*
    class
    - class를 이용해서도 객체를 생성할 수 있다
*/

class User2 {
    constructor(name, age) { // 생성자 메소드
        this.name = name;
        this.age = age;
    }
    showName() { // 메소드. 객체랑 다른 점은 클래스의 메소드는 프로토타입에 저장된다는 사실
        console.log(this.name);
    }
}

const user2 = new User2('dedenne', 2); // class도 또한 생성자가 들어있기 때문에 new를 사용한다
console.log(user2);

// class를 사용하는 이유는 생성자 함수에 비해 더욱 철저한 보안 및 에러 도출이 쉽고 데이터와 함수를 함께 저장하여 더욱 쉬운 관리가 돋보이기 때문