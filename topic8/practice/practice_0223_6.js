// practice 6. 배열 메소드 연습

let arr = [1, 2, 3, 4, 5];

// 기본적인 메소드는 length, push, pop, shift, unshift, for~of

console.log(arr.length);
console.log(arr.push(6)); // 1, 2, 3, 4, 5, 6
console.log(arr.pop()); // 1, 2, 3, 4, 5
console.log(arr.shift()); // 2, 3, 4, 5
console.log(arr.unshift(1)); // 1, 2, 3, 4, 5
console.log(arr);

for (let component of arr) {
    console.log (component);
}

// splice는 특정 부분을 지우고 그 부분에 요소를 추가 가능하다 (파이썬의 remove)
arr.splice(0, 4); // 인덱스 0부터 4개를 지운다
console.log(arr); // 5
arr.splice(0, 0, 1, 2, 3, 4); // 인덱스 0부터 4개를 지우고, 차례대로 4, 3, 2, 1를 넣는다
console.log(arr); // 1, 2, 3, 4, 5

// 배열을 concatenate할 수 있다
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
console.log(arr1.concat(arr2)); // 1, 2, 3, 3, 4, 5

// 배열의 반복이 for of도 있지만 forEach도 있다
// forEach의 인수엔 처음에는 그 배열의 component, 두번째엔 component의 해당 인덱스이다.
arr.forEach((component, index) => {
    console.log(`${index}번째 component : ${component}`);
});

// 문자열도 하나의 배열이기 때문에 문자열에서 사용한 length, includes, indexOf 또한 사용이 가능하게 된다. 하지만 find, filter로도 사용자가 필요한 component를 찾을 수 있게 된다

// find는 무언가를 찾는데, 무언가를 찾을 때 바로 함수를 종료한다
const oddNum1 = arr.find ((component) => {
    if (component % 2 !== 0) {
        return true;
    }
});
console.log(oddNum1); // 이러면 1만 나온다

// find와 다르게 filter는 만족하는 모든 요소를 배열로 반환한다 
const oddNum2 = arr.filter((component) => {
    if (component % 2 !== 0) {
        return true;
    }
    return false;
});
console.log(oddNum2); // 이러면 1, 3, 5 다 나온다

// find, filter는 무언가를 찾을 때 용이하지만, map은 특정 함수를 이용해서 배열에서 어떤 특징을 가진 배열을 새로히 만들 때 유용하다
let factorOfSix = arr.map((component) => {
    if (6 % component === 0) {
        return component;
    }
});
console.log(factorOfSix); // 이렇게 하면 6의 약수가 아닌 4, 5는 undefined가 나오게 된다. 따라서 나중에 filter로 걸러주는 것이 필요하다
factorOfSix = factorOfSix.filter((component) => {
    return component !== undefined;
});

console.log(factorOfSix);

// sort를 이용해서 정렬할 수 있다. sort를 특정 기준으로 정렬하고 싶을 땐 함수를 이용하면 된다
console.log(arr);
arr.sort ((a, b) => {
    return b - a; // 내림차순 정렬
});
console.log(arr);

// 배열을 순회하는 방법은 for, for of, forEach, 그리고 reduce가 있다.
// reduce는 누적계산값과 현재값이 있기 때문에 누적합을 구할 때 유용한다

const sigma1to5 = arr.reduce ((prev, cur) => {
    return prev += cur;
});
console.log(sigma1to5); // 15

