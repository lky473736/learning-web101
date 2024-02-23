// practice 11. promise 연습

// promise는 동기적 프로그래밍을 하기 위해 반드시 필요하다. 특정 함수가 다 실행되었으면 resolve를 실행하며, 특정 함수가 실패하면 reject를 실행한다. 둘 다 실행 후엔 finally를 실행한다.

const pr = new Promise((resolve, reject) => {
    const num = 0;

    if (num === 0) {
        resolve(num); // 여기서 인수는 then에서 각 resolve, reject, finally에 전달된다
    }

    else {
        reject(num);
    }
});

// then 키워드를 이용해서 resolve와 reject를 표현한다. 이때 then의 첫번째 parameter가 resolve함수, 두번째 parameter가 reject함수이다.
pr.then(function(){
    console.log("성공하였습니다.");
}, function(){
    console.log("실패하였습니다.");
})

// 위와 똑같이 작성할 수 있는 것은 catch와 finally이다. 더욱 간단하게 작성 가능하다.