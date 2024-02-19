/*
    함수 
    - function으로 함수 생성
    - 함수 만드는 방법은 파이썬과 굉장히 비슷. 형선언 안해도 됨
    - 함수형 프로그래밍
    - 지역변수, 전역변수 개념도 동일
    - default argument 지정 가능함
*/

const k = 0; // 전역변수

function sayHello(name) {
    if (name) {
        if ((typeof name) == 'string')
        {
            console.log (`hello ${name}, global ${k}`);
        }
        
        else {
            console.log ('input wrong');
        }
    }
    
    else {
        console.log ("error. undefined");
    }
}

let input_name = "lky";
sayHello(input_name);

input_name = 1;
sayHello(input_name);

sayHello();