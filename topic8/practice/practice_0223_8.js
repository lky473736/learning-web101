// practice 8. setTimeout, setInterval 연습
// 기본 인자는 함수, 시간, 함수의 인자 순이다.

// setTimeout은 특정 시간이 지난 후에 실행하는 함수이다.
console.log("5초 뒤에 밑변이 5인 직각삼각형이 각 층마다 1초 간격으로 출력됩니다.");
setTimeout (function(){
    let star = '*';
    for (let i = 0; i < 5; i++) {
        setTimeout (function(){
            console.log(star);
            star += '*';
        }, 1000 * (i + 1)); // 비동기와 동기를 잘 생각하자
    }
}, 5000);

// setInterval은 특정 시간을 간격으로 함수를 반복한다. 
// let i = 0;

// setInterval(function(){
//     console.log(`${i++}초 경과`);

//     if (i > 6) { 
//         console.log("종료합니다.");
//         clearInterval();
//     }
// }, 1000)