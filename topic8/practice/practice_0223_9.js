// practice 9. call, 상속, 프로토타입 연습

function saySomething(msg) {
    console.log(`${this.name}, ${msg}`);
    // 특정 객체에 있는 name값을 사용한다. 하지만 지금 가리키고 있는 this는 window를 가리킨다.
    // 따라서 어떤 함수의 this가 가리키는 곳을 설정해줄 때 call이 필요하다
}

const user = {
    name : 'lky', 
    age : 21,
};

saySomething.call(user, 'hello'); // 이렇게 하면 saySomething()안에 있는 this는 user를 가리키게 되고, 두번째 매개변수부터는 함수의 매개변수가 된다

/*
    특정 학과의 학생들의 정보를 생각해보자. 모든 학생은 소속이 같으며, 소속 단과대학이 같고, 소속 학과가 같다. 학생 개개인의 객체를 만들 때마다 소속, 소속 단과대학, 소속 학과를 전부 써주게 된다면 너무 피곤할 것이다. 따라서 상속을 이용해서 번거로움을 줄일 수 있게 된다
*/

const computerStudent = {
    univ : 'gachon',
    dept : 'computer',
    belong : 'IT convergence',
};

const lky = {
    name : 'lky',
    age : 21,
};

const dedenne = {
    name : 'dedenne',
    age : 3,
};

lky.__proto__ = computerStudent; // 상속
dedenne.__proto__ = computerStudent; // 상속

// 상속한 원래 객체를 console로 찍을 땐 나오지 않는다. 하지만 keys나 values를 이용해 명시적으로 출력하게 하면 나온다. (정보은닉)

for (let key in lky) { // 배열은 of, 객체는 in 
    console.log(key, ':', lky[key]);
}