// 예시를 하나 들어보자. 

let male = {
    sex : 'male',
    printSex() {
        console.log(`my sex is ${this.sex}`); // 자신의 객체를 가리킨다
    },
}

let female = {
    sex : 'female',
    printSex() {
        console.log(`my sex is ${this.sex}`); // 자신의 객체를 가리킨다.
    },
}

male.printSex(); // male
female.printSex(); // female
// 만약 method를 화살표 함수로 만든다면?

/*
    this를 사용할 때 주의할 점은, 화살표 함수랑 일반 함수랑 this의 사용법이 다르다는 것이다.
    - 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않는다.
    - 화살표 함수 내부에서 this를 사용한다면 그 this는 외부에서 값을 가져온다.
*/

let test = {
    name : 'test',
    testMethod : () => {
        console.log(this); // 여기서의 this는 자신의 객체를 가리키지 않는다.
    }
}

test.testMethod(); // {} 출력 (전역객체)