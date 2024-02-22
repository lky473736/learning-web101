/* 
    call
*/

const lky = {
    name : 'lky'
};

const dedenne = {
    name : 'dedenne'
};

function showThisname(msg) {
    console.log(this.name, msg); // 여기서의 this는 아무것도 가리키지 않는다. 이럴 땐 window를 가리키게 된다
}

showThisname.call(lky, 'hello'); // 이렇게 하면 showThisname에 this 대신 lky를 전달하고 함수를 실행할 수 있게 해준다
// 매개변수가 2개 이상 있을 땐, 첫번째가 객체, 두번째부터 함수의 매개변수이다.

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(lky, '3/26', 'student');
console.log(lky);