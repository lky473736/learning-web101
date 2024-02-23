// practice 5. 문자열 메소드 연습

// ``는 html의 <pre></pre>라고 보면 편하다. ``안에 감싸져있는 그 그대로가 문자열이다.

let sentence1 = `오늘은 날씨가 좋습니다
하늘이 화창하고 맑습니다
-다람쥐가-`;
console.log(sentence1);

let sentence2 = `today's weather is so nice
the sky is BLUE and SUNNY
-from daramji-`;
console.log(sentence2.toUpperCase()); // 모두 대문자로
console.log(sentence2.toLowerCase()); // 모두 소문자로

// 특정 문자열에 어떤 글자가 어디에 있는지를 알려줄 수 있는 함수는 indexOf이다. 없으면 -1을 반환한다
console.log(sentence2.indexOf('and'));
console.log(sentence2.indexOf('dedenne')); // -1

for (let i = 0; i < 2; i++) {
    if (sentence2.indexOf('pachiritsu') != -1) { 
        console.log('이 문장엔 pachiritsu라는 단어가 있습니다');
    }
    else {
        console.log('이 문장엔 pachiritsu라는 단어가 없습니다. 아쉽네요.');
    }

    sentence2 += 'pachiritsu';
}

// includes와 indexOf는 닮았다. includes는 파이썬의 in 키워드와 동일하다
if (sentence2.includes('pachiritsu') === true) { 
    console.log('이 문장엔 pachiritsu라는 단어가 있습니다');
}
else {
    console.log('이 문장엔 pachiritsu라는 단어가 없습니다. 아쉽네요.');
}

// console.log(sentence1[1:3]) <-- 자바스크립트에선 이렇게 문자열을 슬라이싱할 수 없다
console.log(sentence1.slice(0, 3));