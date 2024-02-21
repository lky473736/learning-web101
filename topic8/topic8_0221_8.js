// symbol 연습

// 다른 개발자가 만들어 놓은 객체
const user = {
    name : "lky",
    age : 21,
};

// 내가 작업하는 공간
// user.showName = function() {} <-- 이걸 다른 사람한테 공개하지 않아야 할 때가 있겠다 (보안, 게임 패치노트 작업 ...)
const showName = Symbol('showName() 함수 작업 중');
user[showName] = () => {
    // 함수 어쩌구저쩌구
}

user[showName](); // 잘 동작함

// 사용자가 접속하면 보는 메세지
for (let key in user) {
    console.log(`${key} is ${user[key]}`);
}
