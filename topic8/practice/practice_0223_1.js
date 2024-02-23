// practice 1. 생성자 함수 연습

// 학생이라는 생성자 함수를 만들 예정 (this, new 키워드)
function Student (name, age, code) {
    this.name = name;
    this.age = age;
    this.code = code;
    this.printInformation = function () {
        console.log (this.name, this.age, this.code);
    }

    console.log ("학생 등록이 완료되었습니다.");
}

const lky = new Student('lky', 21, '1');
const dedenne = new Student('dedenne', 3, '2');

lky.printInformation();
dedenne.printInformation();