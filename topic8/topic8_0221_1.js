/*
    변수 

    let - 변경 가능한 변수, 한번 선언된 변수는 다시 선언할 수 없음
    const - 변경이 불가능한 변수
    var - (let이랑 비슷함) 한번 선언된 변수를 다시 선언할 수 있음 + 선언하기 전에 사용할 수 있음 (호이스팅)
        - 스코프(중괄호) 내에서 변수를 어디에 선언하더라도 사용할 수 있는 것을 의미한다
        - 선언은 호이스팅 되지만 할당을 호이스팅이 되지 않는다
        - name이라는 변수는 호이스팅되지만 값이 호이스팅이 안되어서 13번째 때 undefined를 출력하는 것
*/

var name;

console.log(name); // undefined

name = 'lky'; 

console.log(name); // lky

//////

/* 
    TDZ

    - let도 호이스팅된다. 하지만 var처럼 동작하지 않는다
    - let과 const는 Temporal Dead Zone의 영향을 받는다.
    - TDZ는 변수 선언 및 할당 전에 죽어있는 영역을 뜻한다. TDZ는 변수를 사용할 수 없다. 
*/

console.log (name1); // Cannot access 'name1' before initialization
let name1 = 'lky'

/*
    따라서 const는 선언과 동시에 초기화가 이뤄져야 하고,
    let은 선언과 초기화가 분리되어서 일어나도 되지만 TDZ를 조심해야 하며,
    var는 자유롭다. 또한 var는 전역변수이다. 하지만 undefined를 조심할 것
*/