/*
    상속, 프로토타입
    - 프로토타입 : __proto__
    - 상속 : OOP에 그 상속이랑 동일 (object). 기본 객체를 여기서는 프로토타입이라고 부른다. 하지만 여기서 프로토타입은 숨겨져있음
*/

const user = {
    name : 'lky'
};
console.log(user.name);
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('age')); // false. age라는 프로퍼티가 없으니깐

/////////

const car = { // 기본 객체
    wheels : 4,
    drive() {
        console.log("drive");
    }
};

const bmw = {
    color : 'red',
    navigation : 1
};

const benz = {
    color : "black"
};

const audi = {
    color : "blue"
};

bmw.__proto__ = car; // car는 bmw의 프로토타입이 된다 (하지만 프로토타입은 숨겨져있음)
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw.wheels); // 명시적으로 작성해야만 프로토타입을 꺼낼 수 있다
console.log(benz.wheels);
console.log(audi.wheels);

for (let key in bmw) {
    console.log(key); // color, navigation, wheels, drive
}