/*
    객체에 함수를 추가 가능하다 -> method == 객체 프로퍼티로 할당된 함수
*/

const superman = {
    name : 'clark',
    age : 33,
    fly : function() {
        console.log ("날아갑니다~");
    }
};

const name = prompt("이름을 입력하세요.");

const user = {
    name,
    sayHello() {
        // console.log(`hello i am ${user.name}`) <-- 문제가 발생한다. 
        // 따라서 객체 내 method에서 property를 사용할 땐 this를 사용하자
        console.log(`hello i am ${this.name}`);
    }
}

superman.fly();
user.sayHello();