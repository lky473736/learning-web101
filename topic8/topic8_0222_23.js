/*
    promise 
    - 케이크 가게에서 내가 케이크를 주문제작하였다고 하자. 케이크 가게에 '다 되었나요?'라고 계속 되묻는것 보다는 차라리 나의 전화번호를 알려주고 '다 되었거나 실패하면 전화주세요'라고 하는 것이 더욱 효율적이다.
    - resolve는 성공, reject는 실패이다. 이 둘을 callback함수라고 부른다
*/

const pr = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    
    if (randomNum < 0.5) {
        resolve(randomNum);
    }

    else {
        reject(randomNum);
    }
}); // 3초 뒤에 resolve가 실행된다

/* 물론 이렇게 하는 것이 정석이지만 시멘틱 프로그래밍을 위해 catch를 사용하자

pr.then( 
    function(result) { // 첫번째 인수는 promise가 이행되었을 때 실행할 함수를 적는다
        console.log(result, '성공');
    }, 
    function(err) { // 두번째 인수는 promise가 실패하였을 때 실행할 함수를 적는다
        console.log(err, '실패');
    }
)*/

pr.then( 
    function(result) {
        console.log(result, '성공');
    }
).catch( // catch는 then의 두번째 인수처럼 promise가 실패하였을 때 실행할 함수를 적는다
    function(err) {
        console.log(err, '실패');
    }
).finally( // finally는 then이나 catch의 함수를 실행하고 나서 실행된다
    function() {
        console.log("프로그램 종료");
    }
)