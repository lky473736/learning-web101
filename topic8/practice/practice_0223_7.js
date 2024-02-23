// practice 7. 나머지 매개변수와 전개 구문 연습

function showName(name) {
    console.log(name);
}

showName('lky', 'dedenne', 'babydaramji'); // 이래도 동작한다. 인수의 갯수를 반드시 정확히 맞출 필요 없다. 이러면 lky가 출력된다

// 나머지 매개변수 : 인수로 배열을 받을 수 있게 한다
function sampleFunction(param1, ...anotherParam) {
    console.log(`${param1}이 원래 인수입니다`);
    console.log(`${anotherParam}이 사용자가 추가로 입력한 인수입니다.`);
}
sampleFunction(1, 2, 3, 4, 5); // 1 - [2, 3, 4, 5]

// 배열을 인수로 받고 그 배열의 합을 출력하기
function sumation (...param) {
    return param.reduce((prev, cur) => {
        return prev += cur;
    });
}
console.log(sumation(1, 2, 3, 4, 5)); // 15

// 배열을 인수로 받고 그 배열의 최솟값을 출력하기
function findMin (...param) {
    let minNum = param[0];

    param.forEach((component) => {
        if (component < minNum) { 
            minNum = component;
        }
    });

    return minNum;
}
console.log(findMin(10, 9, 8, 7, 6));

// 전개구문을 이용하면 굳이 concat할 필요 없다
console.log([1, 2, 3, ...[4, 5, 6]]); // 1, 2, 3, 4, 5, 6
console.log([...[1, 2, 3], ...[4, 5, 6]]); // 1, 2, 3, 4, 5, 6