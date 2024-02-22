/*
    - setTimeout : 일정시간이 지난 후에 함수를 실행한다
    - setInterval : 일정 시간 간격으로 함수를 반복한다
    - setTimeout/Interval (함수, 시간, 함수의 인수)
*/

console.log('3초 뒤에 1초 간격으로 프린팅')

function repeating() {
    setInterval(() => {
        console.log('1초 간격으로 프린팅');
    }, 1000); // 밀리초 단위, ctrl+c : EOF 토큰
}

setTimeout(repeating, 3000);

// 5초 동안만 실행하고 싶게 한다면?
// clearInterval
// setInterval은 tId를 반환한다

let num = 0;

function repeating2() {
    console.log(`접속 ${num}초 경과`);
    num += 1;

    if (num > 5) {
        clearInterval(tId); // clear한다
    }
}

const tId = setInterval(repeating2, 1000);