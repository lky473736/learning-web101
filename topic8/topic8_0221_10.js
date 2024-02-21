/*
    문자열 메소드
*/

// html 문법은 작은 따옴표로 감싸는게 편함
let html = '<div class="box_title">제목 영역</div>';

// ``은 여러 줄을 표현할 수 있다
// length로 문자열의 길이를 구한다
// 배열과 동일하게 트래킹할 수 있다
let sentence = `오늘은 매우 행복합니다.
왜냐면 맛있는 매생이 라면을 먹었기 때문입니다.
유후!`;

console.log(sentence, sentence.length, sentence[0]);

// 영어라면 대소문자를 바꿀 수 있다
let sentence_eng = `today is very happy
because i had the seagrass RAMEN
horay!`
console.log(sentence_eng.toUpperCase()); 
console.log(sentence_eng.toLowerCase());

// 특정 문자열에서 어떤 글자가 어디에 있는지를 알려준다
// 파이썬과 마찬가지로 가장 처음으로 보이는 문자의 인덱스를 반환한다
let sentence1 = 'to to to';
console.log(sentence1.indexOf('to'));
console.log(sentence1.indexOf('daramji')); // 없으면 -1

// indexOf를 이용해서 문자열에 어떤 문자가 들어있는지를 조사가 가능하다
if (sentence1.indexOf('to') > -1) {
    console.log ('it has "to"');
}

// 사실 includes를 이용해서 더 효율적으로 할 수 있다
if (sentence1.includes('to') == true) {
    console.log ('it has "to"');
}

// 특정 범위의 문자열만 슬라이싱한다
console.log(sentence1.slice(3, 5)); // index 3부터 4까지 슬라이싱
console.log(sentence1.slice(1, -1));

// 문자열 앞 뒤의 공백을 제거한다
let blank = '              daramji    ';
console.log(blank.trim());